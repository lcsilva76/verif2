
export default function Componente1(props){

    const frutas = ['banana', 'maça', 'pera', 'uva']

    return(<>
        {props.children}
        <ul>
            {frutas.map((f)=><li>{`${f} fresquinha`}</li>)}
        </ul>
        <ul>
            {frutas.map((f,i)=><li>{`${i+1}° ${f} fresquinha`}</li>)}
        </ul>
    </>)
}