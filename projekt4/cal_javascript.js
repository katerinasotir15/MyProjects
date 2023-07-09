 let bill_tip;
function calculate(){
      document.getElementById("alertBox").style.display="block" 
      let bill=document.getElementById("bill").value; 
      document.getElementById("bill").innerHTML=bill;
      if(bill>=100 && bill<300){
          bill_tip=0.1*bill;
          document.getElementById("description").innerHTML="The tip you should leave is $"+bill_tip+"!";
      }
      else if(bill>=300 && bill<500){
          bill_tip=bill*0.05;
          document.getElementById("description").innerHTML="The tip you should leave is $"+bill_tip+"!";
          }
       else if(bill>=500){
         bill_tip=bill*0.03;
         document.getElementById("description").innerHTML="The tip you should leave is $"+bill_tip+"!";
          }   
      else if(bill>=0 && bill<100){
         bill_tip=0;
         document.getElementById("description").innerHTML="The tip you should leave is $"+bill_tip+"!";
         }    
      else{
         document.getElementById("description").innerHTML="The value you have entered is not valid!";
      }
}
function amount(){
      document.getElementById("alertBox2").style.display="block"
      let bill=document.getElementById("bill").value; 
      document.getElementById("bill").innerHTML=bill;
      var bill1=parseInt(bill);
      if(bill1>=100 && bill1<300){
         bill_tip=bill1*0.1;
         bill1+=bill_tip;
         document.getElementById("description2").innerHTML="The total amount you should pay is $"+bill1+"!";
     }
     else if(bill1>=300 && bill1<500){
         bill_tip=bill1*0.05;
         bill1+=bill_tip;
         document.getElementById("description2").innerHTML="The total amount you should pay is $"+bill1+"!";
         }
      else if(bill1>=500){
         bill_tip=bill1*0.03;
         bill1+=bill_tip;
         document.getElementById("description2").innerHTML="The total amount you should pay is $"+bill1+"!";
         }   
     else if(bill1>=0 && bill1<100){
        document.getElementById("description2").innerHTML="The total amount you should pay is $"+bill1+"!";
        }    
     else{
        document.getElementById("description2").innerHTML="You have nothing to pay!";
     }
}
function cancel(){
   document.getElementById("alertBox2").style.display="none";
   document.getElementById("alertBox").style.display="none";
}
function cancel1(){
   document.getElementById("alertBox").style.display="none";
}