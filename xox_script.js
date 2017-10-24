/*var e;
function init(){
    
   var x = document.querySelectorAll('[id="1"],[id="2"],[id="3"],[id="4"],[id="5"],[id="6"],[id="7"],[id="7"],[id="8"],[id="9"]');
    //console.log(x.length);
    for (i = 0; i < x.length; i++) {
        
        //x[i].style.visibility = "hidden";
        var strFun = 'Game_Play'+(i+1);
        //console.log(strFun);
        if (i ==0){
            console.log("event list")
            x[i].addEventListener('click', Game_Play());
           //  document.querySelector('[id="1"]').addEventListener('click', Game_Play1);
        }
    }
    
    Activeplayer=1;
    
    
}

init()



var Activeplayer;


function Game_Play1(e){
    console.log("Game_Play1s");
    //console.log(e.id);
    var ele = document.querySelector('[id="1"]');
    ele.style.visibility = "visible";
    ele.src = "X.jpeg";
}

function Game_Play(){
    img_id = getImageID;
    console.log("Id : " + img_id);
    
    
    
}
*/

var Activeplayer=1;
var blnChangePlayer = true;
var Values = ["AA", "BB", "CC","DD", "EE", "FF", "GG", "HH", "II"];
var blnWinner=false;

var Game_Play = function() {
  document.onclick = function(e) {
      
    if (blnWinner == false){
    if (e.target.tagName == 'IMG') {
      var img_id = e.target.getAttribute("id");
      //alert(img_id);
      var img_src = e.target.getAttribute("src")
      //alert(img_src);
      Change_Image(e,img_src,img_id);
      
      Check_Winner(); 
        
      Winner_Display();    
        
      }
      
      Player_Change();
    }
  }
  

  
}

function Player_Change(){
    if(blnChangePlayer){
        if (Activeplayer ==1 ){
            Activeplayer =0;
        }
        else if (Activeplayer ==0){
            Activeplayer =1;
        }
    }
    blnChangePlayer=false;
    //console.log("Activeplayer : " + Activeplayer);
    
}

function Change_Image(ele,ele_src,ele_ID){
    
    if (ele_src.includes('Blank')){
        if (Activeplayer == 1){
            ele.target.src = "X.jpg"
            Values[ele_ID-1]= "X"
            blnChangePlayer = true;
        }
        else if (Activeplayer == 0){
             ele.target.src = "O.jpg" 
            blnChangePlayer= true;
            Values[ele_ID-1]= "O"
        }
                 
    }
    else{
    
        console.log('Else Part')
        
    }
        
    
    
}



function Check_Winner(){
    
    blnWinner = false;
    //Horizontal check
    for (var i = 0; i< Values.length; i ++){
     
        if (Values[i] == Values[i+1]) {
            if (Values[i+1] == Values[i+2]){
                blnWinner = true  ;                      
            }
        }
        
        if (blnWinner){
            return;                              
        }
        
        i = i+2;
    }
    // vertical check
    var j = 3;
    var k = 6;
    for (var i = 0; i< 3; i ++){
    
        if (Values[i] == Values[j]){
            if (Values[j] == Values[k]){
                blnWinner = true  ;                      
            }
        }
        
        if (blnWinner){
            return;                              
        }
        j++;
        k++;
    }
    
    //Diagnal check 
    
       
    if (Values[0] == Values[4]){
        if (Values[4] == Values[8]){
            blnWinner = true  ;                      
        }
    }

    if (blnWinner){
        return;                              
    }

    if (Values[2] == Values[4]){
        if (Values[4] == Values[6]){
            blnWinner = true  ;                      
        }
    }

    if (blnWinner){
        return;                              
    }
    
    
    
    
}


function  Winner_Display(){
    
    if (blnWinner){
        
        alert('Winner is '+Activeplayer);
        
        
        
    }
    
    
    
}





Game_Play();

