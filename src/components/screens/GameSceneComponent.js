import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { 
  createExplosion,
  createTextNotification,
  createHitSparks,
} from '../../redux/actions/effectsActions.js';

import EffectsLayerComponent from '../layers/EffectsLayerComponent.js';
import { getBasicExplosion, getBasicTextNotification, getRandomHitSparks } from '../../gamePresets.js';

class GameSceneComponent extends React.Component{

  componentDidMount(){
    setInterval(()=>{
      for (let i = 0; i < 1; i++){
        this.props.createHitSparks(getRandomHitSparks({
          x: 100,
          y: 100
        }));
      }
    },250);

    setInterval(()=>{
      for (let i = 0; i < 1; i++){
        this.props.createTextNotification(getBasicTextNotification({
          x: 300,
          y: 100,
          text: " + " + (Math.floor(Math.random() * 10)) + " Gold"
        }));
      }
    },1300);

    setInterval(()=>{
      for (let i = 0; i < 1; i++){
        this.props.createExplosion(getBasicExplosion({
          x: 500,
          y: 100,
        }));
      }
    },2000);

  }

  backgroundClick = (e) => {
    
    // this.props.createTextNotification(getBasicTextNotification({
    //   x: window.innerWidth / 2 + (Math.random()*300 - 150),
    //   y: window.innerHeight / 2 + (Math.random()*300 - 150),
    //   text: " + " + (Math.floor(Math.random() * 10)) + " Gold"
    // }));

    // this.props.createHitSparks(getRandomHitSparks({
    //   x: e.evt.clientX,
    //   y: e.evt.clientY
    // }));

    // this.props.createTextNotification(getBasicTextNotification({
    //   x: window.innerWidth / 2 + (Math.random()*300 - 150),
    //   y: window.innerHeight / 2 + (Math.random()*300 - 150),
    //   text: " + " + (Math.floor(Math.random() * 10)) + " Gold"
    // }));
  }  

  render() {

    let { effects } = this.props.gameScene;
   
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
        </Layer>
        <EffectsLayerComponent/>
 
      </Stage>
    );
  }

}

const mapStateToProps = ({gameScene}) => {
  return ({
    gameScene
  })
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createExplosion,
    createTextNotification,
    createHitSparks
  }, dispatch)
};

export default GameSceneComponent = connect(mapStateToProps, mapDispatchToProps)(GameSceneComponent);
