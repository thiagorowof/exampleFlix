import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import MdArrowDropdown from 'react-ionicons/lib/MdArrowDropdown'

class Questions extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: {
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
        seventh: false,
        eighth: false,
      }
    };
  }

  render() {
    const open = this.state.open;

    return (
      <Container className="containerCarrousel">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item className="imgCarrouselBg2">
            <Carousel.Caption>
              <p>PERGUNTAS FREQUENTES</p>
              <h3>Tire suas dúvidas sobre o SanarFlix!</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
          <Button className="btnQuestions"onClick={() => this.setState({...open.first = !open.first})} >
            O que é o SanarFlix? <MdArrowDropdown/>
          </Button>
          <Collapse in={this.state.open.first}>
            <div id="example-collapse-text">
            Somos a maior plataforma de educação médica do Brasil. Nosso maior objetivo é acompanhar o estudante de medicina em toda a sua formação. Esteja você no Ciclo Básico, Clínico ou Internato, dispomos dos conteúdos da graduação em diversos formatos: vídeoaulas, mapas mentais, fluxogramas, resumos, artigos, diretrizes, questões comentadas e simulados para obtenção de certificados. Além de ser destinado para estudantes de medicina na graduação, a plataforma é indicada para formados que buscam se manter atualizados. Somos o seu principal aliado em toda a sua jornada em medicina!
            </div>
          </Collapse>

          <Button className="btnQuestions"onClick={() => this.setState({...open.second = !open.second})} >
          Qual conteúdo vou encontrar na plataforma? <MdArrowDropdown/>
          </Button>
          <Collapse in={this.state.open.second}>
            <div id="example-collapse-text">
            Os conteúdos disponíveis no SanarFlix aumentam a cada semana. São pelo menos 10 novas aulas e 10 novos materiais complementares liberados semanalmente. Já chegamos a marca de mais de 800 Videoaulas, acompanhadas de Mapas Mentais, Questões Comentadas, Fluxogramas, Resumos, Artigos, Diretrizes Simulados, Certificados e muito mais!
            </div>
          </Collapse>

          <Button className="btnQuestions"onClick={() => this.setState({...open.third = !open.third})} >
          Posso acessar os conteúdos pelo aplicativo?<MdArrowDropdown/>
          </Button>
          <Collapse in={this.state.open.third}>
            <div id="example-collapse-text">
            Você pode ter acesso a todo o conteúdo da nossa plataforma através do aplicativo SanarFlix também! 
            </div>
          </Collapse>

          <Button className="btnQuestions"onClick={() => this.setState({...open.fourth = !open.fourth})} >
          Quanto é cobrado pelo acesso?<MdArrowDropdown/>
          </Button>
          <Collapse in={this.state.open.fourth}>
            <div id="example-collapse-text">
            Escolha o que mais se encaixa com o seu objetivo!
            Plano Anual, no valor de R$234,00 (ano), podendo parcelar em até 12x de R$19,50
            Plano Semestral, no valor de R$134,00, podendo parcelar em até 6x de R$22,50
            Plano mensal, no valor de R$ 24,50/mês
            </div>
          </Collapse>

          <Button className="btnQuestions"onClick={() => this.setState({...open.fifth = !open.fifth})} >
          Quais as formas de pagamento?<MdArrowDropdown/>
          </Button>
          <Collapse in={this.state.open.fifth}>
            <div id="example-collapse-text">
            Aceitamos cartões de CRÉDITO das bandeiras VISA, Mastercard, Elo, American Express e Diners Club.
            </div>
          </Collapse>

          <Button className="btnQuestions"onClick={() => this.setState({...open.sixth = !open.sixth})} >
          Como funciona o estorno?<MdArrowDropdown/>
          </Button>
          <Collapse in={this.state.open.sixth}>
            <div id="example-collapse-text">
            O estorno funciona caso você nos solicite o cancelamento em até 7 dias do dia de cobrança do primeiro mês de assinatura.
            </div>
          </Collapse>

          <Button className="btnQuestions"onClick={() => this.setState({...open.seventh = !open.seventh})} >
          Posso cancelar a minha assinatura quando eu quiser?<MdArrowDropdown/>
          </Button>
          <Collapse in={this.state.open.seventh}>
            <div id="example-collapse-text">
            Sim! Para cancelar basta acessar sua conta, selecione Minha Conta, clique em Cancelamento e preencha o formulário. Em até 48h (dia útil) realizaremos o cancelamento. Confira as condições de cancelamento para cada Plano.            </div>
          </Collapse>

          <Button className="btnQuestions"onClick={() => this.setState({...open.eighth = !open.eighth})} >
          Posso pausar a minha assinatura quando eu quiser?<MdArrowDropdown/>
          </Button>
          <Collapse in={this.state.open.eighth}>
            <div id="example-collapse-text">
            Sim! A Pausa é permitida somente para assinantes do Plano Mensal. Com a pausa você tem a opção de suspender até 3 meses a cobrança da sua assinatura. É ideal para momentos em que você está utilizando pouco a plataforma e não quer ser cobrado por isso. O seu acesso também fica suspenso no período de pausa escolhido. Para pausar basta acessar sua conta, selecione Minha Conta, clique em Pausar Assinatura e preencha o formulário. Em até 48h (dia útil) realizaremos a pausa.            </div>
          </Collapse>
        </Container>
      </Container>
    );
  }
}


 
export default Questions;