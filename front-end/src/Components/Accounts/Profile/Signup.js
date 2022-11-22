import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = ({ users, handleUser }) => {
  const API = process.env.REACT_APP_API_URL;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profImg, setProfImg] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "profileImg") {
      setProfImg(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
      email: email,
      profileImg: profImg,
    };

    if (newUser.profileImg === "") {
      newUser.profileImg =
        "https://d1yjjnpx0p53s8.cloudfront.net/1024px-no_image_available.svg_.png";
    }

    if (newUser.username.length > 20) {
      return toast.error(
        `Your current username:(${newUser.username}) is ${newUser.username.length} characters long. \n The max chracter length allowed is 20.`,
        {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          progress: undefined,
        }
      );
    }

    if (
      newUser.username === "" ||
      newUser.password === "" ||
      newUser.email === ""
    ) {
      return toast.error("Please make sure to fill out all fields.", {
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
        user.email === newUser.email || user.username === newUser.username
    );

    if (checkUser.length > 0) {
      return toast.error("Email or Username already exists!", {
        position: "top-right",
        pauseOnFocusLoss: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
    } else {
      axios
        .post(`${API}/users`, newUser)
        .then((res) => {
          notify(res.data);
        })
        .catch((err) => {
          setError(err);
        });
    }
  };

  const notify = (newUser) => {
    toast.success(
      "User account has been created. You have automatially been signed in. \n You will be redirected in 3 seconds.",
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
      handleUser(newUser);
    }, 4100);

    clearForms();
  };

  const clearForms = () => {
    setUsername("");
    setPassword("");
    setEmail("");
    setProfImg("");
  };

  return (
    <section className="signupSection">
      {error && <p className="error">{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={username}
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
        <Form.Group controlId="formProfileImg">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control
            type="url"
            name="profileImg"
            placeholder="Profile Image URL"
            onChange={handleChange}
            value={profImg}
          />
        </Form.Group>
        <br />
        <Button variant="success" type="submit">
          Sign up
        </Button>
      </Form>
    </section>
  );
};

export default Signup;
