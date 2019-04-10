import { FETCH_MODULOS, FETCH_PROFESSORES, FETCH_CURSOS, FETCH_TODOSOSDADOS } from './types';
import axios from 'axios';

const apiUrl = 'https://5b7570f8deca780014ec9f86.mockapi.io/v1/';

//I can remove these things below, I know....! :P
export const fetchCursos = (cursos) => {
  return {
    type: FETCH_CURSOS,
    cursos
  }
};
export const fetchProfessores = (professores) => {
  return {
    type: FETCH_PROFESSORES,
    professores
  }
};
export const fetchModulos = (modulos) => {
  return {
    type: FETCH_MODULOS,
    modulos
  }
};
export const fetchTodosOsDados = (todososdados) => {
  return {
    type: FETCH_TODOSOSDADOS,
    todososdados
  }
};

function getCursos() {
  return axios.get(apiUrl + "cursos");
}
function getProfessores() {
  return axios.get(apiUrl + "professores");
}
function getModulos() {
  return axios.get(apiUrl + "modulos");
}

export const fetchAllData = () => {
  return (dispatch) => {
    // If i need 1 get only:
    // return axios.get(apiUrl + "cursos")
    //   .then(response => {
    //     dispatch(fetchCursos(response.data))
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });

    axios.all([getCursos(), getProfessores(), getModulos()])
    .then(axios.spread(function (cursos, professores, modulos) {
      let allData = [];
      allData.push(cursos.data)
      allData.push(professores.data)
      allData.push(modulos.data)
      dispatch(fetchTodosOsDados(allData))
    }))
    .catch(error => {
      throw(error);
    });

  };
};