import { Row, Col } from 'react-bootstrap';

function SiteFooter() {
  return (
    <footer className="footer align-items-center">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <p>Copyright @ Hot Pink Crazy Cat Ladies</p>
        </Col>
      </Row>
    </footer>
  );
}

export default SiteFooter;