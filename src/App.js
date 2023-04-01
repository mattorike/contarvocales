import logo from './logo.svg';
import './App.css';

function App() {

  return (
    
    <div>
        <center>
  <h1>Contar vocales</h1>
  </center>
  <hr></hr>
      <form onSubmit={vocales}>
        <center>
        <p>Ingrese palabra:
          <input type="text" name="texto" >
          </input>
          <hr></hr>
        </p>
        <p>
          <input type="button" value="contar"></input>
        </p>
        </center>
      </form>
    </div>
  );
}

function vocales(e){
e.preventDefault();
const texto = e.target.texto.value;
const vocales = 'aeiouAEIOU';
let contador = 0;
for(let i = 0; i<texto.length; i++){
  if(vocales.includes(texto[i])) contador++;
}

alert("Cantidad de vocales: "+contador);


}
export default App;