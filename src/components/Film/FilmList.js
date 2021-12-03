import React, { useContext } from 'react'
import AuthContext from '../store/auth-context'
import { FilmItem } from './FilmItem'
import "./FilmList.css"
export const FilmList = () => {
const {state}=useContext(AuthContext)

   /* return (
        <div>
            {props.films.map((film)=>{
                return(
                     <div className="blog-preview" key={film.id} >
                    <h2>{film.filmName}</h2>
                    <p>Año de Estreno:{film.yearPremiere}</p>
                    <p>Director:{film.directorName}</p>
                    <p>Precio:{film.newPrice} $</p>
                </div>
                ); })}
        </div>
    )*/
    return(
        <div>
            {state.map((film)=>{
                return<FilmItem key={film.id} {...film}/>
            })}
        </div>
    )
}