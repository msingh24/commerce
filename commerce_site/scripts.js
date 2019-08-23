$.getJSON(' https://young-refuge-33420.herokuapp.com/', function(data){
    console.log(data);


jQuery(document).ready(function($){
// ----------------------------------Product 1 index 0---------------------------------//
	$('.btn1').on({
     'click': function(){
         $('#change-image1').attr('src', btn1);
     }
 });
 
$('.btn2').on({
     'click': function(){
         $('#change-image1').attr('src', btn2);
     }
 });
 
$('.btn3').on({
     'click': function(){
         $('#change-image1').attr('src', btn3);
     }
 });


var btn1 =  data.products[0].images[0].src + ".png";
    $(".btn1").attr("src", btn1);

    var btn2 =  data.products[0].images[1].src + ".png";
    $(".btn2").attr("src", btn2);

    var btn3 =  data.products[0].images[2].src + ".png";
    $(".btn3").attr("src", btn3);



// ----------------------------------Product 2 index 1---------------------------------//
$('.btn4').on({
     'click': function(){
         $('#change-image2').attr('src', btn4);
     }
 });
 
$('.btn5').on({
     'click': function(){
         $('#change-image2').attr('src', btn5);
     }
 });
 
$('.btn6').on({
     'click': function(){
         $('#change-image2').attr('src', btn6);
     }
 });


var btn4 =  data.products[1].images[0].src + ".png";
    $(".btn4").attr("src", btn4);

    var btn5 =  data.products[1].images[1].src + ".png";
    $(".btn5").attr("src", btn5);

    var btn6 =  data.products[1].images[2].src + ".png";
    $(".btn6").attr("src", btn6);





// ----------------------------------Product 3 index 2---------------------------------//
$('.btn7').on({
     'click': function(){
         $('#change-image3').attr('src', btn7);
     }
 });
 
$('.btn8').on({
     'click': function(){
         $('#change-image3').attr('src', btn8);
     }
 });
 

 

    var btn7 =  data.products[2].images[0].src + ".png";
    $(".btn7").attr("src", btn7);

    var btn8 =  data.products[2].images[1].src + ".png";
    $(".btn8").attr("src", btn8);

    



// ----------------------------------Product 4 index 3---------------------------------//

$('.btn9').on({
     'click': function(){
         $('#change-image4').attr('src', btn9);
     }
 });
 
$('.btn10').on({
     'click': function(){
         $('#change-image4').attr('src', btn10);
     }
 });
 

    var btn9 =  data.products[3].images[0].src + ".png";
    $(".btn9").attr("src", btn9);

    var btn10 =  data.products[3].images[1].src + ".png";
    $(".btn10").attr("src", btn10);






// ----------------------------------Product 5 index 4---------------------------------//

$('.btn11').on({
     'click': function(){
         $('#change-image5').attr('src', btn11);
     }
 });
 
$('.btn12').on({
     'click': function(){
         $('#change-image5').attr('src', btn12);
     }
 });
 
$('.btn13').on({
     'click': function(){
         $('#change-image5').attr('src', btn13);
     }
 });


var btn11 =  data.products[4].images[0].src + ".png";
    $(".btn11").attr("src", btn11);

    var btn12 =  data.products[4].images[1].src + ".png";
    $(".btn12").attr("src", btn12);

    var btn13 =  data.products[4].images[2].src + ".png";
    $(".btn13").attr("src", btn13);







// ----------------------------------Product 6 index 5---------------------------------//


$('.btn14').on({
     'click': function(){
         $('#change-image6').attr('src', btn14);
     }
 });
 
$('.btn15').on({
     'click': function(){
         $('#change-image6').attr('src', btn15);
     }
 });
 

    var btn14 =  data.products[5].images[0].src + ".png";
    $(".btn14").attr("src", btn14);

    var btn15 =  data.products[5].images[1].src + ".png";
    $(".btn15").attr("src", btn15);






// ----------------------------------Product 7 index 6---------------------------------//

$('.btn16').on({
     'click': function(){
         $('#change-image7').attr('src', btn16);
     }
 });
 
$('.btn17').on({
     'click': function(){
         $('#change-image7').attr('src', btn17);
     }
 });
 
$('.btn18').on({
     'click': function(){
         $('#change-image7').attr('src', btn18);
     }
 });


var btn16 =  data.products[6].images[0].src + ".png";
    $(".btn16").attr("src", btn16);

    var btn17 =  data.products[6].images[1].src + ".png";
    $(".btn17").attr("src", btn17);

    var btn18 =  data.products[6].images[2].src + ".png";
    $(".btn18").attr("src", btn18);









// ----------------------------------Product 8 index 7---------------------------------//

$('.btn19').on({
     'click': function(){
         $('#change-image8').attr('src', btn19);
     }
 });
 
$('.btn20').on({
     'click': function(){
         $('#change-image8').attr('src', btn20);
     }
 });
 
$('.btn21').on({
     'click': function(){
         $('#change-image8').attr('src', btn21);
     }
 });


var btn19 =  data.products[7].images[0].src + ".png";
    $(".btn19").attr("src", btn19);

    var btn20 =  data.products[7].images[1].src + ".png";
    $(".btn20").attr("src", btn20);

    var btn21 =  data.products[7].images[2].src + ".png";
    $(".btn21").attr("src", btn21);



// ----------------------------------Product 9 index 8---------------------------------//

$('.btn22').on({
     'click': function(){
         $('#change-image9').attr('src', btn22);
     }
 });
 
$('.btn23').on({
     'click': function(){
         $('#change-image9').attr('src', btn23);
     }
 });
 
$('.btn24').on({
     'click': function(){
         $('#change-image9').attr('src', btn24);
     }
 });


var btn22 =  data.products[8].images[0].src + ".png";
    $(".btn22").attr("src", btn22);

    var btn23 =  data.products[8].images[1].src + ".png";
    $(".btn23").attr("src", btn23);

    var btn24 =  data.products[8].images[2].src + ".png";
    $(".btn24").attr("src", btn24);



// ----------------------------------Product 10 index 9---------------------------------//


$('.btn25').on({
     'click': function(){
         $('#change-image10').attr('src', btn25);
     }
 });
 
$('.btn26').on({
     'click': function(){
         $('#change-image10').attr('src', btn26);
     }
 });
 

    var btn25 =  data.products[9].images[0].src + ".png";
    $(".btn25").attr("src", btn25);

    var btn26 =  data.products[9].images[1].src + ".png";
    $(".btn26").attr("src", btn26);




// ----------------------------------Product 11 index 10---------------------------------//


$('.btn27').on({
     'click': function(){
         $('#change-image11').attr('src', btn27);
     }
 });
 
$('.btn28').on({
     'click': function(){
         $('#change-image11').attr('src', btn28);
     }
 });
 

    var btn27 =  data.products[10].images[0].src + ".png";
    $(".btn27").attr("src", btn27);

    var btn28 =  data.products[10].images[1].src + ".png";
    $(".btn28").attr("src", btn28);



// ----------------------------------Product 12 index 11---------------------------------//


$('.btn29').on({
     'click': function(){
         $('#change-image12').attr('src', btn29);
     }
 });
 
$('.btn30').on({
     'click': function(){
         $('#change-image12').attr('src', btn30);
     }
 });
 
$('.btn31').on({
     'click': function(){
         $('#change-image12').attr('src', btn31);
     }
 });


var btn29 =  data.products[11].images[0].src + ".png";
    $(".btn29").attr("src", btn29);

    var btn30 =  data.products[11].images[1].src + ".png";
    $(".btn30").attr("src", btn30);

    var btn31 =  data.products[11].images[2].src + ".png";
    $(".btn31").attr("src", btn31);




 });

 $('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
});


// 

    // var icon =  data.products[4].images[0].src + ".png";
    // $(".icon").attr("src", icon);

    // var red =  data.products[4].images[2].src + ".png";
    // $(".red").attr("src", red);

    // var yellow =  data.products[4].images[1].src + ".png";
    // $(".yellow").attr("src", yellow);

});
