import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import AuthAPICalls from "../../API/Event/AuthAPICalls";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function RegisterView({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const authAPI = new AuthAPICalls();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const registerData = { username, password };
      const response = await authAPI.loginOrRegister(registerData, "register");
      const token = response.token;

      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      navigate('/', { replace: true });
    } catch (error) {
      setErrorMessage(error.response.data.errors);
    } finally {
      setIsLoading(false);
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
      <h1>Register</h1>
      {errorMessages && <Alert variant="danger">{errorMessages}</Alert>}

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
  );
}

export default RegisterView;