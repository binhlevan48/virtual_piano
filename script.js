document.addEventListener("DOMContentLoaded", function() {
  const whiteKeys = document.querySelectorAll(".white-key");
  const blackKeys = document.querySelectorAll(".black-key");

  const keyMap = {
    a: "C",
    w: "C#",
    s: "D",
    e: "D#",
    d: "E",
    f: "F",
    t: "F#",
    g: "G",
    y: "G#",
    h: "A",
    u: "A#",
    j: "B"
  };

  function playSound(note) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "8n");
  }

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (key in keyMap) {
      const note = keyMap[key] + "4";
      const pianoKey = document.querySelector(`[data-note='${keyMap[key]}']`);
      pianoKey.classList.add("active");
      playSound(note);
    }
  });

  document.addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    if (key in keyMap) {
      const pianoKey = document.querySelector(`[data-note='${keyMap[key]}']`);
      pianoKey.classList.remove("active");
    }
  });

  whiteKeys.forEach(key => {
    key.addEventListener("mousedown", () => {
      const note = key.dataset.note + "4";
      key.classList.add("active");
      playSound(note);
    });
    key.addEventListener("mouseup", () => {
      key.classList.remove("active");
    });
  });

  blackKeys.forEach(key => {
    key.addEventListener("mousedown", () => {
      const note = key.dataset.note + "4";
      key.classList.add("active");
      playSound(note);
    });
    key.addEventListener("mouseup", () => {
      key.classList.remove("active");
    });
  });
});
