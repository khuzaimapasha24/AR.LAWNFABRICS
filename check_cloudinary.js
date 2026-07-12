const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function checkConnection() {
  try {
    const result = await cloudinary.api.ping();
    console.log("Cloudinary Connection SUCCESSFUL! 🎉");
    console.log("Response:", result);
  } catch (error) {
    console.error("Cloudinary Connection FAILED ❌");
    console.error(error);
  }
}

checkConnection();
