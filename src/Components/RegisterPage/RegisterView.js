import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import AuthAPICalls from "../../API/Event/AuthAPICalls";

function RegisterView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const authAPI = new AuthAPICalls();
 
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const registerData = { username, password };
      const response = await authAPI.loginOrRegister(registerData, "register");
      const token = response.token;

      localStorage.setItem("token", token);
      //TODO: Redirect to the homepage
      window.location.href = "/";
      } catch (error) {
      setErrorMessage(error.response.data.message);
      }
    };

  return (
    <Container className="mt-5">
      <h1>Register</h1>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Choose your username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Choose your password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  )
}

export default RegisterView;