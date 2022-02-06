// var sounds = ["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"];
function switchButtons(key){
    switch (key) {
        case 'w':
          var wBeat = new Audio("sounds/tom-1.mp3");
          wBeat.play();
        break;
        case 'a':
          var aBeat = new Audio("sounds/tom-2.mp3");
          aBeat.play();
        break;
        case 's':
          var sBeat = new Audio("sounds/tom-3.mp3");
          sBeat.play();
        break;
        case 'd':
          var dBeat = new Audio("sounds/tom-4.mp3");
          dBeat.play();
        break;
        case 'j':
          var jBeat = new Audio("sounds/snare.mp3");
          jBeat.play();
        break;
        case 'k':
          var kBeat = new Audio("sounds/crash.mp3");
          kBeat.play();
        break;
        case 'l':
          var lBeat = new Audio("sounds/kick-bass.mp3");
          lBeat.play();
        break;
        default:
            alert("Invalid Key");
            break;
    }
}
function animateButton(key){
    var button = document.querySelector("."+key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.remove("pressed");
      },100);
}
var i = document.getElementsByClassName("drum").length;
for(var j= 0; j< i; j++){
    // Adding Event Listener to each button
    document.getElementsByClassName("drum")[j].addEventListener("click", function(){
      var val = this.innerHTML;
      var currentClass = document.getElementsByClassName(val)[0];
      
      switchButtons(val);
      animateButton(val);
      
      
    //   alert(val);
    });
}
// Adding Event Listener to whole document/page
document.addEventListener("keypress", function(e){
    switchButtons(e.key);
    animateButton(e.key);
});