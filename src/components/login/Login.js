import React, { useContext, useReducer, useState } from 'react'
import {Card} from "../UI/Card";
import {Button} from '../UI/Button';
import {AuthContext} from '../store/auth-context';

const emailReducer = (state, action) => {
    if (action.type === "user") {
        return {
            value: action.val,
            isValid: action.val.includes("@")
        };
    }
    return {
        value: "",
        isValid: false
    };
};

export const Login = (props) => {
    const ctx = useContext(AuthContext); 
    const [email, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null
    });
    const [password, setPassword] = useState("");

    const emailChangeHandler = (e) => {
        dispatchEmail({
            val: e.target.value,
            type: "user"
        });
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (email.isValid) {
            ctx.onLogin(email, password);
            const emailLogin=email.value;
            props.emailLog(emailLogin);
        }
        else {
            console.log("el email es invalido");
        }
        email.value = "";
        setPassword("");
    };

    return (
        <Card>
            <form onSubmit={handlerSubmit}>
                <label>Email</label>
                <input type="text" onChange={emailChangeHandler}/>
                <label>Password</label>
                <input type="password" onChange={passwordChangeHandler}/>
                <Button>login</Button>
            </form>
        </Card>
    );
};