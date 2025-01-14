import { Schema, model, connect, modelNames } from 'mongoose';
import { IGuardian, ILocalGuardian, IStudent, IUserName } from './student.interface';

const UserNameSchema= new Schema <IUserName>({
   
        firstName:{type:String, required:false},
        midlleName:{type:String, required: false},
        lastName:{type:String, required:false},
 

})

const guardianSchema= new Schema <IGuardian>({

        fatherContackNo:{type: String, required: false},
        motherContackNo: {type : String , required: false},
        fatherName: {type: String , required: false},
        motherName: {type:String , required: false},
        motherOcupation:{type:String, required: false},
        fatherOcupation: {type: String , required: false},  

})
const localGuardianSchema= new Schema<ILocalGuardian>({
    
        name:{type:String, required:false},
        ocupation:{type:String, required: false},
        address:{type:String, required: false},
        contackNo:  {type:String ,required: false},
    
})


const StudentScema= new Schema<IStudent>({
    id: {type:String, required :false},
//     user:Schema.Types.ObjectId,
    name:UserNameSchema,
    gender:['female' , "male"],
    dateOfBirth :{type:String},
    contackNo:{type:String,  required: false},
    bloodGroup:{type:String, required: false},
    emergencyContack:{type:String, required:false},
    presentAddress: {type: String, required: false},
    permanentAddress: {type: String, required: false},
//     academicDepartMent:{type:Schema.Types.ObjectId, required:false , ref:'AcademicSemister'   },
    email: {type: String, required: false},
    isActive: ['active', 'inactive'],
    profileImg: {type : String, required: false},
    guardian: guardianSchema,
    localGuardian:localGuardianSchema,
    
})


export const StudentModel=  model<IStudent>('studentPratise',StudentScema)