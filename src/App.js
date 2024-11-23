import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';
import Greeting from './Components/Greeting';
import Counter from './Components/Counter';
import Clock from './Components/Clock';
import NameForm from './Components/NameForm';
import { useState } from 'react';

function App() {
  const [greetingName, setGreetingName] = useState("");

  return (
    <div className="App">

      <NameForm onSubmit={(x) => {setGreetingName(x)}} />

      <MyComponent />

      <Greeting name={greetingName} message={"Hallådär blåbär"} />

      <Greeting name={"Anna"} message={"Hej hej hej"} />

      <Counter />

      <Counter />

      <Clock />
    </div>
  );
}

export default App;
