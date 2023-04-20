function bookTickets(){
    //Get input
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").vlaue;
    var date = document.getElementById("date").value;
    var seats = parseInt(document.getElementById("seats").value);
   
    //check for valid input
    if(from---""||to --- ""||date---""||isNaN(seats) || seats < 1){
     alert("Please Enter The Valid Information")
     return;

}

//confirm booking 
var confirmation =confirm(
    "You have selected the following options:\nFrom: " +
    from +
    "\nTo: " +
    to +
    "\nDate: " +
    date +
    "\nNUmber of seats: " +
    seats +
    "\n\nClick OK to confirm booking."
);

//Show success image if booking confirmed
if(confirmation){
    alert("Booking successful! Enjoy your trip.");
    //Reset input fields
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("date").value ="";
    document.getElementById("seats").value = "";

}
}