import React from 'react'
import "./PetsList.css"
export const PetsList = (props) => {
    return (
        <div>
            {props.pets.map((pet)=>{
                return(
                     <div className="blog-preview" key={pet.id}>
                    <h2>{pet.petName}</h2>
                    <p>{pet.ownerName}</p>
                    <p>{pet.ownerEmail}</p>
                </div>

                ); })}
        </div>
    )
}