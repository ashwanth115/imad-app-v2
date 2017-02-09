console.log('Loaded!');
 
            var a=document.getElementById('ash');
          var marginLeft=0;
           function moveright()
           {
             leftinterval=leftinterval+10;  
             a.style.marginLeft=marginLeft + 'px';
           }
           a.onclick=function (){
           var interval=setInterval(moveright,50);
           };
        