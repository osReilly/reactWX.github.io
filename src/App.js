import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'weui'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Nav from './components/Nav'
import WeiXin from './components/WeiXin'

class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {isLoading:false,appHeader:true}

  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({isLoading:true}),
      1000
    );
 }

 componentWillUnmount() {
    clearInterval(this.timerID);
 }
  render() {
    const pageSt = {
      backgroundColor:'rgba(235,235,235,0.5)',
      height: '100%','paddingBottom':'75px',overflow: 'hidden'
    }
    return (
        <div className="page page__bd" style={pageSt}>
          <div style={{display:this.state.isLoading?'none':'block'}}>
          <div className="weui-mask_transparent"></div>
          <div className="weui-toast">
              <i className="weui-loading weui-icon_toast"></i>
              <p className="weui-toast__content">数据加载中</p>
          </div>
        </div>
        <div className="App-header" style={{display:this.state.appHeader?'none':'block'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <ReactCSSTransitionGroup  component="div"
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            >
            {  React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}

          </ReactCSSTransitionGroup>
            <Nav />
        </div>

    );
  }
}

export default App;
