import { config } from "react-spring" 
export function getBasicExplosion({x,y}) {

  return {
    id: Math.random(),
    x: x,
    y: y,
    color: "#df8223",  
    startRadius: 5,
    endRadius: (Math.random() * 30) + 60,
    startStroke: 15,
    endStroke: 25,
    startOpacity: 1,
    endOpacity: 0,

    springConfig: {
      ...config.slow
    }
  }
}


export function getBasicTextNotification({x,y,text}) {

  return {
    id: Math.random(),
    x: x,
    y: y,
    text: text,
    fontSize: 20,
    fontStyle: 'bold',
    color: "#ffffff",  
    startY: y,
    endY: y-90,
    startOpacity: 1,
    endOpacity: 0,
    startScaleX: 1,
    endScaleX: 1.5,
    startScaleY: 1,
    endScaleY: 1.5,
    
    springConfig: {
      tension: 90,  
      friction: 70
    }
  }
}