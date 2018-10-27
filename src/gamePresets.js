export function getBasicExplosion({x,y}) {
  return {
    id: Math.random(),
    x: x,
    y: y,
    color: "#df8223",  
    startRadius: 10,
    endRadius: (Math.random() * 40) + 50,
    startStroke: 20,
    endStroke: 5,
    startOpacity: 1,
    endOpacity: 0
  }
}