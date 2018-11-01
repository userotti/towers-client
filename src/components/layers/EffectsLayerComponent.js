import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

import ExplosionComponent from '../effects/ExplosionComponent.js';
import TextNotificationComponent from '../effects/TextNotificationComponent.js';
import HitSparksComponent from '../effects/HitSparksComponent.js';


class EffectsLayerComponent extends React.Component{

  componentDidMount(){
  
  }

  render() {

    let { explosions, textNotifications, hitSparks } = this.props.effects;
   
    return (<Layer>
        {explosions.map((explosion, index)=>{
            return <ExplosionComponent key={explosion.id} {...explosion}/> 
        })}
        {textNotifications.map((notification, index)=>{
            return <TextNotificationComponent key={notification.id} {...notification}/> 
          })}
        {hitSparks.map((spark, index)=>{
            return <HitSparksComponent key={spark.id} {...spark}/> 
          })}  
      </Layer>
    );
  }

}

const mapStateToProps = ({gameScene}) => {
  return ({
    effects: gameScene.effects
  })
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
};

export default EffectsLayerComponent = connect(mapStateToProps, mapDispatchToProps)(EffectsLayerComponent);
