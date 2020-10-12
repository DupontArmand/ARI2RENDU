import React from "react";

class Film extends React.Component{

  state = {
    style: {},
    modify: false,
    nouveauFilm: ""
  }

  mouseOver() {
    var style = {color : "orange", fontWeight : "bold"};
    this.setState({style: style});
  }

  mouseOut() {
    var style = {color : "", fontStyle: ""};
    this.setState({style : style});
  }

  modifyElem() {
    this.setState({modify : true});
    this.setState({nouveauFilm : this.props.details.titre});
  }

  handleChange(event) {
    this.setState({ nouveauFilm: event.currentTarget.value });
  }

  handleKeyPress(event){
    if (event.charCode === 13){
      this.setState({modify : false});
      this.props.modify(this.props.details.id,event.target.value);
    }
  }

  render(){
    return (
      <li
      style={this.state.style}
      onMouseOver={this.mouseOver.bind(this)}
      onMouseOut={this.mouseOut.bind(this)}
      onDoubleClick={this.modifyElem.bind(this)}
      >
      {
        this.state.modify ?
        <input
          value={this.state.nouveauFilm}
          onKeyPress={this.handleKeyPress.bind(this)}
          onChange={this.handleChange.bind(this)}
          type="text"
        /> :
        <div>{this.props.details.titre} <button onClick={() => this.props.onDelete(this.props.details.id)}>X</button></div>
      }
      </li>
    );
  }
}

export default Film;
