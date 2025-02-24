"use server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadTask(formData: FormData) {
  try {
    const imageFile = formData.get("image") as File | null;
    const taskWork = formData.get("taskWork") as string;
    const amountPeople = formData.get("amountPeople") as string;
    const room = formData.get("room") as string;
    const reason = formData.get("reason") as string;
    const kilomet = formData.get("kilomet") as string;
    const longItude = formData.get("longItude") as string;
    const laItude = formData.get("laItude") as string;
    const another = formData.get("another") as string;

    if (!imageFile) throw new Error("No image file provided");
    const arrayBuffer = await imageFile.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString("base64");
    const uploadResult = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64Image}`, 
      { folder: "tasks" }
    );
    const task = await prisma.post.create({
      data: {
        image: uploadResult.secure_url,
        amountPeople,
        room,
        reason,
        kilomet,
        longItude,
        laItude,
        another,
        taskWork,
      },
    });

    return { success: true, message:"ບັນທຶກຂໍ້ມູນສຳເລັດ", task};
  } catch (error) {
    return {success: false, message:"ບັນທຶກຂໍ້ມູນບໍ່ສຳເລັດ",error}
  }
}

export const postData = async(formData:FormData) => {
  console.log(formData)
  
}
