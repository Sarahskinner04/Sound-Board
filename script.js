// create an array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// for each sound in the array, create a button and append it to DOM
sounds.forEach((sound) => {
    // create a button 
    const btn = document.createElement('button');
    // Add a class to the button and set its inner text to the sound name
    btn.classList.add('btn');
    // Set the button label text to the same as the sound name
    btn.innerText = sound;
    //Add the button to the DOM
    document.getElementById('buttons').appendChild(btn);
});