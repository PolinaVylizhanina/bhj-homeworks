getHole = index => document.getElementById(`hole${index}`)

const cntDead = document.getElementById("dead")
const cntLost = document.getElementById("lost")

for (let i = 1; i <=9; i++) {

    getHole(i).onclick = function() {

     if(getHole(i).className.includes("hole_has-mole")){

       cntDead.textContent++

     } else {

       cntLost.textContent++

   }

if(+cntDead.textContent === 10) {

    alert("Вы выиграли!");
    cntDead.textContent = 0;
    cntLost.textContent = 0

} else if(+cntLost.textContent === 5){

    alert("Вы проиграли!");
    cntLost.textContent = 0;
    cntDead.textContent = 0;

    }
}

}