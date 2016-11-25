import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router'
class Nav extends Component {

  render() {
     var spanStyle = {display: 'inline-block',position: 'relative'};

    return (
      <div className="weui-tabbar">
        <IndexLink  to="/" className="weui-tabbar__item" activeClassName="weui-bar__item_on">
              <span style={spanStyle}>
                  <i className="wIcon weui-tabbar__icon">&#xe60a;</i>
                  <span className="weui-badge" style={{position:'absolute',top: '-2px',right: '-13px'}} >8</span>
              </span>
              <p className="weui-tabbar__label">微信</p>
          </IndexLink>
          <Link to="/contact"  className="weui-tabbar__item" activeClassName="weui-bar__item_on">
              <i className="wIcon weui-tabbar__icon">&#xe60c;</i>
              <p className="weui-tabbar__label">通讯录</p>
          </Link>
          <Link to="/seek"  className="weui-tabbar__item" activeClassName="weui-bar__item_on">
              <span style={spanStyle}>
                  <i className="wIcon weui-tabbar__icon">&#xe670;</i>
                  <span className="weui-badge weui-badge_dot" style={{position:'absolute',top: '0',right: '-6px'}}></span>
              </span>
              <p className="weui-tabbar__label">发现</p>
          </Link>
          <Link to="/me" className="weui-tabbar__item" activeClassName="weui-bar__item_on">
              <i className="wIcon weui-tabbar__icon">&#xe6b8;</i>
              <p className="weui-tabbar__label">我</p>
          </Link>
      </div>
    );
  }
}

export default Nav;
