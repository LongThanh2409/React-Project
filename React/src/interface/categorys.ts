import * as Yup from 'yup';
export interface Icategorys {
    _id?: string;
    name: string;
    products:Array<string>;
    
    }
export const schemaCategorys = Yup.object({
    name: Yup.string().required("Không được để trống").max(20, "Không được viết quá 20 ký tự").trim().matches(/^[^\s].*[^\s]$/, "Tên không hợp lệ"),
})
export type CategorysForm = Yup.InferType<typeof schemaCategorys>