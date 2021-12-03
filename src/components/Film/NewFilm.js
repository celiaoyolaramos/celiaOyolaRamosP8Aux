import React, { useContext, useState } from 'react'
import {Card} from "../UI/Card"
import {Button} from "../UI/Button"
import authCtx from '../store/auth-context'
export const NewFilm = (props) => {
    const {dispatch}=useContext(authCtx);

const[filmName, setFilmName]=useState("");
const[yearPremiere, setYearPremiere]=useState("");
const[directorName, setDirectorName]=useState("");
const[newPrice, setNewPrice]=useState("");
const [showSumary, setShowSumary] = useState(false);
const filmNameHandler=(event)=>{
    console.log(event.target.value);
    setFilmName(event.target.value);
    if (filmName !== "") 
        setShowSumary(true);
    else 
        setShowSumary(false);
}
const yearPremiereHandler=(event)=>{
    setYearPremiere(event.target.value);
    if (yearPremiere !== "") 
        setShowSumary(true);
    else 
        setShowSumary(false);
}
const directorNameHandler=(event)=>{
    setDirectorName(event.target.value);
    if (directorName !== "") 
        setShowSumary(true);
    else 
        setShowSumary(false);
}
const newPriceHandler=(event)=>{
    setNewPrice(event.target.value);
    if (newPrice !== "") 
        setShowSumary(true);
    else 
        setShowSumary(false);
}
const film={
    filmName,
    yearPremiere,
    directorName,
    newPrice
}
const submitHandler=(event)=>{
    event.preventDefault();
    dispatch({
        type:"add_film",
        payload:{...film, id: Math.trunc(Math.random()*100)}
    });
    setFilmName(" ");
    setYearPremiere(" ");
    setDirectorName(" ");
    setNewPrice(" ");
}

    return( 
        <>
        <Card>
        <form onSubmit={submitHandler}>
            <label>Nombre de la Pelicula</label>
            <input type="text" onChange={filmNameHandler} value={filmName}/>
            <label>Año de Estreno</label>
            <input type="number" onChange={yearPremiereHandler} value={yearPremiere}/>
            <label>Director</label>
            <input type="text" onChange={directorNameHandler} value={directorName}/>
            <label>Precio</label>
            <input type="number" onChange={newPriceHandler} value={newPrice}/>
            <Button>Crear</Button>
        </form>
        </Card>
        
        </>
  
    )
}