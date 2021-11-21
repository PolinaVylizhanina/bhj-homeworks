const imgClick = document.getElementById("cookie");
const cntClick = document.getElementById("clicker__counter");

imgClick.onclick = function() {
    
    let click = cntClick.textContent++;

    if (click % 2 === 0) {

        imgClick.width = 250;

    } else {
        
        imgClick.width = 200;
    }
    
}