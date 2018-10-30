import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { Spring, config, animated } from 'react-spring/dist/konva';
import Konva from 'konva';
import store from '../../redux/store';

import { removeExplosion } from '../../redux/actions/effectsActions.js';
export default class ExplosionComponent extends React.Component {

  shouldComponentUpdate(){
    return false;
  }

  render() {
      return ( <Spring 

        native
        onRest={()=>{
            store.dispatch(removeExplosion({
              id: this.props.id
            }))
          }
        } 
        
        from={{ 
          radius: this.props.startRadius, 
          stroke: this.props.startStroke,
          opacity: this.props.startOpacity
        }} 
        
        to={{ 
          radius: this.props.endRadius, 
          stroke: this.props.endStroke,
          opacity: this.props.endOpacity 
        }}

        config={{
          ...this.props.springConfig
        }}>
        
        {spring => {
          
          return <animated.Circle
            x={this.props.x}
            y={this.props.y}
            radius={spring.radius} 
            stroke={this.props.color}
            strokeWidth={spring.stroke} 
            opacity={spring.opacity}
            />
            
        }}    
        </Spring> )
  }
}