import React, {Component} from 'react';
import Artcardwide from './Artcardwide';
import './Gallery.css';

// set up images for use in Artcardwide
const Cookie_eyes = require('./img/Cookie_Eyes.jpg');
const Blue_cat = require('./img/Blue_Cat.png');
const Lake_landscape = require('./img/Lake_Landscape.jpg');
const Male_sad = require('./img/Male_Sad.jpg');
const Office_building = require('./img/Office_Building.jpg');
const Savannah_tree = require('./img/Savannah_Tree.png');

class Gallerywide extends Component {
  static defaultProps = {
    artworkwide : [
      { id: 1, title: "Cookie eyes comic story", img: Cookie_eyes, category: "Procreate, cartoon", description: "3-panel comic with humour"},
      { id: 2, title: "Blue cat character", img: Blue_cat, category: "Affinity Designer, vector illustration", description: "Cat character"},
      { id: 3, title: "Lake landscape", img: Lake_landscape, category: "Affinity Designer, vector illustration, flat illustration", description: "Landscape of lake using basic shapes"},
      { id: 4, title: "Sad character sketch", img: Male_sad, category: "Inktense coloured pencil, cartoon", description: "Sad character sketch"},
      { id: 5, title: "Office building sketch", img: Office_building, category: "Watercolour marker, drawing", description: "Watercolour sketch of office building"},
      { id: 6, title: "Savanna tree", img: Savannah_tree, category: "Affinity Designer, vector illustration", description: "Tree illustration"}
    ]
  };
  render() {
    return (
      <div className="Gallery">
        <div id="Artwork-cards">
          {this.props.artworkwide.map((a) => (
            <Artcardwide id={a.id} title={a.title} img={a.img} category={a.category} description={a.description} />
          ))}
        </div>
      </div>
    )
  };
};

export default Gallerywide;
