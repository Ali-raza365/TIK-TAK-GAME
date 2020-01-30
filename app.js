
let sign="o"
let ply =document.getElementById("player")

function tiktak(number){

    let val=document.getElementById("b"+number); 
    // nobox();
    
    if(val.innerText==""){
        checksign();
        val.innerText=sign;
        winner();
        chageplayer();
    }
} 
  // function for change sigin
function checksign(){

    if(sign=="o"){

        sign="x";
    }else{ 
        sign="o";
        
    }
}

// for change player turn----

function chageplayer(){
    if(sign=="x"){
        ply.innerHTML= "O player turn"
    }
    else{
        ply.innerHTML= "X player turn"
    }
}

    // for get box number
function getbox(no){
    return document.getElementById("b"+no).innerHTML;
}



function checkmove(a,b,c,m){

    if(getbox(a)==m && getbox(b)==m && getbox(c)==m){
    return true;
    }else return false;


}
function winner(){


    if (checkmove(1,4,7,sign)||checkmove(2,5,8,sign) || checkmove(3,6,9,sign) ||
        checkmove(1,2,3,sign)||checkmove(4,5,6,sign) || checkmove(7,8,9,sign) ||
        checkmove(1,5,9,sign)||checkmove(3,5,7,sign) ){
        
    alert(sign +"  IS WINNER");
    location.reload();


    }else{
        if(getbox(1)!==""&& getbox(2)!==""&& getbox(3)!==""&& 
        getbox(4)!==""&& getbox(5)!==""&& getbox(6)!==""&&
        getbox(7)!==""&& getbox(8)!==""&& getbox(9)!==""){

            alert("game over");
            location.reload();

        }
    }
        

}

// function nobox(){

//     for(let i=0 ;i<9; i++){

//         if(getbox(i) !==""){

//             alert("game over")
//         }

//     }
// }