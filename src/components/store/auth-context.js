import { createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {}
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoggedInfo = localStorage.getItem("isLOggedIn");
        if (+storedLoggedInfo === 1) {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", 1);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };
    const filmsReducer=(state,action)=>{
        switch (action.type){
            case "add_film":{
                return [...state, action.payload];
            }
            case "remove_film":{
                return state.filter((item)=>item.id !==action.payload);
            }
            default:{
                return state;
            }
        }
    };
    const [state, dispatch]=useReducer(filmsReducer,[]);
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler,
                state,
                dispatch
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;