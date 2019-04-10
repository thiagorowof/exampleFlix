import React, { Component } from "react";
import CoursesList from "../CoursesList";
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'


class Home extends Component {
  render() {
    return (
      <Container className="containerCarrousel">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item className="imgCarrouselBg">
            <Carousel.Caption>
              <h3>A plataforma online do estudante de medicina</h3>
              <p>Milhares de conteúdos de medicina que se encaixam no seu perfil.</p>
              <Button variant="danger" href="https://www.sanarflix.com.br/assine/">Assine agora</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
          <h5>Novidades</h5>
          <CoursesList />
          <h5>Mais acessados</h5>
          <CoursesList />
          <h5>Todos os cursos</h5>
          <CoursesList />
        </Container>
      </Container>
    );
  }
}
 
export default Home;