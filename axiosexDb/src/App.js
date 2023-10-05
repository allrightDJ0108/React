import React, {useState,useEffect} from 'react';
import Axios from 'axios';

function App() {

  const [user, setUser] = useState("");

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDob = (e) => {
    setDob(e.target.value);
  };

  function handleClick() {
    Axios.post("/users", { id: id, name: name, dob: dob })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  /*
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

  */

  return (
    <div>
      <h2>GCU React-Spring Intergration</h2>
      <ul>
        {" "}
        <li>
          {" "}
          ID는 <input
            className="writeInput"
            type="text"
            onChange={handleId}
          />{" "}
          입니다.
        </li>{" "}
        <li>
          {" "}
          이름은{" "}
          <input className="writeInput" type="text" onChange={handleName} />
          입니다.
        </li>{" "}
        <li>
          {" "}
          등록날짜는{" "}
          <input className="writeInput" type="text" onChange={handleDob} />
          입니다.{" "}
        </li>{" "}
      </ul>{" "}
      <input type="button" value="제출하기" onClick={handleClick} />{" "}
    </div>
  );
}

export default App;
