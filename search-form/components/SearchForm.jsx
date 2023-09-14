import React, { useState, useEffect, lazy } from 'react'

const SearchForm = () => {

    const [dataAPI, setDataAPI] = useState([])
    const [userData, setUserData] = useState([])
    
    const llamadaAPI = async (id)=>{
        try{
            const llamada = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const datos = await llamada.json();
            console.log(datos)
            setDataAPI(datos)
        } catch(error){"error detected", error}
        }
    

    const handleSendData = ()=>{
        llamadaAPI(userData)
    }

  return (
    <>
    Escribe el id que quieres buscar
    <input type='text' onChange={(e)=>{setUserData(e.target.value)}}></input>
    <button onClick={()=>{handleSendData()}}>Enviar</button>
    {dataAPI.title}
    <br></br>
    {dataAPI.body}
    </>
  )
}

export default SearchForm