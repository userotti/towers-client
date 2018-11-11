import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { Spring, config, animated } from 'react-spring/dist/konva';
import Konva from 'konva';
import store from '../../redux/store';

import { removeHitSparks } from '../../redux/actions/effectsActions.js';
export default class HitSparksComponent extends React.Component {

  componentDidMount() {
    this.myComponentID = Math.random();

    // console.log(" componentDidMount this.myComponentID: ", this.myComponentID);
  }

  makeSmallPartical({x, y}) {
    return <Rect
        key={Math.random()}
        x={x}
        y={y}
        width={6}
        height={6}
        fill={'#eedd12'}/>
  }

  makeArrayOfSpots(){
    let spots = [0,0,0,0,0,0,0];
    return spots.map(()=>{
      return {
        x: (Math.random()-Math.random()) * 15,
        y: (Math.random()-Math.random()) * 15
      }
    })

  }

  shouldComponentUpdate(props){
    return props.isReset && !this.isBusyAnimating;
  }

  render(props) {

    this.isBusyAnimating = true;

    if (!this.particals){
      this.particals = this.makeArrayOfSpots().map((spot)=>{
        return this.makeSmallPartical(spot); 
      });
    }

    return ( <Spring 

      native
      reset
      onRest={()=>{
          this.isBusyAnimating = false;
          store.dispatch(removeHitSparks({
            id: this.props.id
          }))
        }
      } 
      
      from={{ 
        scaleX: this.props.startScaleX,
        scaleY: this.props.startScaleY,
        opacity: this.props.startOpacity
      }} 
      
      to={{ 
        scaleX: this.props.endScaleX,
        scaleY: this.props.endScaleY,
        opacity: this.props.endOpacity 
      }}

      config={{
        ...this.props.springConfig
      }}>
      
      {spring => {
        
        return <animated.Group
          x={this.props.x}
          y={this.props.y}
          scaleX={spring.scaleX}
          scaleY={spring.scaleY}
          opacity={spring.opacity}
          > 
            {this.particals}
          
          </animated.Group>
          
      }}    
      </Spring> )
  }
}