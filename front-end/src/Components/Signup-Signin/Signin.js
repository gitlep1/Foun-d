import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const SignIn = ({ clickHere, setClickHere, users, handleUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = {
      email: email,
      password: password,
    };

    if (existingUser.password === "" || existingUser.email === "") {
      return toast.error("Please make sure to fill out both fields.", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
      });
    }

    const checkUser = users.filter(
      (user) =>
        user.email === existingUser.email ||
        user.password === existingUser.username
    );

    if (checkUser.length > 0) {
      notify(checkUser[0]);
    }
  };

  const notify = (existingUser) => {
    toast.success(
      "You have been successfully signed in. \n You will be redirected in 3 seconds.",
      {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
      }
    );
    setTimeout(() => {
      handleUser(existingUser);
    }, 4100);

    clearForms();
  };

  const clearForms = () => {
    setPassword("");
    setEmail("");
  };

  return (
    <Form onSubmit={handleSubmit} className="signupForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
      </Form.Group>
      <br />
      <Button
        variant="secondary"
        onClick={() => {
          setClickHere(!clickHere);
        }}
      >
        Go Back
      </Button>{" "}
      <Button variant="success" type="submit">
        Sign in
      </Button>
    </Form>
  );
};

export default SignIn;
