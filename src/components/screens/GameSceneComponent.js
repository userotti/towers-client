import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { 
  createExplosion,
  createTextNotification
} from '../../redux/actions/effectsActions.js';

import EffectsLayerComponent from '../layers/EffectsLayerComponent.js';
import { getBasicExplosion, getBasicTextNotification } from '../../gamePresets.js';

class GameSceneComponent extends React.Component{

  componentDidMount(){
  
  }

  backgroundClick = (e) => {
    this.props.createExplosion(getBasicExplosion({
      x: e.evt.clientX,
      y: e.evt.clientY
    }));

    this.props.createTextNotification(getBasicTextNotification({
      x: e.evt.clientX + 100,
      y: e.evt.clientY,
      text: " + " + (Math.floor(Math.random() * 10)) + " Gold"
    }));
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
    createTextNotification
  }, dispatch)
};

export default GameSceneComponent = connect(mapStateToProps, mapDispatchToProps)(GameSceneComponent);
