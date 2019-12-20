function thisClicked() {
        document.getElementById('popUp1').style.display='block'
    }
    var popUpp = document.getElementById('popUp1');
    window.onclick = function(event) {
        if (event.target == popUpp) {
            popUpp.style.display = "none";
        }
    }
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } 
    else {
        x.className = "topnav";
    }
}