// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKT4qv2u8nompW5IrPof7qXgFUJl1gpHU",
  authDomain: "kwitter-dcb2d.firebaseapp.com",
  databaseURL: "https://kwitter-dcb2d-default-rtdb.firebaseio.com",
  projectId: "kwitter-dcb2d",
  storageBucket: "kwitter-dcb2d.appspot.com",
  messagingSenderId: "966044256586",
  appId: "1:966044256586:web:7504565bec12eab7dc19b3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.databas().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_width_tag="<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_width_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_width_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_width_tag+message_width_tag+like_button+spam_width_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      lights=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}