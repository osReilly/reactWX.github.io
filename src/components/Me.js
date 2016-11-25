import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
class Me extends Component {

  render() {
  const imgStyle ={width:"32px",marginRight:"5px",display:"block"};
  const imgSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==";

    return (
      <div >
        <div className="weui-cells">
          <div className="weui-panel__bd">
              <a href="javascript:void(0);" className="weui-media-box weui-media-box_appmsg">
                  <div className="weui-media-box__hd">
                      <img className="weui-media-box__thumb"
                      src={imgSrc} alt=""/>
                  </div>
                  <div className="weui-media-box__bd">
                      <h4 className="weui-media-box__title">张华平</h4>
                      <p className="weui-media-box__desc">微信号:bc</p>
                  </div>
                  <div style={{position: 'relative',marginRight: '10px',height:'24px'}}>
                    <img className="weui-media-box__thumb"
                      style={{width:'22px'}}
                    src={imgSrc} alt=""/>
                  <span className="weui-badge weui-badge_dot" style={{position: 'absolute',top:'-.4em' ,right: '-.4em'}}></span>
                  </div>
              </a>
            </div>
          </div>
          <div className="weui-cells">
             <div className="weui-cell">
                  <div className="weui-cell__hd">
                    <i className="wIcon weui-tabbar__icon">&#xe688;</i>
                  </div>
                  <div className="weui-cell__bd">
                      <p>相册</p>
                  </div>
              </div>
              <div className="weui-cell">
                   <div className="weui-cell__hd">
                     <i className="wIcon weui-tabbar__icon">&#xe619;</i>
                   </div>
                   <div className="weui-cell__bd">
                       <p>收藏</p>
                   </div>
               </div>

              </div>
              <div className="weui-cells">
                 <div className="weui-cell">
                      <div className="weui-cell__hd">
                        <i className="wIcon weui-tabbar__icon">&#xe668;</i>
                      </div>
                      <div className="weui-cell__bd">
                          <p>钱包</p>
                      </div>
                  </div>
                  <div className="weui-cell">
                       <div className="weui-cell__hd">
                        <i className="wIcon weui-tabbar__icon" style={{fontSize:'20px'}}>&#xe609;</i>
                       </div>
                       <div className="weui-cell__bd">
                           <p>卡包</p>
                       </div>
                   </div>

                  </div>
                  <div className="weui-cells">
                     <div className="weui-cell">
                          <div className="weui-cell__hd">
                            <i className="wIcon weui-tabbar__icon">&#xe600;</i>
                          </div>
                          <div className="weui-cell__bd">
                              <p>表情</p>
                          </div>
                      </div>

                      </div>
                      <div className="weui-cells">

                          <div className="weui-cell">
                               <div className="weui-cell__hd">
                                  <i className="wIcon weui-tabbar__icon">&#xe614;</i>
                               </div>
                               <div className="weui-cell__bd">
                                   <p>设置</p>
                               </div>
                           </div>

                          </div>
      </div>
    );
  }
}

export default Me;
