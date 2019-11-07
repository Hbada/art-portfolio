import React, {Component} from 'react';

class Artcardwide extends Component {
  render() {
    return (
      <div className="Artcard-wide">
        <h3>{this.props.title}</h3>
        <img src={this.props.img} alt={this.props.title} />
        <div className="ArtcardDetails">
          <p>{this.props.category}</p>
          <hr />
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
};

export default Artcardwide;
