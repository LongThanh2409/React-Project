import * as Yup from 'yup';
export interface Iusers {
_id?: string,
name: string,
email:string,
role:string
}

export const schemaUsers = Yup.object({
    name: Yup.string().required("Không được để trống").max(50, "Không được viết quá 20 ký tự").trim().matches(/^[^\s].*[^\s]$/, "Tên không hợp lệ"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string()?.required("Trường dữ liệu bắt buộc").min(6, "Nhập ít nhất 6 kí tự"),
    role: Yup.string()
})
export type UsersForm = Yup.InferType<typeof schemaUsers>