var menuBtn=document.getElementById("menuBtn");
var sidenav=document.querySelector(".sidenav");


menuBtn.addEventListener('click',function(){
    var wid=sidenav.style.width;
   

    if(window.innerWidth<=767){//모바일

        if(wid===''||wid==='0px'){
            sidenav.style.width='200px';
        }else{
            sidenav.style.width='0px';

        }
        
    }else{//브라우저
        if(wid===''||wid==='200px'){
            sidenav.style.width='0px';
    
        } else{
            sidenav.style.width='200px';
        }
    }
});