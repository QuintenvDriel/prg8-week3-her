// const video = document.getElementById("webcam");
// const label = document.getElementById("label");

// const labelOneBtn = document.querySelector("#labelOne");
// const labelTwoBtn = document.querySelector("#labelTwo");
// const trainBtn = document.querySelector("#train");
// const saveBtn = document.querySelector("#save");

// let featureExtractor;
// let classifier;
// let isModelTrained = false;
// let numClasses = 0;

// labelOneBtn.addEventListener("click", () => train("hond"));
// labelTwoBtn.addEventListener("click", () => train("kat"));

// trainBtn.addEventListener("click", () => trainModel());
// saveBtn.addEventListener("click", () => saveModel());

// if (navigator.mediaDevices.getUserMedia) {
//     navigator.mediaDevices
//         .getUserMedia({ video: true })
//         .then((stream) => {
//             video.srcObject = stream;
//             label.innerText = "Ready when you are!";
//         })
//         .catch((err) => {
//             console.log("Something went wrong!");
//         });
// }

// // Train het model met een bepaald label
// function train(labelName) {
//     if (!featureExtractor) {
//         featureExtractor = ml5.featureExtractor("MobileNet", modelLoaded);
//     }

//     if (!classifier) {
//         classifier = featureExtractor.classification(video, videoReady);
//     }

//     classifier.addImage(video, labelName);
//     numClasses++;
// }

// // Callback-functie wanneer de feature extractor is geladen
// function modelLoaded() {
//     console.log("Feature extractor is geladen!");
// }

// // Callback-functie wanneer de video is geladen en klaar voor training
// function videoReady() {
//     label.innerText = "Voeg trainingsvoorbeelden toe door op de knoppen te klikken.";
// }

// // Train het model met de gegeven voorbeelden
// function trainModel() {
//     if (!classifier || numClasses < 2) {
//         console.log("Voeg meer trainingsvoorbeelden toe!");
//         return;
//     }

//     classifier.train((lossValue) => {
//         if (lossValue) {
//             console.log("Trainingsverlies: " + lossValue);
//         } else {
//             console.log("Model getraind!");
//             isModelTrained = true;
//             label.innerText = "Model getraind! Voeg meer trainingsvoorbeelden toe of sla het model op.";
//         }
//     });
// }

// // Sla het getrainde model op
// function saveModel() {
//     if (!isModelTrained) {
//         console.log("Train het model voordat je het opslaat!");
//         return;
//     }

//     classifier.save().then(() => {
//         console.log("Model opgeslagen!");
//     });
// }
