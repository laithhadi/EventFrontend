import { useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import AuthAPICalls from "../../API/Event/AuthAPICalls";

function LoginView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const authAPI = new AuthAPICalls();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const loginData = { username, password };
      const response = await authAPI.loginOrRegister(loginData, "login");
      const token = response.token;

      localStorage.setItem("token", token);
      //TODO: Redirect to the homepage
      window.location.href = "/";
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Container className="mt-5">
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <></>
      )}
      <h1>Login</h1>
      {errorMessages && <Alert variant="danger">{errorMessages}</Alert>}
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