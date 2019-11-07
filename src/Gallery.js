import React, {Component} from 'react';
import Artcard from './Artcard';
import './Gallery.css';

// set up images for use in Artcards
const Emily = require('./img/Emily_Game.png');
const Lindsay = require('./img/Lindsay_Game.png');
const Lamp = require('./img/Lamp.png');

class Gallery extends Component {
  static defaultProps = {
    artwork : [
      { id: 1, title: "Emily game character", img: Emily, category: "Procreate, raster illustration", description: "Main character in educational story about diabetes" },
      { id: 2, title: "Lindsay game character", img: Lindsay, category: "Procreate, raster illustration", description: "Sidekick character in educational story about diabetes" },
      { id: 3, title: "Lamp", img: Lamp, category: "Affinity Designer, vector illustration", description: "Lamp for cartoon and poster backgrounds" }
    ]
  };
  render() {
    return (
      <div className="Gallery">
        <div id="Artwork-cards">
          {this.props.artwork.map((a) => (
            <Artcard id={a.id} title={a.title} img={a.img} category={a.category} description={a.description} />
          ))}
        </div>
      </div>
    )
  };
};

export default Gallery;
