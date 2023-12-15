const notes = {
  C: new Audio('sounds/C.wav'),
  'C#': new Audio('sounds/C#.wav'),
  D: new Audio('sounds/D.wav'),
  'D#': new Audio('sounds/D#.wav'),
  E: new Audio('sounds/E.wav'),
  F: new Audio('sounds/F.wav'),
  'F#': new Audio('sounds/F#.wav'),
  G: new Audio('sounds/G.wav'),
  'G#': new Audio('sounds/G#.wav'),
  A: new Audio('sounds/A.wav'),
  'A#': new Audio('sounds/A#.wav'),
  B: new Audio('sounds/B.wav'),
};

const keyboardMap = {
  KeyA: 'C',
  KeyW: 'C#',
  KeyS: 'D',
  KeyE: 'D#',
  KeyD: 'E',
  KeyF: 'F',
  KeyT: 'F#',
  KeyG: 'G',
  KeyY: 'G#',
  KeyH: 'A',
  KeyU: 'A#',
  KeyJ: 'B',
  KeyK: 'C',
  KeyO: 'C#',
  KeyL: 'D',
  Semicolon: 'D#',
  Quote: 'E',
};

document.addEventListener('keydown', (event) => {
  const pianoKey = keyboardMap[event.code];
  if (pianoKey && notes[pianoKey]) {
    notes[pianoKey].currentTime = 0;
    notes[pianoKey].play();
  }
});

const keys = document.querySelectorAll('.white-key, .black-key');
keys.forEach((key) => {
  key.addEventListener('click', () => {
    const note = key.getAttribute('data-note');
    if (notes[note]) {
      notes[note].currentTime = 0;
      notes[note].play();
    }
  });
});
