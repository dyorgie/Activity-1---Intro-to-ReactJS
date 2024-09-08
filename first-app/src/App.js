// import logo from "./logo.svg";
// import john from "./picture/john.jpg";
import "./App.css";

function App(props) {
  return (
    <div class="div">
      <img src={props.img} class="img"></img>
      <h1>{props.name}</h1>
      <h1>{props.birthday}</h1>
      <h1>{props.role}</h1>
    </div>
  );
}

export default App;
