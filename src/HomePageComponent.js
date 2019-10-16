
import React from 'react';
import $ from 'jquery';
import Card from './Card';
import ReactDOM from 'react-dom';

class HomePageComponent extends React.Component{

constructor(){
  super();
  this.state = {
    cards: ['auto','bike','car']
  }
}

renderCards(){
  const elements = this.state.cards;

  const items = []

  for (const [index, value] of elements.entries()) {
    items.push(<Card title={value} />)
  }

  return items;
}


addQuestion(){
  console.log(this.getState());

}

render(){
  return (<div>
  <h1> Flipcard </h1>
  Question: <input type="text" id="questionText"/>
  <button id="addButton" onClick={this.addQuestion}>Add</button>

  <table id="cardsTable">
    <tr>
      <td>
      {this.renderCards()}
      </td>
    </tr>

  </table>

</div>);
}


}


export default HomePageComponent;
