import { SigninForm, SignupForm } from "../../interface/Auth/auth";
import instance from "../config";
const Signins = (data: SigninForm) => {
  return instance.post("/signin", data);
};
const Signups = (data: SignupForm) => {
  return instance.post("/signup", data);
};
export { Signins, Signups };
