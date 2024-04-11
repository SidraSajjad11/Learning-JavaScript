var randTexts = ["Active", "Active"];
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input" , {bubbles: true});
var textbox = document.querySelector('text')[0];
setInterval(() => {
  textbox.innerHTML = message(Math.floor(Math.random()*randTexts.length)+0);
  textbox.dispatchEvent(event);
  document.querySelector('.x1c4vz4f x2lah0s xdl72j9 xfect85 x1iy03kw x1lfpgzf')[0].click();
}, 5400000);