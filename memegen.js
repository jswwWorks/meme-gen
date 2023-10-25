// I'm going to want to add an event to listen for the submitting of that form
// look up how forms work in js

function makeMeme() {
  console.log('yay');
  const topText = document.getElementById('top-text');
  const picForMeme = document.getElementById('image-url');
  const bottomText = document.getElementById('bottom-text');
  alert(topText += bottomText);
}


/*
const newMeme = document.createElement('img'); // creates the image
newMeme.setAttribute('src', linkHere); // put link here (you'll have a variable name for this, don't worry)

document.body.append(newMeme); // this puts the image after the body; I might want to have this in a div, though

*/