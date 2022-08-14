import { useState } from "react"

export default function NovoValor(){

    const [frase, setFrase]=useState('')

    return(
        <>
        <h1>Teste</h1>
        Motivação: <input type="text" onChange={(e)=>setFrase(e.target.value)} />
        <p>{frase}</p>
        </>
    )
}