// import { v2 as cloudinary } from "cloudinary";

// export async function POST(request) {
//   const body = await req.json();
//   const { paramsToSign } = body;

//   const signature = cloudinary.utils.api_sign_request(
//     paramsToSign,
//     process.env.CLOUDINARY_API_SECRET
//   );

//   return Response.json({ signature });
// }

import cloudinary from "cloudinary";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      // 設置你的 Cloudinary 資訊
      cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

      const signature = cloudinary.v2.utils.api_sign_request(
        { timestamp: Math.round(new Date().getTime() / 1000) },
        process.env.CLOUDINARY_API_SECRET
      );

      res.status(200).json({ signature, timestamp });
    } catch (error) {
      console.error("錯誤生成 Cloudinary 簽名", error);
      res.status(500).json({ message: "無法生成簽名" });
    }
  } else {
    // 處理不支持的請求方法
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
