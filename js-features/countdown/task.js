const startCntTimer = document.getElementById("timer");

function reduceTimer() {
       
    if (startCntTimer.textContent === "0" ) {
        clearInterval(intervalID)
        alert("Вы победили в конкурсе")         
        location.reload(true) ;    
    } 
      
    startCntTimer.textContent--
}

const intervalID = setInterval(reduceTimer, 1000)

