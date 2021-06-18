import React from "react";
import "./directory.component.style.scss";
import Menulist from '../../Components/menu-item/menu-item.component';

class Directory extends React.Component{
  constructor(){
    super();
    this.state = {
      sections : [
        {
          item : "HATS",
          imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
          id : 1,
        },
        {
          item : "JACKETS",
          imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
          id : 2,
        },
        {
          item : "SNEAKERS",
          imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id : 3,
        },
        {
          item : "FEMALE",
          imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
          id : 4,
          size : "large",
        },
        {
          item : "MALE",
          imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
          id : 5,
          size : "large",
        },
      ]
    };  
  }
  render(){
    return (
      <div className = "directory-menu">
       {
         this.state.sections.map( ({item, imageUrl, id, size}) => <Menulist key = {id} item={item} image = {imageUrl} size = {size}/>)
       }
      </div>
    );
  }
}

export default Directory;
