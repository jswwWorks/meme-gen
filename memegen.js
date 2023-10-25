document.addEventListener("DOMContentLoaded", function() {
  alert('files are linked'); // Eventually I'll get rid of this!
})

const memeRequested = document.getElementById('submit'); //
memeRequested.addEventListener("click", function() {
  alert('you submitted the meme');
  const topText = document.querySelector('#top-text');
  const picForMeme = document.querySelector('#image-url');
  const bottomText = document.querySelector('#bottom-text');
  alert(`${topText} ${picForMeme} ${bottomText}`); // this is the only line that did not run
  //[object HTMLInputElement] [object HTMLInputElement] [object HTMLInputElement]
  // is it normal for it to come out like this?
})


/*
code that might be useful:

const newMeme = document.createElement('img'); // creates the image
newMeme.setAttribute('src', linkHere); // put link here (you'll have a variable name for this, don't worry)

document.body.append(newMeme); // this puts the image after the body; I might want to have this in a div, though

*/


/*
Progress!

okay first I made sure the HTML and JS files are properly linked

now I want to work on creating and appending an image based on the url providd
*/