import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

export default function App() {

  return (
    <div className="App">
      <Header nombre="Erick" apellido ="revoredo" dni ="1111111"/>
      <h1>Erick Revoredo </h1>
      <Footer direccion ="av.mi casa" celular="123456789" referencia ="al lado de mi vecino"
      correo ="erick@gmail.com" />
    </div>

  );
}