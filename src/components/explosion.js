import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { Spring, config } from 'react-spring/dist/konva'
import Konva from 'konva';
import store from '../redux/store';

import { removeExplosion } from '../redux/actions/gamesceneActions.js';
export default class Explosion extends React.Component {


  render() {
      return ( <Spring 
        onRest={()=>{store.dispatch(removeExplosion({
          id: this.props.id
        }))}} 
        
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
          tension: 175,
          friction: 34,
          clamp: true
        }}>
        
        {spring => {
          
          return <Circle
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