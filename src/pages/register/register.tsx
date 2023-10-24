import { useFormik } from "formik";
import * as Y from "yup";
import css from "./register.module.scss";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/user.service";

const registerSchema = Y.object({
  email: Y.string()
    .email()
    .required("Bắt buộc nhập vào email")
    .email("email không hợp lệ"),
  userName: Y.string()
    .min(5, "User name phải lớn hơn 5 ký tự.")
    .max(20, "User name phải nhỏ hơn 20 ký tự.")
    .required("Bắt buộc nhập vào user name."),
  password: Y.string()
    .min(5, "Password phải lớn hơn 5 ký tự.")
    .max(20, "Password phải nhỏ hơn 20 ký tự.")
    .required("Bắt buộc nhập vào password."),
  confirmPassword: Y.string()
    .oneOf([Y.ref("password")], "Confirm password must match")
    .required("Bắt buộc nhập vào confirm password."),
  phone: Y.string()
    .required("Bắt buộc nhập vào phone.")
    .min(9, "Phone phải từ 9 số.")
    .max(10, "Phone phải dưới 10 số."),
});

export type TParamsRegister = {
  email: string | undefined;
  password: string | undefined;
  name: string | undefined;
  phone: string | undefined;
};

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
      phone: "",
    },

    validationSchema: registerSchema,

    onSubmit: (value) => {
      const data: TParamsRegister = {
        email: value.email,
        password: value.password,
        name: value.userName,
        phone: value.phone,
      };

      signup(data)
        .then((resp) => {
          alert("Ok");
          navigate("/");
        })
        .catch(() => {
          alert("error");
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
        <h2 className={css["title"]}>Register</h2>
        <div className={css["content-container"]}>
          <div className={css["content"]}>
            <div className={css["form-group"]}>
              <p className={css["register-title"]}>User Name</p>
              <input
                className={css["register-input"]}
                placeholder="User name"
                {...formik.getFieldProps("userName")}
              />
              {formik.touched.userName && formik.errors.userName && (
                <p className={css["text-danger"]}>{formik.errors.userName}</p>
              )}
            </div>
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
            <div className={css["form-group"]}>
              <p className={css["register-title"]}>Confirm password</p>
              <input
                type="password"
                className={css["register-input"]}
                placeholder="Confirm Password"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className={css["text-danger"]}>
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
            <div className={css["form-group"]}>
              <p className={css["register-title"]}>Phone</p>
              <input
                className={css["register-input"]}
                placeholder="Phone"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className={css["text-danger"]}>{formik.errors.phone}</p>
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
  );
}

export default Register;
