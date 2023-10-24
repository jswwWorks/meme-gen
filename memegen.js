// still need to connect js file to html file

const newMeme = document.createElement('img'); // creates the image
newMeme.setAttribute('src', linkHere); // put link here (you'll have a variable name for this, don't worry)

document.body.append(newMeme); // this puts the image after the body; I might want to have this in a div, though