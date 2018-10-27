import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { 
  createNewTower,
  createExplosion
} from '../redux/actions/gamesceneActions.js';
import Explosion from '../components/explosion.js';
import { getBasicExplosion } from '../gamePresets.js';

const randomNumberRange = (start, end) => {
  return ((Math.random() * (end - start)) + start);
}

class GamesceneComponent extends React.Component{

  componentDidMount(){

  }

  backgroundClick = (e) => {

    this.props.createExplosion(getBasicExplosion({
      x: e.evt.clientX,
      y: e.evt.clientY
    }));
  }  

  render() {

    let { explosions } = this.props.gamescene;
   
    return (
      <Stage width={window.innerWidth} height={window.innerHeight} onClick={this.backgroundClick}>
        <Layer>
          <Rect
            x={0}
            y={0}
            width={window.innerWidth}
            height={window.innerHeight}
            fill={"black"}
            
          />
          <Text fill={"white"} text="This is some text from react-konva " />
            {explosions && explosions.map((explosion, index)=>{
              return <Explosion key={explosion.id} {...explosion}/> 
            })}
        </Layer>
      </Stage>
    );
  }

}

const mapStateToProps = ({gamescene}) => {
  return ({
    gamescene
  })
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createNewTower,
    createExplosion
  }, dispatch)
};

export default GamesceneComponent = connect(mapStateToProps, mapDispatchToProps)(GamesceneComponent);
