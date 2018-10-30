import React, { Component } from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';
import { Spring, config, animated } from 'react-spring/dist/konva';
import store from '../../redux/store';
import { removeTextNotification } from '../../redux/actions/effectsActions.js';

export default class TextNotificationKonvaAnimComponent extends React.Component {
  
  componentDidMount(){
    
    this.konvaText.to({
      y:this.props.endY,
      opacity:this.props.endOpacity,
      scaleX:this.props.endScaleX,
      scaleY:this.props.endScaleY,
      duration: 2,
    })

    setTimeout(()=>{
      store.dispatch(removeTextNotification({
        id: this.props.id
      }))
    }, 2000)

  }

  shouldComponentUpdate() {
    return false
  }
  
  render() {
      return (<Text
            ref={ref => (this.konvaText = ref)}
            x={this.props.x}

            fontSize={this.props.startFontSize}
            fontStyle={this.props.fontStyle}
            fill={this.props.color}
            text={this.props.text}

            wrap="char"
            align="center"
            width={100}
            offsetX={50}

            y={this.props.startY}
            opacity={this.props.startOpacity}
            scaleX={this.props.startScaleX}
            scaleY={this.props.startScaleY}

          />)
  }
}