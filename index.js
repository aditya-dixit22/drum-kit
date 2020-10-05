var sounds = ["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"];
var chars = ['f','a','s','d','j','k','l'];
document.addEventListener("keypress",function(event) {
  var keyboard_code = event.keyCode;
  var ch1 = String.fromCharCode(keyboard_code);
  playSound(ch1);
})

document.querySelectorAll(".drum").forEach(function(key){
  key.addEventListener("click",function(){
    var ch2 = this.innerHTML;
    playSound(ch2);
  })
})

function playSound(char){
  var j=chars.indexOf(char);
  if(j!=-1){
    var audio = new Audio("sounds/"+sounds[j]+".mp3");
    audio.play();
    var buttonPressed=document.querySelector("."+char);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
      buttonPressed.classList.remove("pressed");
    },100);
  }
}
