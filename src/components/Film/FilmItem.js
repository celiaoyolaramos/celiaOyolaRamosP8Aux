import React, { useContext } from 'react'
import authCtx from '../store/auth-context'
export const FilmItem = ({filmName, yearPremiere, directorName, newPrice, id}) => {
    const {dispatch}=useContext(authCtx);
    const handlerClick=(id)=>{
        dispatch({type:"remove_film", payload:id});
    }
    return (
        <div className="blog-preview" onClick={()=>{
            handlerClick(id);
        }} >
                    <h2>{filmName}</h2>
                    <p>Año de Estreno:{yearPremiere}</p>
                    <p>Director:{directorName}</p>
                    <p>Precio:{newPrice} $</p>
        </div>          
    )
}