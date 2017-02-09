console.log('Loaded!');
 
            var a=document.getElementById('ash');
           function moveright()
           {
             leftinterval=leftinterval+10;  
             img.style.marginLeft=marginLeft+'px';
           }
           a.onclick=function (){
           var interval=setInterval(moveright,50);
           };
        