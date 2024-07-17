'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./signup.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { RegistrationApi } from "@/api/api";
import { useRouter } from "next/navigation";

export default function SignupPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [username, setUserName] = useState("");
    const [error, setError] = useState(null|| String);
    const [isSubmitting, setIsSubmitting] = useState(false);
  
  
    const navigate = useRouter();
  
    const handleInputChange = (e: any) => {
      const { name, value } = e.target;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      } else if (name === "repeat-password") {
        setRepeatPassword(value);
      } else if (name === "username") {
        setUserName(value);
      }
    };
  
    /*const handleRegister = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      try {
        if (!email) {
          setError("Не заполнено 'Почта'");
          return;
        }
        if (!password) {
          setError("Не заполнено 'Пароль'");
          return;
        }
        if (!repeatPassword) {
          setError("Подтвердите пароль");
          return;
        }
        if (!username) {
          setError("Не заполнено 'Имя пользователя'");
          return;
        }
        if (password !== repeatPassword) {
          setError("Пароли не совпадают");
        } else {
            RegistrationApi({ email, password, username })
            .unwrap()
            .then(() => {
              alert(`Выполняется регистрация: ${email} ${username}`);
              navigate.push("/login");
            })
            .catch((error) => {
              throw new Error(error.message);
            });
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsSubmitting(false);
      }
    };*/

    const handleRegister = async () => {
        if (password !== repeatPassword) {
          setError("Пароли не совпадают");
        } else {
          try {
             await RegistrationApi(email, password);
            navigate.push("/login");
          } catch (currentError) {
            console.log(error);
          } finally {
           
          }
        }
      };
    

    // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
    useEffect(() => {
      setError(null||String);
    }, [email, password, repeatPassword, username]);
  
    useEffect(() => {
      localStorage.removeItem("user");
    }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
          <Link href={"/"}>
              <div className={styles.modalLogo}>
                <Image
                  src="/logo_modal.png"
                  alt="logo"
                  width={140}
                  height={21}
                />
              </div>
              </Link>
            <input
              className={classNames(styles.modalInput, styles.login)}
              type="text"
              name="email"
              placeholder="Почта"
              value={email}
              onChange={handleInputChange}
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={handleInputChange}
            />
            <input
              className={styles.modalInput}
              type="password"
              name="repeat-password"
              placeholder="Подтвердите пароль"
              value={repeatPassword}
              onChange={handleInputChange}
            />
             {error && <div className={styles.registrError}>{error}</div>}
            <button
              type={"submit"}
               className={styles.modalBtnSignupEnt}
               onClick={handleRegister}
               disabled={isSubmitting}
               >
              <Link  href={"/signin"}>Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}