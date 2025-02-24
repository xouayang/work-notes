   "use server"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { parseISO } from "date-fns";
const renderError = (error: unknown): { message: string } => {
    //code body
    return {
      message: error instanceof Error ? error.message : "An Error!!!",
    };
  };
  // type CreateType ={
  //   message:string
  // }
// export const createData= async (
//     prevState: unknown,
//     formData: FormData
//   ):Promise<CreateType> => {
//     try {
//       const rawData = Object.fromEntries(formData);
//       const validatedData = {
//         taskWork: String(rawData.taskWork),
//         amoutPeople: String(rawData.amoutPeople),
//         room: String(rawData.room),
//         reason: String(rawData.reason),
//         kilomet: String(rawData.kilomet),
//         another: String(rawData.another),
        
//       };
//        await prisma.post.create(
//         {
//           data:validatedData
//         }
//        )
//       return { message: "ບັນທຶກຂໍ້ມູນສຳເລັດ" };

//     } catch (error) {
//       return renderError(error);
//     }
//   };
 export const getDataList = async () => {
  try {
       const dataList = await prisma.post.findMany({
        orderBy:{
          date:'desc'
        }
       })
        return dataList
  } catch (error) {
    return renderError(error)
  }
 }
 export const deleteDataId = async (deleteId:string) => {
   try {
      await prisma.post.delete({
        where:{
          id:deleteId
        }
      }).then((deleted) => {
        if(deleted) {
          return "ລຶບຂໍ້ມູນສຳເລັດ"
        }
      }).catch((error) => {
        return renderError(error)
      }).finally(() => {
        return "ລຶບຂໍ້ມູນບໍ່ສຳເລັດ"
      })
   } catch (error) {
     return renderError(error)
   }
 }
 type Data = {
  id: string;
  image: string;
  taskWork: string;
  amountPeople: string;
  room: string;
  reason: string;
  kilomet: string;
  longItude: string;
  laItude: string;
  another: string;
};
 export const updateDataId = async (formData: Partial<Data>) => {
        try {
          await prisma.post.update({
            where:{
              id:formData.id
            },
            data:formData
          }).then(() => {
            return {success:true,message:"ແກ້ໄຂຂໍ້ມູນສຳເລັດ"}
          }).catch((error) => {
            return renderError(error)
          }).finally(() => {
            return "Can not update"
          })
        } catch (error) {
          return renderError(error)
        }
 }
 type TypeSearch = {
  startDate: string | null
  endDate: string | null
 }
 export const searchDate = async(dataPicker:TypeSearch) => {
  const startDate = dataPicker.startDate ? parseISO(dataPicker.startDate) : null;
  const endDate = dataPicker.endDate ? parseISO(dataPicker.endDate) : null;
  try {
     const result = await prisma.post.findMany({
      where:{
        date:{
          ...(startDate && { gte: startDate }),
          ...(endDate && { lte: endDate }),
        }
      }
     })
     if(result.length > 0) {
       return result;
     }
} catch (error) {
    return renderError(error);
}
 }