import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Teachers from "../Teachers";

class About extends Component {
  render() {
    return (
      <Container className="containerCarrousel">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item className="imgCarrouselBg2">
            <Carousel.Caption>
              <p>SOBRE O SANARFLIX</p>
              <h3>Olá, Seja bem-vindo ao SanarFlix!</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
        <div className="containerYoutube">
          <iframe type="text/html" title="sanarVideo" width="100%" height="100%" src="https://www.youtube.com/embed/AJ0P2joRyEk" frameBorder="0" />
          <p>O SanarFlix é a maior plataforma online de educação médica do Brasil, que tem como objetivo ajudar o estudante de medicina de maneira prática, rápida e divertida! Queremos fazer com que seu estudo seja bem direcionado, que você tenha tempo suficiente para estudar tudo o que precisa e que isso seja feito de forma didática e completa. Por isso, o Sanarflix será seu maior aliado nos estudos!</p>
          <p>Temos uma grande disponibilidade de aulas e trabalhamos com dois métodos, o <strong>#Aprenda</strong> e o <strong>#Aprofunde</strong></p>
          <p>Nas aulas #Aprenda, você verá o assunto de forma introdutória, destacando os aspectos básicos essenciais para a melhor compreensão. Nas aulas #Aprofunde, consideramos que você já tem uma base sobre o assunto e falamos agora de uma forma mais profunda, trazendo detalhes com foco principalmente na prática médica. Além disso, os cursos possuem diversos materiais complementares (resumos, mapas mentais, fluxogramas, questões comentadas, artigos) para que o processo do seu aprendizado seja supereficiente! E para fixar e colocar em prática o conhecimento adquirido, temos o Clube de Casos, espaço criado para que os usuários SanarFlix discutam casos clínicos com especialistas renomados, através de lives semanais com bate-papo ao vivo.</p>
          <p>Pronto! Assim nossa fórmula do sucesso está finalizada e você tem tudo para aproveitar melhor a sua jornada na medicina. Vem ser SanarFlix!</p>
          <p><strong>Disponibilizamos:</strong></p>
        </div>
        </Container>
        <Container className="aboutCardContainer">
          <CardDeck>
            <Card className="text-white cardImg1">
              <Card.ImgOverlay>
                <Card.Title>Aulas didáticas e objetivas</Card.Title>
                <Card.Text>
                Aulas didáticas e objetivas que você pode assistir quantas vezes quiser.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="text-white cardImg2">
              <Card.ImgOverlay>
                <Card.Title>Mapas mentais</Card.Title>
                <Card.Text>
                Mapas mentais dos principais temas para que você possa revisar com mais facilidade os assuntos.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="text-white cardImg3">
              <Card.ImgOverlay>
                <Card.Title>Questões comentadas</Card.Title>
                <Card.Text>
                Questões comentadas para que você possa colocar em prática e aprender com os seus erros.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="text-white cardImg4">
              <Card.ImgOverlay>
                <Card.Title>Manuais, diretrizes e artigos</Card.Title>
                <Card.Text>
                Acesso rápido aos principais materiais públicos de referência como manuais, diretrizes e artigos.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="text-white cardImg5">
              <Card.ImgOverlay>
                <Card.Title>Fluxogramas</Card.Title>
                <Card.Text>
                Fluxogramas com o passo a passo de manejo com pacientes, doenças e casos clínicos.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="text-white cardImg6">
              <Card.ImgOverlay>
                <Card.Title>E muito mais</Card.Title>
                <Card.Text>
                Equipe de professores padrão USP.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </CardDeck>
          <p>Toda semana novas aulas e novos materiais são acrescentados à plataforma. Confira todo conteúdo disponível clicando em ‘Todos os Cursos’. Experimente o SanarFlix e descubra o que é ter uma rotina de estudos otimizada!</p>
        </Container>
        <Teachers />
      </Container>
    );
  }
}





export default About;