import React from 'react';
import ReactDOM from 'react-dom';
import State from './components/States/States';
import Example from './components/example/Example';


function Switch (props){
  if(!props.value){
    return <State/>
  }
    return <Example/>
}
 class Btn extends React.Component {
   constructor(props) {
     super(props);
     this.state = {newValue:true}
     this.handleClick = this.handleClick.bind(this);
   }
  handleClick() {
   this.setState( prevState => ({
     newValue: !prevState.newValue
   }));
 }
render(){
    return(
      <div>
        <button
          onClick={this.handleClick}>{this.state.newValue ? 'Example' : 'State' }
        </button>
        <Switch value = {this.state.newValue}/>
      </div>
    );
  }
}
ReactDOM.render(
  <Btn/>,
  document.getElementById('reactapp'),
);
