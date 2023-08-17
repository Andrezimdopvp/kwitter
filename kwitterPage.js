const firebaseConfig = {
    apiKey: "AIzaSyAttZQEQIxBtNblvseBjIMDpakXxl4WUtU",
    authDomain: "vamosconversar-8c7fe.firebaseapp.com",
    databaseURL: "https://vamosconversar-8c7fe-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-8c7fe",
    storageBucket: "vamosconversar-8c7fe.appspot.com",
    messagingSenderId: "415358156359",
    appId: "1:415358156359:web:06f5f06a58b781eef6fb62"
  };
    
        firebase.initializeApp(firebaseConfig);


function logout()
{
    localStorage.removeItem("Usuário");
    localStorage.removeItem("room");
    window.location = "index.html";
}

document.getElementById("usr").innerHTML = "Usuário: " + nome;

function send()
{
    msg = document.getElementById("mensagens").Value;
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
    });

    document.getElementById("mensagenes").Value = "";
}

var userName = localStorage.getItem("Usuário");
var roomName = localStorage.getItem("room");