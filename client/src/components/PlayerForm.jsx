import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const PlayerForm = (props) => {
  const {initialName, initialPosition, onSubmitProp, errors} = props;
  const [name, setName] = useState(initialName);
  const [position, setPosition] = useState(initialPosition);
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    if(initialName.length < 2){
      setNameError("Name must be at least 2 characters in length");
      console.log("Hello");
      document.getElementById("addBtn").setAttribute("disabled", "true");
    }
  }, [])



  const changeNameHandler = (e) => {
    setName(e.target.value);
    if(e.target.value.length < 2){
      setNameError("Name must be at least 2 characters in length");
      document.getElementById("addBtn").setAttribute("disabled", "true");
    } else {
      setNameError("");
      document.getElementById("addBtn").removeAttribute("disabled");
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      name,
      position
    });
  }

  return(
    <div className="mt-5 d-flex flex-column align-items-center">
      <form className="w-100" onSubmit={submitHandler}>
        {errors.map((err, index) => <p className="text-danger" key={index}>{err}</p>)}
        <p className="text-danger">{nameError}</p>
        <p className="d-flex w-100">
          <label htmlFor="name" className="form-label w-25">Player Name: </label>
          <input className="form-control w-75" type="text" onChange={changeNameHandler} name="name" value={name}/>
        </p>
        <p className="d-flex w-100">
          <label htmlFor="position" className="form-label w-25">Preferred Position: </label>
          <input className="form-control w-75" type="text" onChange={(e) => setPosition(e.target.value)} name="position" value={position}/>
        </p>
        <div>
          <button id="addBtn" className="btn btn-dark" type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}



export default PlayerForm;