import { useState } from "react"

export default function Carro(){
    const [carro, setCarro]=useState({'marca':'','modelo':''})
    const mostrarCarro = (e)=>{
        const {name, value} = e.target
        if(name == 'marca'){
            setCarro({'marca': value, 'modelo': carro.modelo})
        }else if(name == 'modelo'){
            setCarro({'marca': carro.marca, 'modelo': value})
        }
    }
    
    return(<>
    <h2>Dados do Carro</h2>
    Marca: <input type="text" name='marca' onChange={mostrarCarro} /><br />
    Modelo: <input type="text" name='modelo' onChange={mostrarCarro} /><br />
    <p>Meu carro é um {carro.modelo} da {carro.marca}</p>

    </>)
}