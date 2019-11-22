
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

validate (text){
  if(text && text !== ''){
    return true;
  }
  return false;
}

renderCards(){
  const elements = this.state.cards;

  const items = []

  for (const [index, value] of elements.entries()) {
    items.push(<div id><table border="1">
    <tr>
      <Card title={value.title} id={"questionButton "+ (index+1)} index={index}/>
    </tr>
  </table></div>)
  }

  return items;
}


componentDidMount() {
       fetch('/api/questions')
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
    if(this.validate(textValue)){
    this.setState({cards:this.state.cards.concat({
      "title": textValue
    })})
    fetch('/api/questions',
          {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({"title": textValue})

          })
      }
  }}>Add</button>


      {this.renderCards()}


</div>);
}


}


export default HomePageComponent;
