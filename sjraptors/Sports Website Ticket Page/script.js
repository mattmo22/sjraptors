const firebaseConfig = {
    apiKey: "AIzaSyAg8F3ttaNYGmnXWwMpWcyUe2KrH_3MHxc",
    authDomain: "sjraptors.firebaseapp.com",
    projectId: "sjraptors",
    databaseURL: "https://sjraptors-default-rtdb.firebaseio.com/",
    storageBucket: "sjraptors.appspot.com",
    messagingSenderId: "480641956052",
    appId: "1:480641956052:web:7abe130ec4649aa535a341"
  };

const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref(); 


const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const gameSelect = document.getElementById('Game');

let ticketPrice = +gameSelect.value;

//update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//game select
gameSelect.addEventListener('change', e=> {
    ticketPrice = e.target.value;
    updateSelectedCount();
});

container.addEventListener('click',(e) => {
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
});

const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
 
function send(){
  var firstName = document.getElementById("first_name").value; 
  var lastName = document.getElementById("last_name").value; 
  var email = document.getElementById("email").value; 
  var phone = document.getElementById("phone").value; 
  var numOfSeats = count;
  var purchasePrice = total;
  
  detailsRef.push().set({ 
    firstName: firstName, 
    lastName: lastName, 
    email: email,
    phone: phone,
    numOfSeats: count,
    purchasePrice: total

  }); 
   
 
} 