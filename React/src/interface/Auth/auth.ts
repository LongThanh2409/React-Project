import * as Yup from 'yup';
export interface ISignup {
_id: string;
name: string;
email: string;
password: string;
confirmPassword: string;

}
export interface ISignin {
    email: string;
    password: string;

}
export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.string()
})

export type SigninForm = Yup.InferType<typeof signinSchema>

export const signupSchema = Yup.object({
    name: Yup.string().required("Không được để trống ").min(5,"Nhập ít nhất 5 ký tự").matches(/^[a-zA-Z0-9]+$/, 'Tên không được chứa ký tự đặc biệt và dấu cách'),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6,"Nhập ít nhất 6 kí tự").required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().required("Không được để trống").oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
   
})

export type SignupForm = Yup.InferType<typeof signupSchema>