import React,{useCallback, useState} from 'react';
import { useContext } from 'react';
import {NewFilm} from './components/Film/NewFilm';
import {NavBar} from './components/navigation/NavBar';
import {FilmList} from './components/Film/FilmList'
import authCtx from './components/store/auth-context';
import {Login} from './components/login/Login';
function App(){
    const ctx = useContext(authCtx);
    const[emailNav, setEmailNav]=useState("");
    const Email=useCallback((emailLogin)=>{
        setEmailNav(emailLogin);
    },[])
    /*const [filmsList, setFilmsList] = useState([]);
    const newFilmHandler=(filmName, yearPremiere, directorName, newPrice)=>{
        setFilmsList((prevFilmList)=>{
            return [...prevFilmList,{ id:Math.trunc()*100, filmName, yearPremiere, directorName, newPrice} ]
        });
    };*/

    return (
    <div className="content">
        <NavBar email={emailNav}/>
        {ctx.isLoggedIn?(
            <>
             <NewFilm />
             <FilmList  />
            </>
        ):(
            <Login emailLog={Email}/>
        )}
    </div>
    )
};
export default App;

