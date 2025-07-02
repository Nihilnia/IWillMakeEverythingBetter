console.log("Start");

setTimeout(function() {
  console.log("Inside setTimeout - This runs after a delay");

  const vid = document.querySelector('video');
  vid.classList.add('show-block')


}, 2000); // 2000 milliseconds = 2 seconds

console.log("End");