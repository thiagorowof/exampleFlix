import React from "react";
import { connect } from "react-redux";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import history from '../helpers/history';

const mapStateToProps = state => {
  return {
    cursos: state.data.todososdados
  };
};

const settings = {
  minLength: 2,
  emptyLabel: true
};

function ConnectedSearch({ cursos }) {
  if (!cursos.length) {
    return (
      <div></div>
    )
  }
  return (
    <Typeahead
      id="busca"
      minLength={settings.minLength}
      labelKey="nome"
      emptyLabel={settings.emptyLabel ? '' : undefined}
      options={cursos[0]}
      placeholder="Busque seu curso"
      onChange={(selected) => {
        history.push({
          pathname: '/coursemodules',
          state: { detail: selected }
        })
        window.location.reload()
      }}
    />
  );
}

const SearchBar = connect(mapStateToProps)(ConnectedSearch);
export default SearchBar;