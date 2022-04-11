import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../Firebase.init";
const auth = getAuth(app);

const HOise = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [error, setError] = useState("");
  const [error2, setError2] = useState("")
  const [register, setRegister] = useState(false)
  const login = (e) => {
    setEmail(e.target.value);
  };
  const password = (e) => {
    setPass(e.target.value);
  };
  const handleCahnge = e => {
      setRegister(e.target.checked)
  }

  const submit = (e) => {
    e.preventDefault();

    if(register == true){
        signInWithEmailAndPassword(auth, email, pass)
        .then((result) => {
            console.log(result.user);
           
          })
          .catch((error) => {
              console.log(error);
          })

    }else{
        createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
        // setEmail('');
        // setPass('');
      })
      
      .catch((error) => {
        console.error(error);
        setError2(error.message)
      });

    }
   

    

      if (email === "" || email == null) {
        setError("user dont give an email");
      } else {
        setError("");
      }
  };

  return (
    <div>
      <div className="w-50 mx-auto">
          <h1>{register ? 'login':'register'}</h1>
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onBlur={login}
              type="email"
              placeholder="Enter email"
            />
            <p>{error}</p>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onBlur={password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <p> {error2} </p>
            <Form.Check onChange={handleCahnge} type="checkbox" label="All ready have an account" />
          </Form.Group>
          <Button variant="primary" type="submit">
          {register ? 'login':'register'}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default HOise;
