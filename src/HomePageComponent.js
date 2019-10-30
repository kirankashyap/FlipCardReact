
import React from 'react';
import $ from 'jquery';
import Card from './Card';
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


render(){
  return (<div>
  <h1> Flipcard </h1>

  Question: <input type="text" id="questionText"/>
<button id="addButton" onClick={()=>{
    var textValue = $("#questionText").val();
    this.setState({cards:this.state.cards.concat({
      "title": textValue
    })})
    fetch('http://localhost:5000/api/questions',
          {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({"title": textValue})

          })
  }}>Add</button>


      {this.renderCards()}


</div>);
}


}


export default HomePageComponent;
