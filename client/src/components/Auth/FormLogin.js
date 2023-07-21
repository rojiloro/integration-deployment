import { useMutation } from "react-query";
import { API, setAuthToken } from "../../config/api";
import jwt_decode from "jwt-decode";
import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import cssModules from "../../css/RegisterLogin.module.css";

import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function FormLogin({ show, showLogin, showDaftar }) {
  let navigate = useNavigate();
  const handleClose = () => showLogin(false);

  const SwitchKlik = () => {
    handleClose();
    showDaftar(true);
  };
  // ini useContextnya login
  const [_, dispatch] = useContext(UserContext);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/login", form);
      console.log("login success : ", response);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
      });

      let token = response?.data?.data?.token;
      let decodeToken = jwt_decode(token);

      console.log(decodeToken);

      setAuthToken(localStorage.token);
      // Status check
      if (decodeToken?.role === "admin") {
        navigate("/adminindex");
        console.log("berhasil ke admin");
      } else {
        navigate("/");
        console.log("ini gagal");
      }
      console.log("login success : ", response);
    } catch (error) {
      console.log("login failed : ", error);
      alert("email or password wrong maybe");
    }
  });
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Container>
          <form className="text-center mb-5" onSubmit={(e) => handleSubmit.mutate(e)}>
            <div>
              <h1 className={cssModules.h1}>LOGIN</h1>
              <input value={username} onChange={handleChange} id="username" name="username" type="text" placeholder="Username" className={cssModules.Input} required />
              <input value={password} onChange={handleChange} id="password" name="password" type="password" placeholder="Password" className={cssModules.Input} required />
              <button type="submit" className={cssModules.btn} onClick={handleClose}>
                Login
              </button>

              <p className={cssModules.p}>
                Belum Punya Akun?{" "}
                <span className={cssModules.b} onClick={SwitchKlik}>
                  Klik Disini
                </span>
              </p>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
}
