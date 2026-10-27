// Version 2026-10-26
// p5.js      v2.3.4
// ml5.js     v1.0

let classifier;
let targetLabel = 'C';
let state = 'collection';
let startTime;
let changedLabel = false;
let collectedData = false;
let trained_epochs = 0;
let rx, ry;

let notes = {
  C: 261.62,
  D: 293.66,
  E: 329.63,
  F: 349.23,
  G: 392.00,
  A: 440.00
};

let colors = {
  C: 'rgba(255,   0,   0, 0.4)',
  D: 'rgba(   0, 255,   0, 0.4)',
  E: 'rgba(   0,   0, 255, 0.4)',
  F: 'rgba(255, 255,   0, 0.4)',
  G: 'rgba(  0, 255, 255, 0.4)',
  A: 'rgba(255,   0, 255, 0.4)'
};

function setup() {
  createCanvas(400, 440);
  // ml5.setBackend("webgl");

  let options = {
    inputs: ['x', 'y'],
    outputs: ['label'],
    task: 'classification',
    debug: true,
  };
  classifier = ml5.neuralNetwork(options);

  background(255);
  stroke(0);
  rect(0, 0, 400, 400);
  printState();

  trainButton = createButton('Start Training');
  trainButton.position(20, 480);
  trainButton.mousePressed(startTraining);
  continueButton = createButton('Continue Training');
  continueButton.position(140, 480);
  continueButton.mousePressed(continueTraining);
  exportButton = createButton('Export Model');
  exportButton.position(290, 480);
  exportButton.mousePressed(saveModel);

  buttonC = createButton('C');
  buttonD = createButton('D');
  buttonE = createButton('E');
  buttonF = createButton('F');
  buttonG = createButton('G');
  buttonA = createButton('A');
  buttonC.position(110, 445);
  buttonD.position(160, 445);
  buttonE.position(210, 445);
  buttonF.position(260, 445);
  buttonG.position(310, 445);
  buttonA.position(360, 445);
  buttonC.mousePressed(noteC);
  buttonD.mousePressed(noteD);
  buttonE.mousePressed(noteE);
  buttonF.mousePressed(noteF);
  buttonG.mousePressed(noteG);
  buttonA.mousePressed(noteA);
}

function keyPressed() {
  if (key == 't') {
    startTraining();
  } else if (key == 'c' && state == 'prediction') {
    continueTraining();
  } else if (key == 's' && state == 'prediction') {
    saveModel();
  } else if (key == 'r' && state == 'prediction') {
    randomPrediction();
  } else if (key == 'x' && state == 'prediction') {
    randomPredictions();
  } else {
    checkLabel(key.toUpperCase());
  }
}

function startTraining() {
  if (changedLabel && collectedData) {
    state = 'training';
    printState();
    console.log('Starting training.');
    console.log('Loading model, this might take a few seconds.');
    classifier.normalizeData();
    let options = { epochs: 200 };
    trained_epochs = 200;
    classifier.train(options, whileTraining, finishedTraining);
  } else {
    console.log('You must first collect at least two different data points.');
  }
}

function whileTraining(epochs, loss) {
  console.log(epochs);
}

function finishedTraining() {
  console.log('finished training. epochs trained: ', trained_epochs);
  state = 'prediction';
  printState();
}

// Keep track of the last clicked position for classification drawing
let lastClickX = 0;
let lastClickY = 0;

function mousePressed() {
  if (mouseY < 400) {
    lastClickX = mouseX;
    lastClickY = mouseY;

    let inputs = [mouseX, mouseY]; // Pass as array for ml5 v1

    if (state == 'collection') {
      let target = [targetLabel];
      classifier.addData(inputs, target);

      stroke(0);
      noFill();
      ellipse(mouseX, mouseY, 24);
      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      text(targetLabel, mouseX, mouseY);

      playTone(notes[targetLabel]);
      collectedData = true;
    } else if (state == 'prediction') {
      classifier.classify(inputs, handleResults);
    }
  }
}

