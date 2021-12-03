import React,{useState} from 'react';
import { useContext } from 'react';
import {NewPet} from './components/Pet/NewPet';
import {NavBar} from './components/navigation/NavBar';
import {PetsList} from './components/Pet/PetsList'
import authCtx from './components/store/auth-context';
import Login from './components/login/Login';
function App(){
    const ctx = useContext(authCtx);
    const [petsList, setPetsList] = useState([]);
    const newPetHandler=(petName, ownerName, ownerEmail)=>{
        setPetsList((prevPetList)=>{
            return [...prevPetList,{ id:Math.trunc()*100,petName, ownerName, ownerEmail} ]
        });
    };

    return (
    <div className="content">
        <NavBar/>
        {ctx.isLoggedIn?(
            <>
             <NewPet onNewPet={newPetHandler}/>
             <PetsList pets={petsList} />
            </>
        ):(
            <Login/>
        )}
    </div>
    )
};
export default App;