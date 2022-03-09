function slowDown(velocity, printer){
  let decelarion = 20

  while(velocity > 0){
    printer(velocity)
    velocity -=decelarion
  }

  alert("Nave parada. As comportas podem ser abertas")
}

let spaceshipVelocity = 150

function print(velocity){
  console.log("Velocidade atual: "+velocity)
}

slowDown(spaceshipVelocity,print)
