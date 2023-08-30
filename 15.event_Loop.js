console.log("start");

console.log("start 2");

function timeout() {
  console.log("timeout 5 sec");
}

window.setTimeout(() => {
  console.log("after time");
}, 0); // browser api

setTimeout(timeout, 5000);

console.log("end");

// scroll,click,button
