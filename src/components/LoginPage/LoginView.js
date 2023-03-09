import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import AuthAPICalls from "../../API/Event/AuthAPICalls";

function LoginView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const authAPI = new AuthAPICalls();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const loginData = { username, password };
      const response = await authAPI.login(loginData);
      const token = response.token;

      localStorage.setItem("token", token);
      window.location.href = "/";
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Login</h1>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginView;