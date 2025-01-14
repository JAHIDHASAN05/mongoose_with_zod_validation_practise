import { IStudent } from "./student.interface";
import { StudentModel } from "./student.model";


const createStudentIntoDB=async(payload:IStudent)=>{
    console.log(payload,'kljhkll');     
    const result = await StudentModel.create(payload);
    return result;
}


export const studentServices={
    createStudentIntoDB
}