import { object, string } from "yup";

const loginSchema = object({
  email: string().email("Invalid email address").required("Required"),
  password: string().required("Required"),
});

export default loginSchema;
