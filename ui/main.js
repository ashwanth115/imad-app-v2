console.log('Loaded!');
 
            var a=document.getElementById('ash');
           function moveright()
           {
             leftinterval=leftinterval+10;  
             img.style.marginLeft=marginleft+'px';
           }
           var interval=setInterval(moveright,50);
            a.onclick=function ()
            {
              a.style.marginLeft='100px';  
            };
        