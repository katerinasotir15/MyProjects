var score1=0;//shows the points of the first player for each round
var score2=0;//shows the points of the second player for each round
let points1;
let total1=parseInt(points1);//shows the total points of the first player for each move
total1=0;
let points2;
let totat2=parseInt(points2);//shows the total points of the second player for each move
total2=0;
document.getElementById("player1").setAttribute("value", "Player 1");//sets "Player 1" to the first input field
document.getElementById("player2").setAttribute("value", "Player 2");//sets "Player 2" to the second input field
//function for the first die roll 
        function rollFirstDice(event){
                let dice1=Math.floor(Math.random()*6+1);//chooses a random number for the first die
                //depending to the random number appears the image of the die and calculates the points
                if(dice1==1){
                    document.querySelector(".img1").setAttribute("src","img/dice1.gif");
                    document.getElementById("player1-points").innerHTML="1";
                    score1=document.getElementById("player1-points").innerHTML;
                    }
                else if(dice1==2){
                    document.querySelector(".img1").setAttribute("src","img/dice2.gif");
                    document.getElementById("player1-points").innerHTML="2";
                    score1=document.getElementById("player1-points").innerHTML;
                    }
                else if(dice1==3){
                    document.querySelector(".img1").setAttribute("src", "img/dice3.gif");
                    document.getElementById("player1-points").innerHTML="3";
                    score1=document.getElementById("player1-points").innerHTML;
                    }
                else if(dice1==4){
                    document.querySelector(".img1").setAttribute("src","img/dice4.gif");
                    document.getElementById("player1-points").innerHTML="4";
                    score1=document.getElementById("player1-points").innerHTML;
                        }
                else if(dice1==5){
                    document.querySelector(".img1").setAttribute("src","img/dice5.gif");
                    document.getElementById("player1-points").innerHTML="5";
                    score1=document.getElementById("player1-points").innerHTML;
                    }
                else{
                    document.querySelector(".img1").setAttribute("src","img/dice6.gif");
                    document.getElementById("player1-points").innerHTML="6";
                    score1=document.getElementById("player1-points").innerHTML;
                }
                clickCount++;//counts the number od clicks
                let points_player1=parseInt(score1);
                total1=total1+points_player1;//calculates the total points for the first player
                document.getElementById("total1").textContent=total1;//sets the points to the element with id "total1"
                let round=document.getElementById("nr_round").value; //gets the number of rounds
                //checks whether the number of clicks is bigger or equal to the number of rounds 
            if (clickCount>=round){
                //the click above the first image won't function anymore
                document.querySelector(".img1").removeEventListener("click", rollFirstDice);
            }
            else{
                rollSecondDice();
            }
            
        }
        let clickCount=0;
        let clickCount1=0;
         document.querySelector(".img1").addEventListener("click", rollFirstDice);//makes possible the click above the first image
         //makes possible the click above the second image
        document.querySelector('.img2').addEventListener('click', function rollSecondDice(){
            dice2=Math.floor(Math.random()*6+1);//chooses a random number for the second die
             //depending to the random number appears the image of the die and calculates the points
            if(dice2==1){
                document.querySelector(".img2").setAttribute("src","img/dice1.gif");
                document.getElementById("player2-points").innerHTML="1";
                score2=document.getElementById("player2-points").innerHTML;
                }
            else if(dice2==2){
                document.querySelector(".img2").setAttribute("src","img/dice2.gif");
                document.getElementById("player2-points").innerHTML="2";
                score2=document.getElementById("player2-points").innerHTML;
                }
            else if(dice2==3){
                document.querySelector(".img2").setAttribute("src", "img/dice3.gif");
                document.getElementById("player2-points").innerHTML="3";
                score2=document.getElementById("player2-points").innerHTML;
                }
            else if(dice2==4){
                document.querySelector(".img2").setAttribute("src","img/dice4.gif");
                document.getElementById("player2-points").innerHTML="4";
                score2=document.getElementById("player2-points").innerHTML;
                    }
            else if(dice2==5){
                document.querySelector(".img2").setAttribute("src","img/dice5.gif");
                document.getElementById("player2-points").innerHTML="5";
                score2=document.getElementById("player2-points").innerHTML;
                }
            else{
                document.querySelector(".img2").setAttribute("src","img/dice6.gif");
                document.getElementById("player2-points").innerHTML="6";
                score2=document.getElementById("player2-points").innerHTML;
            }
            clickCount1++;//counts the number of clicks for the second die
            let points_player2=parseInt(score2);
            total2=total2+points_player2;//calculates the total points for the second player
            document.getElementById("total2").textContent=total2;
            let round=document.getElementById("nr_round").value;
            if(clickCount1>=round){
                //if the number of clicks if bigger or eual to the number of rounds this will display the div with id "message"
                document.getElementById("message").style.display="block";
                document.getElementById("background1").style.display="block";
                //shows the name of the winner
                if(total1>total2){
                    let name1=document.getElementById("player1-name").innerHTML;
                    document.getElementById("winner").innerHTML=name1;
                }
                else if(total1==total2){
                    document.getElementById("winner").innerHTML="No one (Equal Points)";
                }
                else{
                    let name2=document.getElementById("player2-name").innerHTML;
                    document.getElementById("winner").innerHTML=name2;
                }
            }
           
    });
    //when clicking the button "continue" this function will be executed
function next_page(){
   let name1=document.getElementById("player1").value;//gets from user the name of the first player
   let name2=document.getElementById("player2").value;//gets from user the name of the second player
   document.getElementById("player1-name").innerHTML=name1;//displays the name of the first player
   document.getElementById("player2-name").innerHTML=name2;//displays the name of the second player
   document.getElementById("players-name").style.display="none";//disappears the div with id "players-name"
   document.getElementById("background").style.display="none";//disappears the div with id "background"
}
//when clicking the button "Play Game" this function will be executed
function next_page1(){
  document.getElementById("rounds").style.display="none";//disappears the div with id "rounds"
  var nr_round=document.getElementById("nr_round").value;//gets the number of rounds from user
  document.getElementById("background1").style.display="none";//dissapers the div with id "background1"
 }
 //when clicking the button "Play Again" the page will reaload
 document.getElementById("playAgain").addEventListener("click", function playAgain(){
    location.reload();
 });
