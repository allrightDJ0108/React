import React, {useState,useEffect} from 'react';
import Axios from 'axios';

function App() {

  const [user, setUser] = useState("");

  useEffect(()=> {

    Axios.post("/api/users").then((response) => {
      if (response.data){
        setUser(response.data);
      } else {
        alert("failed to");
      }
    });
  }, []); //[]은 한 번만 렌더링되도록 하는 useEffect방식

  return (
    <div className="App">
      <div align = 'left' style={{margin:'20px'}}>
        <h2>GCU-React-Spring Integration</h2>
          ID : {user.id}<br/>
          Name : {user.name}<br/>
          Date : {user.dob}<br/>
      </div>
    </div>
  );
}

export default App;
