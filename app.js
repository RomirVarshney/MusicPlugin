const playBTN = document.getElementById("play-btn");
const synth = new Tone.Synth();//.toDestination();
const keyboard = new AudioKeys();
/*
synth.oscillator.type = 'sine';
synth.envelope.attack = 0.001;
synth.envelope.sustain = 0.5;

var gain  = new Tone.Gain(0.7);
synth.connect(gain);
gain.toMaster();

var isPlaying = false
var noteEl = document.getElementById('note')


var pattern = new Tone.Pattern((t,n) => {
  noteEl.innerHTML = n
	synth.triggerAttackRelease(n, "8n", t)
}, ["C4", "E4", "G4", "B4"], "upDown")


Tone.Transport.bpm.value = 200
pattern.start();

*/

synth.volume.value = -20;

keyboard.down((key) => {
  synth.triggerAttackRelease(key.frequency, "8n")
})

const feedbackDelay = new Tone.FeedbackDelay("4n", "0.8");

synth.connect(feedbackDelay);
feedbackDelay.toDestination();

//synth.triggerAttackRelease("C3", "8n");

document.getElementById("play-btn").addEventListener("click", () => {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    synth.triggerAttackRelease("C5", "8n");
  });
