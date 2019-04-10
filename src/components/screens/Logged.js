import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'


class Logged extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            courses: []
        };
    }

    componentWillMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('user')),
            //cursos 'mockados' aqui....
            courses: [
                {
                    "id": 1,
                    "nome": "Emergências Médicas Sanar",
                    "imagem": "https://s3.amazonaws.com/thinkific/courses/course_card_image_000/324/2931532405188.original.jpg?1532405188",
                    "area": "CICLO BASICO"
                },
                {
                    "id": 28,
                    "nome": "Radiologia mamária",
                    "imagem": "https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/8591517241900.original.jpg?1517241900",
                    "area": "CICLO CLINICO"
                },
                {
                    "id": 29,
                    "nome": "Legislação do SUS",
                    "imagem": "https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/8621517241926.original.jpg?1517241926",
                    "area": "CICLO AVANÇADO"
                }
            ]

        });
    }

    refreshScreen() {
        window.location.reload()
    }

    render() {
        const { user, courses } = this.state;
        return (
            <Container id="loggedContainer">
                <h1>Olá, {user.firstName} {user.lastName}!</h1>
                <p>Bem vindo a sua página principal.</p>
                <h3>Seus cursos:</h3>
                {courses.length &&
                    <div>
                        {courses.map((course, index) =>
                            <Card bg="info" text="white" style={{ width: '18rem' }} key={course.id}>
                                <Card.Header>Curso {index+1}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{course.nome}</Card.Title>
                                    <Card.Text>
                                    {course.area}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                }
                <div className="centerText">
                    <p className="logoutBtn btn btn-danger" >
                        <Link to="/login" onClick={this.refreshScreen}>Logout </Link>
                    </p>
                </div>
            </Container>
        );
    }
}

export default Logged;