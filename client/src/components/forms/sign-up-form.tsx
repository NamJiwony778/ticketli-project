import React, {useState} from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {IUser} from "../../types/user.types"; 
import Input from "../models/input.model";
import Button from "../models/button.model";
import AuthService from "../../services/auth.service";

const SignUp: React.FC = () => {
    const [successful, setSuccessful] = useState<boolean>(false);
    const [message, setMessage]=useState<string>("");

    const initialValues: IUser = {
        username: "",
        email: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
          .test(
            "len",
            "The username must be between 3 and 20 characters.",
            (val: any) =>
              val &&
              val.toString().length >= 3 &&
              val.toString().length <= 20
          )
          .required("This field is required!"),
        email: Yup.string()
          .email("This is not a valid email.")
          .required("This field is required!"),
        password: Yup.string()
          .test(
            "len",
            "The password must be between 6 and 40 characters.",
            (val: any) =>
              val &&
              val.toString().length >= 6 &&
              val.toString().length <= 40
          )
          .required("This field is required!"),
   });

   const handleSignUp = (formValue: IUser) => {
    const{username, email, password} = formValue;

    AuthService.signUp(username, email, password).then(
      (res: { data: { message: React.SetStateAction<string>; }; }) => {
        setMessage(res.data.message);
        setSuccessful(true);
      }, 
      (error: { response: { data: { message: any; }; }; message: any; toString: () => any; }) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
   };
    
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSignUp}>
        <Form>
           {
            !successful && (
                <div>
                    <Input label="Username" name= "username" type="text" className="form-control" component="div"/>
                    <Input label="Email" name= "email" type="email" className="form-control" component="div"/>
                    <Input label="Password" name= "password" type="password" className="form-control" component="div"/>
                    <Button text="Sign Up"/>
                </div>

            )
           }
        </Form>
    </Formik>
  )
}

export default SignUp;