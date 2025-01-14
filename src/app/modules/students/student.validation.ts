import { z } from "zod";

export const UserNameValidationSchema = z.object({
  firstName: z.string(),
  midlleName: z.string(),
  lastName: z.string(),
});

export const GuardianValidationSchema = z.object({
  fatherContackNo: z.string(),
  motherContackNo: z.string(),
  fatherName: z.string(),
  motherName: z.string(),
  motherOcupation: z.string(),
  fatherOcupation: z.string(),
});

export const LocalGuardianValidationSchema = z.object({
  name: z.string(),
  ocupation: z.string(),
  address: z.string(),
  contackNo: z.string(),
});

export const StudentValidationSchema = z.object({
  id: z.string(),
  password:z.string(),
  name: UserNameValidationSchema,
  gender: z.enum(["female", "male"]),
  dateOfBirth: z.string(),
  contackNo: z.string(),
  bloodGroup: z.string(),
  emergencyContack: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
//   academicDepartMent: z.string(), 
  email: z.string().email({message:'please give me valid email'}),
  isActive: z.enum(["active", "inactive"]),
  profileImg: z.string(),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
});


export default StudentValidationSchema;