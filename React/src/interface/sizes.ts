import * as Yup from 'yup';
export interface ISize {
    _id: string;
    name: string;
   
    
    }
export const schemaSize = Yup.object({
    name: Yup.string().required("Không được để trống").max(20, "Không được viết quá 20 ký tự").trim().matches(/^[^\s].*[^\s]$/, "Tên không hợp lệ"),
})
export type SizeForm = Yup.InferType<typeof schemaSize>