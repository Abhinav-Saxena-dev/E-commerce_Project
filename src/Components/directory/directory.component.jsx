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
          linkUrl: "hats",
        },
        {
          item : "JACKETS",
          imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
          id : 2,
          linkUrl: "jackets",
        },
        {
          item : "SNEAKERS",
          imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id : 3,
          linkUrl: "sneakers",
        },
        {
          item : "FEMALE",
          imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
          id : 4,
          size : "large",
          linkUrl: "female",
        },
        {
          item : "MALE",
          imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
          id : 5,
          size : "large",
          linkUrl: "male",
        },
      ]
    };  
  }
  render(){
    return (
      <div className = "directory-menu">
       {
         this.state.sections.map( ({id, ...sectionProps }) => <Menulist key = {id} {...sectionProps}/>)
       }
      </div>
    );
  }
}

export default Directory;
