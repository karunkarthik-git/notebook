import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    NoteBook
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;