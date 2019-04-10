import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import ModulesList from "../ModulesList";
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import MdCheckmark from 'react-ionicons/lib/MdCheckmark'
import MdDocument from 'react-ionicons/lib/MdDocument'
import LogoYoutube from 'react-ionicons/lib/LogoYoutube'
import MdCloudDownload from 'react-ionicons/lib/MdCloudDownload'
import MdCheckboxOutline from 'react-ionicons/lib/MdCheckboxOutline'


class CourseModules extends Component {

  render() {
    return (
      <Container className="containerCarrousel">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item className="imgCarrouselBg3">
            <Carousel.Caption>
              <Row className="aboutCourse">
                <Col className="aboutCourseData">
                  <p>Sobre o curso</p>
                  <h3>{this.props.location.state.detail[0].nome}</h3>
                  <p>Uma variedade de manifestações clínicas, sorologias e exames específicos aguardam você neste curso pronto para te fazer entender melhor os principais diagnósticos.</p>
                  <Row className="courseFiles">
                    <Col><LogoYoutube /> <p>Videos</p> <p>1</p></Col>
                    <Col><MdDocument /> <p>Leitura</p> <p>11</p></Col>
                    <Col><MdCloudDownload /> <p>Documentos</p> <p>2</p></Col>
                    <Col><MdCheckboxOutline /><p>Questões</p> <p>6</p></Col>
                  </Row>
                </Col>
                <Col>
                  <Card>
                    <Card.Img as="iframe" src="https://www.youtube.com/embed/AJ0P2joRyEk" />
                    <Card.Body className="cardCourse">
                      <Card.Title>R$ 24,90 / Mês</Card.Title>
                      <Card.Text> <MdCheckmark color="#43853d" />Cancele quando quiser! </Card.Text>
                      <Button variant="primary" className="logoutBtn btn btn-danger" >Assine agora</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
          <h5>O que você vai aprender</h5>
          <Alert variant="secondary"> <MdCheckmark color="#43853d" /> Aprenderá a criar projetos web</Alert>
          <Alert variant="secondary"> <MdCheckmark color="#43853d" /> Conquiste a liberdade financeira</Alert>
          <Alert variant="secondary"> <MdCheckmark color="#43853d" /> Crie Projetos</Alert>
          <Alert variant="secondary"> <MdCheckmark color="#43853d" /> Estude nos dias e horários que quiser</Alert>
        </Container>
        <Container>  
          <h5>Conteúdo do curso </h5> 
           <ModulesList />
        </Container>
      </Container>
    );
  }
}

export default CourseModules;