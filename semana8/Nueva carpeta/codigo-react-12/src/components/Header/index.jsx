export default function Header (props){
    return(
        <div>
            <h3>Header</h3>
            <p>{props.nombre}</p>
            <p>{props.apellido}</p>
            <p>{props.dni}</p>
        </div>
    );
}