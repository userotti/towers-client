import React, { Component } from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';
import { Spring, config, animated } from 'react-spring/dist/konva';
import store from '../../redux/store';


import { removeTextNotification } from '../../redux/actions/effectsActions.js';
export default class TextNotificationComponent extends React.Component {

  shouldComponentUpdate(props){
    return props.isReset && !this.isBusyAnimating;
  }
  
  render() {

    this.isBusyAnimating = true;

    return ( <Spring 

      native
      reset
      onRest={()=>{
        this.isBusyAnimating = false;
        store.dispatch(removeTextNotification({
          id: this.props.id
        }))
      
      }} 
      
      from={{ 
        scaleX: this.props.startScaleX, 
        scaleY: this.props.startScaleY,
        opacity: this.props.startOpacity,
        y: this.props.startY,
        fontSize:this.props.startFontSize
          
          
      }} 
      to={{ 
        scaleX: this.props.endScaleX, 
        scaleY: this.props.endScaleY,
        opacity: this.props.endOpacity,
        y: this.props.endY,
        fontSize:this.props.endFontSize
        
      }} 
      config={{
        ...this.props.springConfig
      }}>
      
      {spring => {
        
        return <animated.Text
          ref={ref => (this.konvaText = ref)}
          x={this.props.x}
          y={spring.y}
          fontSize={spring.fontSize}
          fontStyle={this.props.fontStyle}
          fill={this.props.color}
          opacity={spring.opacity}
          scaleX={spring.scaleX}
          scaleY={spring.scaleY}
          text={this.props.text}

          wrap="char"
          align="center"
          width={100}
          offsetX={50}

        />

      }}  

      </Spring> )
  }
}