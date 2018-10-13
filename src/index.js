import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { Spring } from 'react-spring/dist/konva'
import Konva from 'konva';
// import Explosion from './explosion.js';

const randomNumberRange = (start, end) => {
   return ((Math.random() * (start - end)) - start);
}



class App extends Component {

  state = {
    explosions: []
  }
  componentDidMount() {

    this.setState({
      explosions: [{
        x: 200,
        y: 200
      }]
    })

    setInterval(()=>{
      this.setState({
        explosions: [{
          x: 200,
          y: 200
        }]
      })
      
    }, 1000)
  }

  render() {
    console.log("this.props", this.props);
    console.log("this.state", this.state);

    const { explosions } = this.state;
    console.log("or hier?")
      
    return (
      <Stage width={window.innerWidth} height={window.innerHeight} >
        <Layer>
          <Rect
            x={0}
            y={0}
            width={500}
            height={500}
            fill={"black"}
          />
          <Text fill={"white"} text="This is some text from react-konva " />

            {explosions && explosions.map((explosion, index)=>{
              return <Explosion key={index} {...explosion}/> 
            })}

        </Layer>

      </Stage>
    );
  }
}

class Explosion extends React.Component {

  state = {
    color: "#df8223",
    stroke: 40,
    radius: 200
  };

  render() {

      return ( <Spring onStart={()=>{console.log("hallo")}} reset={true} from={{ radius: 0, color: this.state.color  }} to={{ radius: this.state.radius, color: '#000000' }} config={{}}>
        {spring => {
          // console.log("and?" + spring.radius)
          let opcatiy = 1; //(((this.state.radius - spring.radius) / this.state.radius) * 0.2) + 0.3
          opcatiy = opcatiy > 0 ? opcatiy : 0
           
          return <Circle
            
            x={this.props.x}
            y={this.props.y}
            radius={spring.radius} 
            stroke={this.state.color}
            strokeWidth={this.state.stroke} 
            opacity={opcatiy}
            
            />
            
        }}    
        </Spring> )
  }
}

render(<App />, document.getElementById('root'));
