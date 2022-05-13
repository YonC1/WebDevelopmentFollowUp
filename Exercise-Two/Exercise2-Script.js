function getRndInteger(min, max) {
    const y = Math.floor(Math.random() * (max - min)) + min;
    let result = "Your number: " + y;

    if(y >= 1 && y <= 1000){
     setTimeout( window.alert("Congratulations! You've won!"),70);
    }else{
      setTimeout( window.alert("Too bad! You've lost!"), 70);
    }

    document.getElementById("guessing").innerHTML = result;

  }


function start()
{
MyVar=setInterval(getRndInteger,20)
}

function stop()
{clearInterval(MyVar);

  
}

