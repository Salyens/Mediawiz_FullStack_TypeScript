// import sharp from 'sharp';

// export const generateBlurDataURL = async (imgURL:string) => {
//   const response = await fetch(imgURL);
//   const buffer = await response.arrayBuffer();

//   const imageBuffer = Buffer.from(buffer);

//   const { data, info } = await sharp(imageBuffer)
//     .resize({ width: 50 })
//     .png()
//     .toBuffer({ resolveWithObject: true });

//   const base64 = `data:image/png;base64,${data.toString('base64')}`;

//   return base64;
// };
