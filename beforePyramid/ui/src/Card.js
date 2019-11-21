import React from 'react';

class Card extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      hiddenTitle: props.title,
      visibleTitle: "Click to open card "+ props.index
    }
  }

  render(){
    return <tr>
      <td><button id={this.props.id} name="questionButton" onClick={()=>{
        this.setState({hiddenTitle: this.state.visibleTitle,visibleTitle: this.state.hiddenTitle});
      }}>{this.state.visibleTitle}</button></td>
      </tr>
    ;
  }


}

export default Card;
