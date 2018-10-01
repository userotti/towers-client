import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import { Spring } from 'react-spring/dist/konva'
import { TimingAnimation, Easing } from 'react-spring/dist/addons'



class ColoredRect extends Component {

  state = {
    color: 'green'
  };

  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };

  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={10}
        height={10}
        fill={"white"}
      />
    );
  }
}

const randomNumberRange = (start, end) => {
   return ((Math.random() * (start - end)) - start);
}

class App extends Component {

  state = {
    blocks: []
  }
  componentDidMount() {
    setInterval(()=>{
      this.setState({
        blocks: [{
          x: 200 + (randomNumberRange(-200, 200)),
          y: 200 + (randomNumberRange(-200, 200)),
          destx: 200 + (randomNumberRange(-200, 200)),
          desty: 200 + (randomNumberRange(-200, 200))
        }, {
          x: 200 + (randomNumberRange(-200, 200)),
          y: 200 + (randomNumberRange(-200, 200)),
          destx: 200 + (randomNumberRange(-200, 200)),
          desty: 200 + (randomNumberRange(-200, 200))
        }, {
          x: 200 + (randomNumberRange(-200, 200)),
          y: 200 + (randomNumberRange(-200, 200)),
          destx: 200 + (randomNumberRange(-200, 200)),
          desty: 200 + (randomNumberRange(-200, 200))
        }]
      })
    }, 1500)
  }

  render() {
    console.log("this.props", this.props);
    console.log("this.state", this.state);

    const { blocks } = this.state;
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

          {blocks.map((block, index)=>{
            return <Spring key={index} impl={TimingAnimation} from={{ x: block.x, y: block.y  }} to={{ x: block.destx, y: block.desty }} config={{ duration: 500, easing: Easing.sin }}>
                 {spring => {
                   return <ColoredRect {...spring}/>
                 }}
              </Spring>
          })}


        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById('root'));
