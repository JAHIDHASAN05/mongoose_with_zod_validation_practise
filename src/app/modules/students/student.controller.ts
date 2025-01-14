import { Request, Response } from "express";
import { studentServices } from "./student.service";
import { z } from "zod";
import StudentValidationSchema from "./student.validation";

const createStudent= async (req:Request, res:Response)=>{
   

    //  const studentValidationSchema= z.object({
    //     id: z.string(),
    //     name: z.object({
    //         firstName: z.string().max(20, { message:'First Name cannot be more then 20 character'}),
    //         midlleName: z.string().max(20,{message: 'not more then 20 character for midlle name'}),
    //         lastName: z.string().max(10,{message: 'lastname cannot be more than 10 character'})
    //     }),
        

    //  })
   try{
    const student= req.body

    const zodParseData= StudentValidationSchema.parse(student)
    console.log(student);
    const result= await studentServices.createStudentIntoDB(zodParseData)

    res.status(200).json({
        success: true,
        message: "Student is created successfully",
        statusCode: 200,
        data: result
    })
   }catch(err){

    res.status(400).json({
        err
    })

   }


    

}

export const studentController={
    createStudent
}