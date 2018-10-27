import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { Spring } from 'react-spring/dist/konva'
import Konva from 'konva';
import Explosion from './components/explosion.js';

const randomNumberRange = (start, end) => {
   return ((Math.random() * (end - start)) + start);
}


export default class App extends Component {

  state = {
    explosions: []
  }
  componentDidMount() {

    this.resetAnimations();

    setInterval(()=>{
      this.resetAnimations();
    }, 400)
  }

  resetAnimations() {
    this.setState({
      explosions: [{
        x: randomNumberRange(200, 400),
        y: randomNumberRange(200, 400),
        startRadius: 0,
        endRadius: randomNumberRange(50, 200),
        startStroke: randomNumberRange(20, 50),
        endStroke: 0
        
      }, {
        x: randomNumberRange(200, 400),
        y: randomNumberRange(200, 400),
        startRadius: 0,
        endRadius: randomNumberRange(50, 200),
        endRadius: randomNumberRange(50, 200),
        startStroke: randomNumberRange(20, 50),
        endStroke: 0
      }]
    })
  }

  backgroundClick = () => {
    console.log("you suck");
  }

  render() {

    const { explosions } = this.state;
      
    return (
      <Stage width={window.innerWidth} height={window.innerHeight} >
        <Layer>
          <Rect
            x={0}
            y={0}
            width={window.innerWidth}
            height={window.innerHeight}
            fill={"black"}
            onClick={this.backgroundClick}
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


render(<App />, document.getElementById('root'));
