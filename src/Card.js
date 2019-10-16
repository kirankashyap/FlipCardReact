import React from 'react';

class Card extends React.Component{

  render(){
    return <div>{this.props.title}</div>
    ;
  }

  toString(){
    return this.render();
  }
}

export default Card;
