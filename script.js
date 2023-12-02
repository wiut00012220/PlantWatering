const firebaseConfig = {
  apiKey: "AIzaSyCNd8I9Xfj5J8urBBQhojNkuTqHtJwgl8c",
  authDomain: "plantwatering-8a3be.firebaseapp.com",
  databaseURL: "https://plantwatering-8a3be-default-rtdb.firebaseio.com",
  projectId: "plantwatering-8a3be",
  storageBucket: "plantwatering-8a3be.appspot.com",
  messagingSenderId: "1091515690028",
  appId: "1:1091515690028:web:b791f4a4ae6d5929b33589",
  measurementId: "G-F7EM6BJE06",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var dataRef1 = database.ref("/Sensor/Humidity");
var dataRef2 = database.ref("/Sensor/Temperature");
var dataRef3 = database.ref("/Sensor/Moisture");
var dataRef4 = database.ref("/WaterPump/status");

//fetch the data
dataRef1.on("value", function (getdata1) {
  var humidity = getdata1.val();
  document.getElementById("humidity").innerHTML = humidity + "%";
});

dataRef2.on("value", function (getdata2) {
  var temperature = getdata2.val();
  document.getElementById("temperature").innerHTML = temperature + "&#8451;";
});

dataRef3.on("value", function (getdata3) {
  var moisture = getdata3.val();
  document.getElementById("moisture").innerHTML = moisture + "%";
});

var index = 0;
var btn = document.getElementById("Pump");

function press() {
  index++;
  if (index % 2 == 1) {
    database.ref("/WaterPump/status").set("OFF");
    document.getElementById("pump").innerHTML = "turn off";
  } else {
    database.ref("/WaterPump/status").set("ON");
    document.getElementById("pump").innerHTML = "turn on";
  }
}
