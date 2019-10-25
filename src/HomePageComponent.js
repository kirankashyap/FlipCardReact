
import React from 'react';
import $ from 'jquery';
import Card from './Card';
import ReactDOM from 'react-dom';
var questionsList = ["ab"];
class HomePageComponent extends React.Component{

constructor(){
  super();
  this.state = {
    cards: []
  }
}

renderCards(){
  const elements = this.state.cards;

  const items = []

  for (const [index, value] of elements.entries()) {
    items.push(<div><table border="1">
    <tr>
      <td><button><Card title={value.title} /></button></td>
      <td><button>delete</button></td>
    </tr>
  </table></div>)
  }

  return items;
}


componentDidMount() {
       fetch('http://localhost:5000/api/questions')
       .then(res => res.json())
       .then((data) => {
         console.log(data);
          this.setState({ cards: data })
        })
}

addQuestion(){


}

render(){
  return (<div>
  <h1> Flipcard </h1>
  Question: <input type="text" id="questionText"/>
<button id="addButton" onClick={()=>{
    this.setState({cards:this.state.cards.concat($("#questionText").val ())})
  }}>Add</button>


      {this.renderCards()}


</div>);
}


}


export default HomePageComponent;
