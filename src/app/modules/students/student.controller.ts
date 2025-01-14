import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent= async (req:Request, res:Response)=>{
   
    const student= req.body
    console.log(student);
    const result= await studentServices.createStudentIntoDB(student)

    res.status(200).json({
        success: true,
        message: "Student is created successfully",
        statusCode: 200,
        data: result
    })

    

}

export const studentController={
    createStudent
}