import Neto from './NetoState'

function FilhoState(props){

    const propsPai = props
    return(
        <>
        <p>Do filho {props.valor}</p>
        <button onClick={()=>props.aumentar()}>Aumentar</button>
        <Neto vo={propsPai}/>        
        </>
    )
}
export default FilhoState