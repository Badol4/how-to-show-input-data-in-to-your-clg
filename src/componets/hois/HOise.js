import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase.init";
const auth = getAuth(app)

const HOise = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass , setPass] =  useState('')
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')
    const [hasAccount, setHasAccount] = useState(false)
    const login = e => {
        console.log(e.target.value);
    }
    const password = e => {
        console.log(e.target.value);
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(email, pass, auth)
        .thne()
    }
    const submit = e => {
        e.preventDefault();
    }


  return (
    <div>
      <div className="w-50 mx-auto">
        <Form onClick={submit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onBlur={login} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onBlur={password} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default HOise;
