
import React from 'react';
import $ from 'jquery';
import Card from './Card';
import ReactDOM from 'react-dom';

class HomePageComponent extends React.Component{



render(){
  return <div>
  <h1> Flipcard </h1>
  Question: <input type="text" id="questionText"/>
  <button id="addButton" onClick={this.addQuestion}>Add</button>

  <table id="cardsTable">


  </table>

  </div>;
}
addQuestion(){
}

}


export default HomePageComponent;
