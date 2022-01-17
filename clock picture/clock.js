function clock () {
    var hours  = document.getElementById("hourss")
    var minutes = document.getElementById("minss")
    var secounds = document.getElementById("secss")
    var am = document.getElementById("am")
    var time = new Date()
    
    var a =  time.getHours()
    a = ((a+11)%12+1)
    if (time.getHours()<12) {
        am.innerHTML="AM"
        
    }
    
    var b =  time.getMinutes()
    
     
    var c = time.getSeconds()
    // var s = time.getHours
    if (a<10) {
        a = "0" + a
    }
    if (b<10) {
        b = "0" + b
    }
    if (c<10) {
        c = "0" + c
    }    
    hours.innerHTML=a 
    hours.style.height = "60px"
    minutes.innerHTML=b
    minutes.style.height = "60px"
    secounds.innerHTML=c
    secounds.style.height = "60px"

   


    

} setInterval(clock , 1000) 




function dynamicdiv () {

    var divv = document.createElement("div")
    divv.setAttribute("class","child")
    var divv1 = document.getElementById("parent")
    divv1.appendChild(divv)

    var insideValue1 = document.getElementById("wakeupselecter");
        var invalue1 = insideValue1.options[insideValue1.selectedIndex].text;
        var insideValue2 = document.getElementById("lunchselecter");
        var invalue2 = insideValue2.options[insideValue2.selectedIndex].text;
        var insideValue3 = document.getElementById("navselecter");
        var invalue3 = insideValue3.options[insideValue3.selectedIndex].text;
        
        divv.innerText = " WAKE UP TIME   " + invalue1 + " , " + " LUNCH TIME " + invalue2 + " ,  " + "  SLEEP TIME  " + invalue3 



}


function  settime() {
   var v =  document.getElementById("wakeupselecter").value
    var z = new Date().getHours()
    var y = document.getElementById("lunchselecter").value
    var w = document.getElementById("navselecter").value
    var j = document.getElementById("goodafter")

    if(z ==v )  {
        document.getElementById("imagecontainer").style.backgroundImage="url(./wake.png)"
        document.getElementById("imagecontainer").innerText="I'TS TIME TO WAKE UP!!"
       
        
        
        

    } 
    else if (z==y) {
        document.getElementById("imagecontainer").style.backgroundImage="url(./lunchmain.png)"
        document.getElementById("imagecontainer").innerText="LETS HAVE SOME LUNCH!!"

    } 
    else if (z==w) { 
        document.getElementById("imagecontainer").style.backgroundImage="url(./sleepmain.png)"
        document.getElementById("imagecontainer").innerText="GOOD NIGHT!!"


        
    }
    else if (z>=13&&z<=16) {
        j.innerHTML="GOOD AFTERNOON!!"

    }
    else if (z>16&&z<=23) {
        j.innerHTML = "GOOD EVENING !!"


    }
    else if (z>=01&&z<12) {
        j.innerHTML="GOOD MORNING!!"

    }


    dynamicdiv ()
   
} 




// dynamicdiv()













