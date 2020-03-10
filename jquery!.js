 
    $(function(){
        $(".teapot").click(function(){
            $(this).toggleClass('teapot-rotate');
        });


      
        $(".tea-desc").mouseover(function() {
            let myArray = [
              "Beatiful rich flavour",
              "Great for a cold day",
              "Smoothing and tasty"
            ];
            $(this).text(myArray[Math.floor(Math.random() * myArray.length)]);
          });
        });
     
 