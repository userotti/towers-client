import React, { Component } from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';
import { Spring, config } from 'react-spring/dist/konva'
import store from '../../redux/store';


import { removeTextNotification } from '../../redux/actions/effectsActions.js';
export default class TextNotificationComponent extends React.Component {


  render() {
      return ( <Spring 
        onRest={()=>{store.dispatch(removeTextNotification({
          id: this.props.id
        }))}} 
        
        from={{ 
          scaleX: this.props.startScaleX, 
          scaleY: this.props.startScaleY,
          opacity: this.props.startOpacity,
          y: this.props.startY
            
        }} 
        to={{ 
          scaleX: this.props.endScaleX, 
          scaleY: this.props.endScaleY,
          opacity: this.props.endOpacity,
          y: this.props.endY
        }} 
        config={{
          ...this.props.springConfig
        }}>
        
        {spring => {
          
          let text = <Text
            ref={ref => (this.konvaText = ref)}
            x={this.props.x}
            y={spring.y}
            fontSize={this.props.fontSize}
            fontStyle={this.props.fontStyle}
            
            fill={this.props.color}
            opacity={spring.opacity}
            scaleX={spring.scaleX}
            scaleY={spring.scaleY}
            text={this.props.text}
          />

          if (this.konvaText){
            this.konvaText.offsetX(this.konvaText.width() / 2);
          }
            
          return text;
          
        }}  

        </Spring> )
  }
}