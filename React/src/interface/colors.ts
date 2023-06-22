import * as Yup from 'yup';
export interface IColor {
    _id: string;
    name: string;
   
    
    }
export const schemaColor = Yup.object({
    name: Yup.string().required("Không được để trống").max(20, "Không được viết quá 20 ký tự").trim().matches(/^[^\s].*[^\s]$/, "Tên không hợp lệ"),
})
export type ColorForm = Yup.InferType<typeof schemaColor>