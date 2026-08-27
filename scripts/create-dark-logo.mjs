import sharp from "sharp";

const source = "public/images/logo-adry.jpg";
const output = "public/images/logo-adry-dark.png";

const { data, info } = await sharp(source)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = Buffer.alloc(info.width * info.height * 4);

for (let sourceIndex = 0, targetIndex = 0; sourceIndex < data.length; sourceIndex += 3, targetIndex += 4) {
  const red = data[sourceIndex];
  const green = data[sourceIndex + 1];
  const blue = data[sourceIndex + 2];
  const opacity = Math.max(255 - red, 255 - green, 255 - blue);

  if (opacity < 26) {
    pixels[targetIndex + 3] = 0;
    continue;
  }

  const alpha = opacity / 255;
  const foregroundRed = Math.max(0, Math.min(255, (red - 255 * (1 - alpha)) / alpha));
  const foregroundGreen = Math.max(0, Math.min(255, (green - 255 * (1 - alpha)) / alpha));
  const foregroundBlue = Math.max(0, Math.min(255, (blue - 255 * (1 - alpha)) / alpha));
  const isOrange =
    foregroundRed > 180 &&
    foregroundGreen > 45 &&
    foregroundGreen < 170 &&
    foregroundBlue < 70 &&
    foregroundRed - foregroundGreen > 70;

  pixels[targetIndex] = isOrange ? 255 : 255;
  pixels[targetIndex + 1] = isOrange ? 91 : 253;
  pixels[targetIndex + 2] = isOrange ? 20 : 248;
  pixels[targetIndex + 3] = Math.min(255, Math.round((opacity - 26) * 1.12));
}

await sharp(pixels, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .resize({ width: 520, kernel: sharp.kernel.lanczos3 })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(output);

const metadata = await sharp(output).metadata();
console.log(`${output} ${metadata.width}x${metadata.height}`);
