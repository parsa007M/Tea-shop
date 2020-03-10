/* JQUERY */

// $() : Selector
// Ready : we do this prevent any jquery code from running before the document is finished loading !
// 1st way :long Syntax 
//$(documnet).ready(function())

 //$(document).ready(function(){


/*  1- BASIC SELECTOR */

 // Sinle style definition :
// $('*').css('border','4px solide red');


 // Multiole style definition
 //$("p").css({"background-color":"yellow","border":"4px solid red"});



 //select calass name 
 // $("p.lead").css({"background-color":"yellow","border":"4px solid red"});


 // Select ID 
 // $("#barca").css({"background-color":"yellow","border":"4px solid red"});

//BASIC ANIMATION
//$('.box:first').hide(1000).delay(1500).show(2000);
//$('.box:secound').hide(1000).delay(1500).show(2000);

//$('.box:nth-child(2n)').slideUp(1000).slideDown(1500);
//$('.box:nth-child(2n)').fadeOut(1000).fadeIn(1500);

//$(".card:nth-child(3n)").slideUp(1000).slideDown(1500);

// anitmation method:
//$('.box:first').animate({height:'200px'},1000);
 //$('.box:first').animate({bottom:'200px',left:'200px'},5000);

 /* INDEX FILTERS */

 //$('p').css('border','4px solid red');

 //lt :less than 2
 // $('p:lt(2)').css('border','4px solid red');

 //eq ;equle 2
 //$('p:eq(2)').css('border','4px solid red');


 //$('box:first').hide(1000).delay(1500).show(2000);
 //$('box:last').hide(1000).delay(1500).show(2000);


/* RELATIONSHIP FILTES */
//$('h2:has(span)').css('border','4px solid red');

//Select the parent means if they have chldern
// $('.box:parent').css('border','4px solide red);

/* if there is on contet (empty) */

//$('.box:empty').css('border','4px solid red');

//ATTRIBUTE FILTER
  //this is much more powerful

  //select p tags with class
  //$('p[class="lead"]').css('border','4px solid red');

 //select p tags with name
   //$('p[class="shorty"]').css('border','4px solid red');

 //^:means select p tags name atterbutes stat "sho" letters
 // $('p[name^="sho"]').css('border','4px solid red')


   //$('p[name^="sho"]').css('border','4px solid red'),
  //$('a[href$=".de"]').css('border','4px solid red');
 //});


 $(function(){
// ATTR METHOD 
// alert the firts p tag class name 
//alert($('p:first').attr('class'));// output : lead

// change the first p tag calss name
//$('p:first').attr('class','not-lead');

//IMAGE SWAP

//change your img with diffrent one 

//$('img[name="img1"]').attr('src','./Assets/bayern.png')

//1- fadeout 2-change the source 3-fadeIn
//$('img[name="img1"]').fadeOut(1000,function(){
  //  $(this).attr('src','./Assets/bayern.png').fadeIn(1500);
//});


$('img[name="img1"]').delay(1500).fadeOut(1000,function(){
    $(this).attr('src','./Assets/bayern.png').fadeIn(1500);
})



//class MEthods

//alert($('p:last').hasClass('lead')); //Return : false
//alert($('p:first').hasClass('lead')); //Return : true


// REMOVE the class lead and add blue
// $('p:first').removeClass('lead').addClass('blue); 


/* CONTENT METHODS */

//if you want to change inside the contant , use TEXT method
//$('p:first').text('Haloo FBW10.Are you there?');
//$('p:first').text('Haloo FBW10.Are you there? <em>Yes , i am here !</em>');

// if you want to add some html tags inside the content , use HTML method
//$('p:first').html('Haloo FBW10.Are you there? <em>Yes , i am here !</em>');
//$('p:first').html('Haloo FBW10.Are you there? <h2>Yes , i am here !</h2>');
//$('p:first').html('<a href="httpe://www.google.com">GOOGLE</a>');


//alert($('input').val()); // output :FC Barcelona
// $('input').val('My new value is here !');



/* DOM TRAVERSAL */
//select all children of h2
//$('h2').children().css('border','4px solid red'); // child is span

//grab all of the parents of h2
 //$('h2').parents().css('border','4px solid red');
//$('h2').parents('section').css('border','4px solid red');

//grab siblings of h2
//$('h2').siblings().css('border','4px solid red');
//$('h2').siblings('p:first').css('border','4px solid red');

// grab 1st p tag siblings of h2
/* 1st was  */
// $('h2').siblings('p:first').css('border','4px solid red');

/* 2nd way */
// $('h2').siblings('p:first').css('border','4px solid red');

// $('h2').siblings('p:last').css('border','4px solid red');


//$('h2').parents('section').siblings('header').childern().css('border','4px solid red');



//EVENTS BINDING

// clicks , hover... etc all of these methods called bind:

// 1st way :

/* $('h2').bind('click',function(){
    $(this).toggleClass('blue')
});
 */

//2nd way : short Syntax
/* $('h2').click(function(){

    $(this).toggleClass('blue')

}); */


/* $('h2').hover(function(){

    $(this).toggleClass('blue')
});
 */



// when you press any key . switch the class of html element . turning everything to blue 

//$(document).ready(function(){


/* $("html").keypress(function(){
    $("input").toggleClass('blue')
});

});
 */

});