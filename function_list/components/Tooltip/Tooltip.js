import React from 'react';




class Tooltip extends React.Component {

  render() {

    return (
        <div style={{left:this.props.offsetx,top:this.props.offsety,backgroundColor:'white',zIndex:1000,position:'fixed'}}>
        <div id="qtip-7" role="alert" style={{zIndex: 15002}}>
          <div style={{backgroundColor: 'transparent !important', border: '0px none !important', width: '8px', height: '8px', lineHeight: '8px', top: '-1px', left: '-8px'}}>
            <canvas width='8px' height='8px' style={{lineHeight: '8px',position: 'absolute', color: '#123456',backgroundColor: 'transparent !important', border: '0px none !important', width: '8px', height: '8px'}}></canvas>
          </div>
          <div id="qtip-7-content" aria-atomic="true">
            <div>
              <div>
                <div>Drozd Vera</div>
              </div>
              <div>
                <div><img src="photos/vera.drozd.jpg" width="90px" /></div>
                <div>
                  <div>Position: Leading Legal Advisor<br />Organization: BeST<br />Management: <br />Phone: +375 (25) 909 12 07<br />Manager: <a>Baltunou Victar</a></div>
                </div>
                <div style={{clear:'both'}}></div>
              </div>
            <div><a href="index.php?id=1362">To complete employee profile</a></div>
          </div>
        </div>
      </div>
      
      
      
      
      </div>
    );
  }

}

export default Tooltip;