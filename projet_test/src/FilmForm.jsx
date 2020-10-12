import React from 'react';

class FilmForm extends React.Component{
  state = {
    nouveauFilm: ""
  };

  handleChange = event => {
    this.setState({ nouveauFilm: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const titre = this.state.nouveauFilm;

    this.props.onFilmAdd({ id, titre });

    this.setState({ nouveauFilm: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.nouveauFilm}
          onChange={this.handleChange}
          type="text"
          placeholder="Ajouter un film"
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default FilmForm;
