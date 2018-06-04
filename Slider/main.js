var images = [
    { "src": "img1.jpg", "alt": "Nature" },
    { "src": "img2.jpg", "alt": "Fjords" }, 
    { "src": "img3.jpg", "alt": "Mountains" },
    { "src": "img4.jpg", "alt": "Lights" }
];

 for(var i = 0; i < images.length; i++){
     console.log(images[i].alt);
     console.log(images[i].src);
 }

 
var x = 0;
function showImage(y){
    var a = document.getElementById("slide");
    console.log(a);
    a.src = "img/" + images[y].src;
    a.alt = images[y].alt;
   
    if(y === images.length-1){
        document.getElementById("inainte").style.display = "none";
        y = 0;
    }else if(y === -1){
    document.getElementById("inapoi").style.display = "none";
    y = images.length -1;
    }

    y = x;
}


window.addEventListener("onload",showImage(1));

document.getElementById("inainte").addEventListener("click", function(){
    
    showImage(++x);
});
document.getElementById("inapoi").addEventListener("click", function(){

    showImage(--x);
});
