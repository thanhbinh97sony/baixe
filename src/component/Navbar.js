import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHeader() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home">HCMUTE</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="home">Trang chủ</Nav.Link>
                        <Nav.Link href="booking">Đặt lịch</Nav.Link>
                        <Nav.Link href="contact">Liên hệ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarHeader;