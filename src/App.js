import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent, {SecondComponent} from './components/FirstComponent';

 
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello</h1>
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent />

      </div>
    );
  }
}
//this is a class component
//This component is moved its own module
// class FirstComponent extends Component
// {
//   render()
//   {
//     return (
//       <div>
//         This is my first component.
//       </div>
//     );
//   }
// }
//  class SecondComponent extends Component
// {
//   render()
//   {
//     return (
//       <div>
//         <h3>Hello Again</h3>
//       </div>

//     ) ;
//   }
// }
//This is a function compoonent
//Better practice is to define each component in its own module(In javaScript every file is called module)
function ThirdComponent()
{
  return (
    <div>
      <h4>Hello this is fourth class component. </h4>
    </div>
  );

}
export default App;

