import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const mapStateToProps = state => {
  return {
    cursos: state.data.todososdados
  };
};

const settings = {
  className: "center",
  centerPadding: "60px",
  dots: false,
  infinite: true,
  slidesToShow: 3,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function ConnectedList({ cursos }) {
  if (!cursos.length) {
    return (
      <div>Carregando Cursos...</div>
    )
  }
  return (
    <Container id="teacherId">
      <p>Conheça nossos professores:</p>
      <Slider {...settings}>
        {cursos[1].map(function (curso) {
          return (
            <div key={curso.id}>
              <img alt="templateImg" src={curso.imagem} width="150" />
              <h3>{curso.nome}</h3>
              <p>Lorem ipsum</p>
            </div>
          );
        })}
      </Slider>
      <Button variant="danger" href="https://www.sanarflix.com.br/assine/">Assine agora</Button>
    </Container>
  );
}

const Teachers = connect(mapStateToProps)(ConnectedList);
export default Teachers;