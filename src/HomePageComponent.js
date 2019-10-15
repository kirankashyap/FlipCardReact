
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
$("#delbutton").onClick(){
  alert("kiran")
}
addQuestion(){

$("#cardsTable").append( '<tr><td><button id="questionButton">'+ $("#questionText").val() +
 '</button></td><td><button id="delbutton">Delete</button></td></tr>')
 
}


}


export default HomePageComponent;
