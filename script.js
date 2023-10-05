console.log("hello");   

//creating character current position  
let count="1";
let charStart=[5,2];
let currentPostion=charStart; 
// setting positon of char  
function positionOfChar(){
 myCharacter.style.left=currentPostion[0] + "px"; 
myCharacter.style.bottom=currentPostion[1] + "px";
} 
// decoration  
 function showdec(){ 
    const decoOne=document.getElementsByClassName("decoration-one");
for(i=0;i<decoOne.length;i++){
    decoOne[i].style.display="block"
}}  
function showSecondDec(){
    const decoTwo=document.getElementsByClassName("decoration-two");
    for(i=0;i<decoTwo.length;i++){
        decoTwo[i].style.display="block";
    }}  

// hiding decoration  
function hidedec(){ 
    const decoOne=document.getElementsByClassName("decoration-one");
for(i=0;i<decoOne.length;i++){
    decoOne[i].style.display="none";
}}  
function hideSecondDec(){
    const decoTwo=document.getElementsByClassName("decoration-two");
    for(i=0;i<decoTwo.length;i++){
        decoTwo[i].style.display="none";
    }}   

// cearting our character   
const container=document.querySelector(".main-container");
const myCharacter=document.createElement("div"); 
myCharacter.classList.add("char");  
positionOfChar()
container.appendChild(myCharacter);  
 
// showing  first div   
function showDiv(){
    const firstContainer=document.getElementsByClassName("firstContainer");  
    for(i=0; i<firstContainer.length ;i++){
        firstContainer[i].style.display="block"
    }
} 
// showing second div   
function secondShowDiv(){
    const secondContainer=document.getElementsByClassName("secondContainer"); 
    const thirdContainer=document.getElementsByClassName("thirdContainer"); 
    const fourthContainer=document.getElementsByClassName("fourthContainer");
    for(i=0; i<secondContainer.length;i++){
        secondContainer[i].style.display="block"; 
        thirdContainer[i].style.display="block"; 
        fourthContainer[i].style.display="block";
    }
}  
//showing third div
function showThirdDiv(){
    const thirdDiv=document.getElementsByClassName("main-skill-card"); 
    for(i=0;i<thirdDiv.length;i++){
        thirdDiv[i].style.display="block"
    }
}
// hide first div 
 function hideDiv(){
    const firstContainer=document.getElementsByClassName("firstContainer"); 
    for(i=0; i<firstContainer.length ;i++){
        firstContainer[i].style.display="none";
    }
 }  
//  hide second div 
 function hideSecondDiv(){
    const secondContainer=document.getElementsByClassName("secondContainer"); 
    const thirdContainer=document.getElementsByClassName("thirdContainer");
    const fourthContainer=document.getElementsByClassName("fourthContainer");
    for(i=0; i<secondContainer.length;i++){
        secondContainer[i].style.display="none"; 
        thirdContainer[i].style.display="none"; 
        fourthContainer[i].style.display="none";
    }
 }
//  hide third div  
function hideThirdDiv(){
    const thirdDiv=document.getElementsByClassName("main-skill-card"); 
    for(i=0;i<thirdDiv.length;i++){
        thirdDiv[i].style.display="none"
    }
}
// moveCharacter 

function moveCharacter(e){
    switch (e.key) {
        case 'ArrowRight': 
        if(count<97){ 
         

            currentPostion[0] +=15;  
            positionOfChar();   
            count++    
            myCharacter.style.backgroundImage="url('forward.gif')"
            console.log(count)  
            if(count===2){
                showdec()
            } 
            if(count===6){
                hidedec()
            }
            if(count===22){
                hidedec()
            } 
            if(count===24){
                hideSecondDec()
            }
            if(count>5 ){ 
                showDiv();
             
             if(count>21){
                hideDiv();
            }   
            if(count===23){ 
                showSecondDec()

            }  
            if(count===83){ 
                hideSecondDec()

            }  

           
        } if(count===24 ){ 
            secondShowDiv();
          
        } 
        if(count===83){
             hideSecondDiv();
         }
 
         if(count===86){ 
            showThirdDiv()

         }
            if(count===105){
                hideThirdDiv()
            }
        }  if(count>23){
            hidedec()
        }  
        if(count===84){ 
            hideSecondDec();

        }
        break;
      case 'ArrowLeft':
        if(currentPostion[0]>0){
            currentPostion[0] -=15;   
            positionOfChar();
            count-- 
            console.log(count);  
            myCharacter.style.backgroundImage="url('backward (2).gif')" 
            if(count <=21){
                showdec() 
                
            } 
            if(count>23){
                hidedec()
            } 
            if(count>3  && count<20){ 
                showDiv(); 
             
             if(count>21){
                hideDiv();
            }    
            if(count<25){
                hideSecondDec()
            }
           
        } if(count>3 && count <23 ){ 
            hideSecondDiv()
          
        } 
        if(count<83 && count >23){
             secondShowDiv()
         } 
         if(count< 104 && count >86){
            showThirdDiv()
         } 
         if(count<85 ){
            hideThirdDiv()
         }  
       
        if(count===83){ 
            showSecondDec()

        }  
          if(count<23){ 
            hideSecondDec()

        }  
         if(count===21){
            hideSecondDec()
         }
         if(count<83){
            hideSecondDec()
         }
            break;
        }
    }
} 
document.addEventListener("keydown",moveCharacter)