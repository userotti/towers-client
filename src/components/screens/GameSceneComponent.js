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
    },200);

    setInterval(()=>{
      for (let i = 0; i < 1; i++){
        this.props.createTextNotification(getBasicTextNotification({
          x: 300,
          y: 100,
          text: " + " + (Math.floor(Math.random() * 10)) + " Gold"
        }));
      }
    },700);

    setInterval(()=>{
      for (let i = 0; i < 1; i++){
        this.props.createExplosion(getBasicExplosion({
          x: 500,
          y: 100,
        }));
      }
    },500);

  }

  backgroundClick = (e) => {
    
    this.props.createTextNotification(getBasicTextNotification({
      x: e.evt.clientX,
      y: e.evt.clientY,
      text: " + " + (Math.floor(Math.random() * 10)) + " Gold"
    }));

    this.props.createHitSparks(getRandomHitSparks({
      x: e.evt.clientX,
      y: e.evt.clientY
    }));

    this.props.createExplosion(getBasicExplosion({
      x: e.evt.clientX,
      y: e.evt.clientY
    }));
  }  

  render() {

    let { effects } = this.props.gameScene;
    const width = 800;
    const height = 800;
    
   
    return (
      <Stage width={width} height={height} onClick={this.backgroundClick}>
        <Layer>
          <Rect
            x={0}
            y={0}
            width={width}
            height={height}
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
