export default function Footer (props){
    const {direccion, celular , referencia, correo} =props;
    return(
        <div>
            <h3>Footer</h3>
            <p>{direccion}</p>
            <p>{celular}</p>
            <p>{referencia}</p>
            <p>{correo}</p>
        </div>
    );
}