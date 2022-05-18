// button click handler
//apply event to generate new game state
// game state renderer renders the generated game state
// renders text on button clicked with X or O
// disable the button clicked
// update panel values such as Turn Played By and Moves Left
// reset panel values to default values
// implement logic to get the winner
// announce winner
// REPLAY-MODE :: replay-game-button-clicked->fetches events recorded->apply event->generates new game state->render game state
// reset game to start a new
// bind events to clickable buttons
 
var box1 = document.getElementById("box-1");  
var box2 = document.getElementById("box-2");
var box3 = document.getElementById("box-3");
var box4 = document.getElementById("box-4");
var box5 = document.getElementById("box-5");
var  box6 = document.getElementById("box-6");
var  box7 = document.getElementById("box-7");
var  box8 = document.getElementById("box-8");
var  box9 = document.getElementById("box-9");
function refreshPage() {
    if (confirm("Are you sure, want to Restart the Game?")) {
        location.reload();
    }
}
const TURN_PLAYED_BY = "Turn Played By: ";
let player=document.getElementById("next-player");
const MOVES_LEFT_LABEL = "Moves Left : ";
let flag = 1;
var moves = 9;
let countElement = document.getElementById("move-count");
function mark(event){
    console.log(event.target.id);

    if(event.target.id=="box-1")
    {
    if (flag == 1)
    {
        document.getElementById("box-1");
        event.target.innerText="X";
        document.getElementById("box-1").disabled = true;
        flag = 0;
        box1=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"player0";
    }
    else
    {
        document.getElementById("box-1");
        event.target.innerText="O";
        document.getElementById("box-1").disabled = true;
        flag = 1;
        box1=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"playerX";
    }
    moves--;
}
if(event.target.id=="box-2")
    {
    if (flag == 1) {
        document.getElementById("box-2");
        event.target.innerText="X";
        document.getElementById("box-2").disabled = true;
        flag = 0;
        box2=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"player0";
    }
    else {
        document.getElementById("box-2");
        event.target.innerText="O";
        document.getElementById("box-2").disabled = true;
        flag = 1;
        player.innerHTML = TURN_PLAYED_BY+"playerX";
        box2=event.target.innerText;
    }
    moves--;
}
if(event.target.id=="box-3")
    {
    if (flag == 1) {
        document.getElementById("box-3");
        event.target.innerText="X";
        document.getElementById("box-3").disabled = true;
        flag = 0;
        box3=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"player0";
    }
    else {
        document.getElementById("box-3");
        event.target.innerText="O";
        document.getElementById("box-3").disabled = true;
        flag = 1;
        box3=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"playerX";
    }
    moves--;
}
if(event.target.id=="box-4")
    {
    if (flag == 1) {
        document.getElementById("box-4");
        event.target.innerText="X";
        document.getElementById("box-4").disabled = true;
        flag = 0;
        player.innerHTML = TURN_PLAYED_BY+"player0";
        box4=event.target.innerText;
    }
    else {
         document.getElementById("box-4");
        event.target.innerText="O";
        document.getElementById("box-4").disabled = true;
        flag = 1;
        box4=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"playerX";
    }
    moves--;
}
if(event.target.id=="box-5")
    {
    if (flag == 1) {
        document.getElementById("box-5");
        event.target.innerText="X";
        document.getElementById("box-5").disabled = true;
        flag = 0;
        box5=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"player0";
    }
    else {
        document.getElementById("box-5");
        event.target.innerText="O";
        document.getElementById("box-5").disabled = true;
        flag = 1;
        box5=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"playerX";
    }
    moves--;
}
if(event.target.id=="box-6")
    {
    if (flag == 1) {
        box6=document.getElementById("box-6");
        event.target.innerText="X";
        document.getElementById("box-6").disabled = true;
        flag = 0;
        box6=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"player0";
    }
    else {
        document.getElementById("box-6");
        event.target.innerText="O";
        document.getElementById("box-6").disabled = true;
        flag = 1;
        box6=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"playerX";
    }
    moves--;
}
if(event.target.id=="box-7")
    {
    if (flag == 1) {
        document.getElementById("box-7");
        event.target.innerText="X";
        document.getElementById("box-7").disabled = true;
        flag = 0;
        player.innerHTML = TURN_PLAYED_BY+"player0";
        box7=event.target.innerText;
    }
    else {
        document.getElementById("box-7");
        event.target.innerText="O";
        document.getElementById("box-7").disabled = true;
        flag = 1;
        box7=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"playerX";
    }
    moves--;
}
if(event.target.id=="box-8")
    {
    if (flag == 1) {
        document.getElementById("box-8");
        event.target.innerText="X";
        document.getElementById("box-8").disabled = true;
        flag = 0;
        box8=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"player0";
    }
    else {
        document.getElementById("box-8");
        event.target.innerText="O";
        document.getElementById("box-8").disabled = true;
        flag = 1;
        box8=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"playerX";
    }
    moves--;
}
if(event.target.id=="box-9")
    {
    if (flag == 1) {
        document.getElementById("box-9");
        event.target.innerText="X";
        document.getElementById("box-9").disabled = true;
        flag = 0;
        box9=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"player0";
    }
    else {
        document.getElementById("box-9");
        event.target.innerText="O";
        document.getElementById("box-9").disabled = true;
        flag = 1;
        box9=event.target.innerText;
        player.innerHTML = TURN_PLAYED_BY+"playerX";
    }
    moves--;
}
countElement.innerHTML = MOVES_LEFT_LABEL + moves;
func();
}
function func()
{
    if(box1=="O" && box2=="O" && box3=="O"){
        alert("Congratulations!!!!!!!!!!!! \n player_O is winner");
    }
    else if(box4=="O" && box5=="O" && box6=="O"){
        alert("Congratulations!!!!!!!!!!!! \n player_O is winner");
    }
    else if(box7=="O" && box8=="O" && box9=="O"){
        alert("Congratulations!!!!!!!!!!!! \n player_O is winner");
    }
    else if(box1=="O" && box4=="O" && box7=="O"){
        alert("Congratulations!!!!!!!!!!!! \n player_O is winner");
    }
    else if(box2=="O" && box5=="O"&& box8=="O"){
        alert("Congratulations!!!!!!!!!!!! \n player_O is winner");
    }
    else if(box3=="O" && box6=="O"&& box9=="O"){
        alert("Congratulations!!!!!!!!!!!! \n player_O is winner");
    }
    else if(box1=="O" && box5=="O"&& box9=="O"){
        alert("Congratulations!!!!!!!!!!!! \n player_O is winner");
    }
    else if(box3=="O" && box5=="O"&& box7=="O"){
        alert("Congratulations!!!!!!!!!!!! \n player_O is winner");
    }
    if(box1=="X" && box2=="X" && box3=="X"){
        alert("Congratulations!!!!!!!!!!!! \n player_X is winner");
       
    }
    else if(box4=="X" && box5=="X" && box6=="X"){
        alert("Congratulations!!!!!!!!!!!! \n player_X is winner");
       
    }
    else if(box7=="X" && box8=="X" && box9=="X"){
        alert("Congratulations!!!!!!!!!!!! \n player_X is winner");
        
    }
    else if(box1=="X" && box4=="X" && box7=="X"){
        alert("Congratulations!!!!!!!!!!!! \n player_X is winner");
       
    }
    else if(box2=="X" && box5=="X"&& box8=="X"){
        alert("Congratulations!!!!!!!!!!!! \n player_X is winner");
        
    }
    else if(box3=="X" && box6=="X"&& box9=="X"){
        alert("Congratulations!!!!!!!!!!!! \n player_X is winner");
      
    }
    else if(box1=="X" && box5=="X"&& box9=="X"){
        alert("Congratulations!!!!!!!!!!!! \n player_X is winner");
    }
    else if(box3=="X" && box5=="X"&& box7=="X"){
        alert("Congratulations!!!!!!!!!!!! \n player_X is winner");
    }
}