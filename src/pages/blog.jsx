import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/header.jsx';
import Pages from '../assets/pages.jsx';
import { Link } from 'react-router-dom';

function Blogsection() {
  return (
    <div>
        <Header />
        <Container className="py-4">
          <h1 className="text-center text-light mb-4">Blog Section</h1>
          <Row>
            {Pages.map((item, index) => (
              <Col key={index}  xs={12} md={6} lg={3} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.message}</Card.Text>
                    <Link to={`/blog/${index+1}`}><Button variant="primary">Read more</Button></Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  );
}

export default Blogsection;


