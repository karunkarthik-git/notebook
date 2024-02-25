import { Container, Navbar } from "react-bootstrap";
import Logo from '../../assets/images/codeed.png';
import './nav-bar.css';

const NavBar = () => {
    return (
        <Navbar className="nav-bar bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src={Logo}
                        width="30"
                        height="30"
                        className="logo d-inline-block align-top"
                    />{' '}
                    <span className="brand-name">NoteBook</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;