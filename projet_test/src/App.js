import React from 'react';
import logo from './logo.svg';
import './App.css';
import Film from './Film';
import FilmForm from './FilmForm';

class App extends React.Component {

  state = {
    films: [
      {id: 1, titre:"film1"},
      {id: 2, titre:"film2"},
      {id: 3, titre:"film3"}
    ]
  };

  handleDelete = id => {
    const films = [...this.state.films];
    const index = films.findIndex(film => film.id === id);

    films.splice(index, 1);

    this.setState({ films });
  };

  handleAdd = film => {
    const films = [...this.state.films];
    films.push(film);

    this.setState({ films });
  };

  modifyElem = (id, newValue) => {
    const films = [...this.state.films];
    const index = films.findIndex(film => film.id === id);

    films[index].titre = newValue;
    this.setState({ films });
  }

  render(){
    return (
      <div className="App">
        <ul>Liste des films
          {this.state.films.map(film => (
            <Film details={film} key={film.id} onDelete={this.handleDelete} modify={this.modifyElem}/>
          ))}
        </ul>
        <FilmForm onFilmAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
