import './App.css';
import io from 'socket.io-client';
import { useEffect,useState } from 'react';
import { Button } from 'bootstrap';
const socket=io.connect("http://localhost:3001");

function App() {
  

  const[message,setMessage]=useState("");
  const[messageRecieved,setMessageRecieved]=useState('');
  const sendMessage=()=>{
    socket.emit("send_Message" , { message: "Hello" });
  };

  useEffect(()=>{
    socket.on("recieve_Message",(data)=>{
      setMessageRecieved(data.message);
    })
  },[socket])
  return (
    <div className="App">
      <input placeholder='Message'></input>
      <button onClick={(event)=>setMessage(event.target.value)}>Send Message</button>
      <h1>Message:</h1>
      {messageRecieved}
    </div>
  );
}

export default App;
