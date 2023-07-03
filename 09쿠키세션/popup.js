
var check=document.getElementById('check');


check.onclick=function(){
    if(check.checked==true){
        var date=new Date();
        date.setDate(date.getDate()+1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        document.cookie="check1=check; expires="+date.toUTCString()+"; path=/";
        close();
    }


}



//쿠키 확인
function getCookie(a){
    var cookie=document.cookie.split('; ');

    if(cookie.length!=0){

        for(var i = 0; i<cookie.length;i++){
            
            if(cookie[i].indexOf(a+"=")!=-1){
                return true;
            }
        }
    }
}