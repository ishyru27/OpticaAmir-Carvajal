import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />{' '}
          La Guaira
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Productos">
              <NavDropdown.Item href="#products/tea">AntesOjos Formula</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Anteojos de Sol</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Antojos Especiales</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Menu</Nav.Link>
            <Nav.Link href="#about-us">Sobre La Guaira</Nav.Link>
            <Nav.Link href="#delivery-us">Haz tu pedido</Nav.Link>
            <Nav.Link href="#contact-us">Comunicate con nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div className="content">
        Aqui irá el contenido
      </div>
    </div>
  );
}

export default App;