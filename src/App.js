import React from 'react';
import './App.css';

// function Helloworld(props) {
//   return (
//     <div id='hello'>
//     <h3> {props.subtitle} </h3>
//     {props.mytext}
//     </div>
//   );
// }

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
    return (
      <div id='hello'>
        <h3> {this.props.subtitle} </h3>
        {this.props.mytext}
        <button onClick={this.toggleShow}> Toggle Show</button>
      </div>
    );

    } else {
      return <h1>
      There is no elements
      <button onClick={this.toggleShow}>Toggle Show</button>
      </h1>
    }
  }
}

function App() {
  return (
    <div>This is my component:
      <Helloworld mytext='Hello Fatz' subtitle='loremp ispum'/>
      <Helloworld mytext='Hola mundo entero' subtitle='Todo bien'/>
      <Helloworld mytext='Bonjour World' subtitle='Ce va tres bien' />
    </div>
  );
}

export default App;
