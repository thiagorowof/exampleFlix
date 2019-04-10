import { FETCH_MODULOS, FETCH_PROFESSORES, FETCH_CURSOS, FETCH_TODOSOSDADOS } from '../actions/types';

const initialState = {
  todososdados: []
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFESSORES:
      return action.professores;
    case FETCH_MODULOS:
      return action.modulos;
    case FETCH_CURSOS:
      return action.cursos;
    case FETCH_TODOSOSDADOS:
      return action;
    default:
      return state;
  }
}