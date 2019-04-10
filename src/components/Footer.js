import React, { Component } from "react";
import MdPeople from 'react-ionicons/lib/MdPeople'
import MdMailOpen from 'react-ionicons/lib/MdMailOpen'
import MdSend from 'react-ionicons/lib/MdSend'
import MdList from 'react-ionicons/lib/MdList'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoYoutube from 'react-ionicons/lib/LogoYoutube'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class AppFooter extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {
    return (
      <Container id="footerId">
        <Row>
          <Col>
            <a href="/about"><MdPeople/> Sobre o Sanarflix</a>
          </Col>
          <Col>
            <div className="talkWithUs" onClick={this.handleShow}><MdMailOpen/> Fale Conosco</div>
          </Col>
          <Col>
            <a href="/questions"><MdSend/> Perguntas Frequentes</a>
          </Col>
          <Col>
            <a href="https://www.sanarflix.com.br/portal/"><MdList/> Portal</a>
          </Col>
          <Col className="centerText">
            <a href="https://www.instagram.com/sanarflix.med"><LogoInstagram/></a>
            <a href="https://www.facebook.com/sanarflix.med/"><LogoFacebook/></a>
            <a href="https://www.youtube.com/channel/UC9nRs5w7Qk-kUZqlryrasjA"><LogoYoutube/></a>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="centerText">© SanarFlix 2019 - Todos os Direitos Reservados - <a href="https://s3-sa-east-1.amazonaws.com/plataforma-sanarflix/TERMOS_DE_USO_DO_SANARFLIX.pdf">Termos de Uso</a></div>
          </Col>
        </Row>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Fale conosco</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>Telefone:</Col>
                <Col>(71) 3052-4831</Col>
              </Row>
              <Row>
                <Col>WhatsApp:</Col>
                <Col>(71) 99172-4740</Col>
              </Row>
              <Row>
                <Col>E-mail:</Col>
                <Col>suportesanarflix@editorasanar.com.br</Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              FECHAR
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

    );
  }
}



export default AppFooter;




