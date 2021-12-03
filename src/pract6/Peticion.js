import React, { useEffect } from 'react'
import "./stylesList.css";
//const filmContainer=document.querySelector(".films");
export const Peticion = () => {

let films=[];

const renderFilm = (data)=>{
   
    films=[...films,data];
    console.log(films);
 
};


const getFilm=()=>{
    for(let i=1;i<=6;i++){
     let url=`https://swapi.dev/api/films/${i}`;
    fetch(url)
        .then((res)=>res.json())
        .then((json)=>{
           // console.log(json);
             let film={
                    id:json.episode_id,
                    name:json.title,
                    descrpt:json.opening_crawl,
                    date:json.created
           }
                    
                    renderFilm(film);        
        });       
    }; 
}

    useEffect(() => {
    
        getFilm();
      }, []);
      

    return (
        <div>
           <h1>PELICULAS STAR WARS</h1>
            
            <div className="div1">
                <h2>pelicula1</h2>
                <img className="image" src="https://es.web.img2.acsta.net/medias/nmedia/18/86/33/09/19835623.jpg"   />
                <button className="list">Ver mas</button>
            </div>
            <div className="div2">
                <h2>pelicula2</h2>
                <img className="image" src="https://i.pinimg.com/originals/94/c3/dd/94c3dde88c6ce2a1960ab4f5644f6076.jpg"   />
                <button className="list">Ver mas</button>
            </div>
            <div className="div3">
                <h2>pelicula3</h2>
                <img className="image" src="http://observandocine.com/wp-content/uploads/2015/11/star-wars-iii.jpg"   />
                <button className="list">Ver mas</button>

            </div>
            <div className="div4">
                <h2>pelicula4</h2>
                <img className="image"src="https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg"   />
                <button className="list">Ver mas</button>
            </div>
            <div className="div1">
                <h2>pelicula5</h2>
                <img className="image" src="https://pm1.narvii.com/6399/8fdb665270cc6cac8674a8af1eea05cb1c8a2a9d_hq.jpg"   />
                <button className="list">Ver mas</button>
            </div>
            <div className="div2">
                <h2>pelicula6</h2>
                <img className="image"src="http://observandocine.com/wp-content/uploads/2015/12/star_wars_vi___return_of_the_jedi___movie_poster_by_nei1b-d5t3b8d.jpg"   />
                <button className="list">Ver mas </button>

            </div>
           
        </div>
    )
}


