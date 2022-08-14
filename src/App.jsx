import {useState} from 'react'
import './App.css';
import Filho from './components/FilhoState'
import Componente1 from './components/Componente1'
import NovoValor from './components/NovoValor';
import Carro from './components/Carro';


function App() {

  const [aluno, setAluno] = useState('João')
  const [valorState, setValorState] = useState(5)
  var valor = 5

  const aumentar = ()=>{
    setValorState(valorState + 1)
    valor += 1
  }

  const [num,setNum]=useState(0)

  return (
   <>
    <p>O nome do aluno é {aluno}</p>
    <p>Valor State = {valorState}</p>
    <p>Valor variável = {valor}</p>
    <button onClick={()=>aumentar()}>Aumentar</button>
    <button onClick={()=>setAluno('Maria')}>Mudar</button>
    <Filho valor = {valorState} aumentar={aumentar}/>
    <Componente1>
        <h2>Este está vindo do pai.</h2>
        <p> O número {num} é {
            num % 2 == 0 ? 'par' : 'impar'
        }
        </p>
        {
            num % 2 == 0 ? <p>É par</p> : <h2>É impar</h2>
        }
        <button onClick={()=>setNum(num + 1)}>Num ++</button>
    </Componente1>
    <NovoValor/>
    <Carro/>
   </>
  );
}

export default App;
