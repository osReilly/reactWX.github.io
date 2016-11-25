import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function clickMe (e){
//   console.log(this)
//   e.preventDefault();
//   console.log(e)
// }
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
//
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggle: true };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(){
//     this.setState(a =>({
//       isToggle:!a.isToggle
//     }));
//   }
//   render (){
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.isToggle ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
//
// class LoginControl extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {isLogin:false};
//     this.handleLogin = this.handleLogin.bind(this);
//     this.handleLogout = this.handleLogout.bind(this);
//   }
//   handleLogin(){
//     this.setState({
//       isLogin : true
//     })
//   }
//   handleLogout(){
//     this.setState({
//       isLogin : false
//     })
//   }
//   render(){
//     const isLogin = this.state.isLogin;
//     let button = null;
//     if(isLogin){
//       button = <LoginButton onClick = {this.handleLogin} />
//     }else{
//       button = <LogoutButton onClick = {this.handleLogout} />
//     }
//     return (
//       <div>
//       <Toggle/>
//       {button}
//       </div>
//     );
//   }
//
//
// }
//
// // class NumberList extends React.Component {
// // const number =
// // render (){
// //
// // }
// // }

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <a href="" onClick={clickMe}>click me</a>
        <br/>
        <LoginControl />

      </div>
    );
  }
}

export default App;
