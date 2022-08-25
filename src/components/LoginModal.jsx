import React, {useContext, useState} from 'react';
import {Box, Modal, Typography} from "@mui/material";
import {Context} from "../index";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const LoginModal = ({active, setActive}) => {

    const {auth} = useContext(Context);
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const authHandler = () => {
        let email = emailValue;
        let password = passwordValue;

        const {user} = auth.signInWithEmailAndPassword(email, password)
            .catch(() => {
                console.log(auth.errorCode);
            });

        setActive(false);
    }

    return (
        <div>
            <Modal
                open={active}
                onClose={() => {
                    setActive(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">Авторизация</Typography>
                    <form className={"mui-form"} id={"auth-form"} name={"authForm"}>
                        <div className={"mui-textfield mui-textfield--float-label"}>
                            <input type={"email"} id={"email"} onChange={(e) => {
                                e.preventDefault();
                                setEmailValue(e.target.value);
                            }} required/>
                            <label>Email</label>
                        </div>
                        <div className={"mui-textfield mui-textfield--float-label"}>
                            <input type={"password"} id={"password"} onChange={(e) => {
                                e.preventDefault();
                                setPasswordValue(e.target.value);
                            }} required/>
                            <label>Пароль</label>
                        </div>
                        <button type={"submit"} className={"mui-btn mui-btn--raised mui-btn--primary"} onClick={authHandler}>Войти</button>
                        <button type={"button"} className={"mui-btn mui-btn--raised mui-btn--primary"} onClick={() => setActive(false)}>Назад</button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default LoginModal;