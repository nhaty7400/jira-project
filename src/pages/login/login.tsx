import css from "./login.module.scss"
import { useFormik } from "formik";
import * as Y from "yup";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/user.service";
import { setLocalStorage } from "../../utils";
import { ACCESS_TOKEN, EMAIL } from "../../constants";

const loginSchema = Y.object({
  email: Y.string()
    .email()
    .required("Bắt buộc nhập vào email")
    .email("email không hợp lệ"),
  password: Y.string()
    .min(5, "Password phải lớn hơn 5 ký tự.")
    .max(20, "Password phải nhỏ hơn 20 ký tự.")
    .required("Bắt buộc nhập vào password."),
});

export type TParamsLogin = {
  email: string | undefined;
  password: string | undefined;
};



function Login() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
  
    validationSchema: loginSchema,
  
    onSubmit: function (value) {
      const data: TParamsLogin = {
        email: value.email,
        password: value.password,
      };
      userLogin(data)
        .then((resp) => {

          setLocalStorage(ACCESS_TOKEN, resp.content.accessToken);
          setLocalStorage(EMAIL, data.email);
          
          navigate("/home");
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
  
  });

  return (
    <div className={css["container"]}>
      <div className={css["left-background"]}></div>
      <form
        style={{
          width: "50%",
        }}
        onSubmit={formik.handleSubmit}
      >
        <h2 className={css["title"]}>Login</h2>
        <div className={css["content-container"]}>
          <div className={css["content"]}>
            <div className={css["form-group"]}>
              <p className={css["register-title"]}>Email</p>
              <input
                className={css["register-input"]}
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className={css["text-danger"]}>{formik.errors.email}</p>
              )}
            </div>
            <div className={css["form-group"]}>
              <p className={css["register-title"]}>Password</p>
              <input
                type="password"
                className={css["register-input"]}
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <p className={css["text-danger"]}>{formik.errors.password}</p>
              )}
            </div>
            <div className={css["button-container"]}>
                <button className={css["submit-button"]} type="submit">
                  Submit
                </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login