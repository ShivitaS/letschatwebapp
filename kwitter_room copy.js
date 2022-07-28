
const firebaseConfig = {
      apiKey: "AIzaSyCdXVsdL2Ki9AJFwasKWPMMfh71CZLdlhY",
      authDomain: "kwitter2-c96d7.firebaseapp.com",
      databaseURL: "https://kwitter2-c96d7-default-rtdb.firebaseio.com",
      projectId: "kwitter2-c96d7",
      storageBucket: "kwitter2-c96d7.appspot.com",
      messagingSenderId: "4832513669",
      appId: "1:4832513669:web:721809f1200bbadebe63ec"
    };

    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page copy.html";
}
3
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page copy.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter copy.html";
}