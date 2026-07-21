import './App.css';
import Tarjeta from './components/Tarjeta';
import Header from './components/Header';
import Footer from './components/Footer';


function App(){
  return(
    <div>
      <header/>
      <main>
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </main>
      <Footer/>
      <h1>Hola Mundo</h1>
      <Tarjeta />
      <Tarjeta />
      <Tarjeta />
    </div>
  );
};

export default App;