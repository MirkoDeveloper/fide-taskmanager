import Image from "next/image";
import logo from "../../assets/images/fides-logo.png";
import Card from "../UI/Card/Card";

import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();

    const credentials = [
        {
            superadmin: true,
            admin: true,
            user: true,
            username: "fidesSuper",
            password: "fidesSuper",
        },
        {
            superadmin: false,
            admin: true,
            user: true,
            username: "fidesAdmin",
            password: "fidesAdmin",
        },
        {
            superadmin: false,
            admin: false,
            user: true,
            username: "fidesUser",
            password: "fidesUser",
        },
    ];

    const loginSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);

        const matchCredentials = credentials.find(
            (item) =>
                item.username == loginData.username &&
                item.password == loginData.password
        );

        if (matchCredentials) {
            router.push("/");
        } else {
            alert("Credenziali Errate");
        }
    };

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    return (
        <div className="fd-login">
            <Card>
                <div className="fd-login__item">
                    <div className="fd-login__logo">
                        <Image
                            src={logo}
                            alt="fides logo"
                            width={300}
                            height={300}
                        />
                    </div>
                    <form className="fd-form">
                        <div className="fd-form__input">
                            <input
                                type="text"
                                placeholder="Nome Utente"
                                onChange={(e) =>
                                    setLoginData({
                                        ...loginData,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="fd-form__input">
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) =>
                                    setLoginData({
                                        ...loginData,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <button type="submit" onClick={loginSubmit}>
                            Login
                        </button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default Login;
