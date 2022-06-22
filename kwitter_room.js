
var firebaseConfig = {
      apiKey: "AIzaSyCKT4qv2u8nompW5IrPof7qXgFUJl1gpHU",
      authDomain: "kwitter-dcb2d.firebaseapp.com",
      projectId: "kwitter-dcb2d",
      storageBucket: "kwitter-dcb2d.appspot.com",
      messagingSenderId: "966044256586",
      appId: "1:966044256586:web:7504565bec12eab7dc19b3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById ("user_name").innerHTML="Welcome"+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
          localStorage.setItem("room_name",room_name);
          window.location="Kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      
      });});}

getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