function handleResults(output, possibleResults) {
  // Accommodate both ml5 v0.12 (err, res) and ml5 v1 (res) signatures
  let results = Array.isArray(output) ? output : possibleResults;

  if (!results || results.length === 0) {
    console.error("No results returned or an error occurred:", output);
    return;
  }

  let label = results[0].label;
  console.log("Predicted:", label, "Confidence:", results[0].confidence);

  // Draw circle and label at the clicked position
  stroke(0);
  fill(colors[label]);
  ellipse(lastClickX, lastClickY, 24);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(label, lastClickX, lastClickY);

  // Play the predicted note
  playTone(notes[label]);
}

function autoResults(output, possibleResults) {
  let results = Array.isArray(output) ? output : possibleResults;

  if (!results || results.length === 0) {
    return;
  }

  let label = results[0].label;

  stroke(0);
  fill(colors[label]);
  ellipse(rx, ry, 24);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(label, rx, ry);

  playTone(notes[label]);
}

function printState() {
  noStroke();
  fill(255, 255, 255);
  rect(0, 400, 400, 35);
  let x_highlight = 100;
  if (state == 'training') { x_highlight = 200; }
  if (state == 'prediction') { x_highlight = 300; }
  fill(180, 180, 255);
  stroke(0);
  rect(x_highlight, 411, 99, 22);
  fill(colors[targetLabel]);
  rect(5, 411, 22, 22);
  textSize(14);
  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  text(targetLabel, 16, 423);
  text("State:", 70, 423);
  text("Collection", 150, 423);
  text("Training", 250, 423);
  text("Prediction", 350, 423);
}

async function randomPrediction() {
  rx = random(400);
  ry = random(400);
  let pos = [rx, ry]; // Array format for ml5 v1
  classifier.classify(pos, autoResults);
}

async function randomPredictions() {
  startTime = millis();
  while (millis() - startTime < 1000) {
    await randomPrediction();
    await new Promise(resolve => setTimeout(resolve, 20));
  }
}

function continueTraining() {
  if (trained_epochs < 100) {
    console.log("You first have to start the training.");
  } else {
    console.log('continue training');
    state = 'training';
    printState();
    trained_epochs += 100;
    let options = { epochs: 100 };
    classifier.train(options, whileTraining, finishedTraining);
  }
}

function saveModel() {
  console.log('export model.');
  classifier.save();
}

function checkLabel(label) {
  if (['C', 'D', 'E', 'F', 'G', 'A'].includes(label)) {
    if (targetLabel != label) {
      changedLabel = true;
    }
    targetLabel = label;
    printState();
  }
}

function noteC() { checkLabel('C'); }
function noteD() { checkLabel('D'); }
function noteE() { checkLabel('E'); }
function noteF() { checkLabel('F'); }
function noteG() { checkLabel('G'); }
function noteA() { checkLabel('A'); }

// Native Web Audio Helper
let audioCtx;
let reverbNode;

// Generate an algorithmic impulse response for a lush room reverb
function createReverbBuffer(ctx, duration = 1.8, decay = 2.0) {
  const sampleRate = ctx.sampleRate;
  const length = sampleRate * duration;
  const impulse = ctx.createBuffer(2, length, sampleRate);
  const left = impulse.getChannelData(0);
  const right = impulse.getChannelData(1);

  for (let i = 0; i < length; i++) {
    const factor = Math.pow(1 - i / length, decay);
    left[i] = (Math.random() * 2 - 1) * factor;
    right[i] = (Math.random() * 2 - 1) * factor;
  }
  return impulse;
}

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create and wire the reverb convolver
    reverbNode = audioCtx.createConvolver();
    reverbNode.buffer = createReverbBuffer(audioCtx, 2.0, 2.2);

    // Reverb wet gain level
    const wetGain = audioCtx.createGain();
    wetGain.gain.setValueAtTime(0.4, audioCtx.currentTime);

    reverbNode.connect(wetGain);
    wetGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTone(freq) {
  initAudio();

  const now = audioCtx.currentTime;
  const attack = 0.05;
  const decay = 0.8;
  const totalDuration = attack + decay;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);

  // Soft attack and long musical release
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.35, now + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + totalDuration);

  // Dry path (direct sound)
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  // Wet path (sends through the reverb chamber)
  gain.connect(reverbNode);

  osc.start(now);
  osc.stop(now + totalDuration);
}
