import './App.css';

function App(){
  const items =['React', 'Node', 'JavaScript'];

  return(
    <section> 
      <div>Hola Mundo</div>
      <ul>
        {
          items.map((item, index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>
  )
};



export default App;