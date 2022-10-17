
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){

            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500 ){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }





    });

    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0}) ;
    });



    //toggle menu/navbar script
    
    $('.menu-btn').click(function(){

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });




    // typing animation script 

    var typed= new Typed(".typing", { 
        strings: ["Software Developer","Coder","Web Developer","Game Developer"], 
        typeSpeed:100,
        backSpeed: 60,
        loop: true

    });
    var typed= new Typed(".typing-2", { 
        strings: ["Software Developer","Coder","Web Developer","Game Developer"], 
        typeSpeed:100,
        backSpeed: 60,
        loop: true

    });




    // owl carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }

    });


});


function Moreless(){                   //function read more
    var dots= document.getElementById("dots");
    var invisibleText= document.getElementById("invisible-text");
    var btnText=document.getElementById("btn");

    if(dots.style.display != "none"){
        dots.style.display="none";              //       first of all the dots are visible and data doesnt shown so we are hiding the dots first

        invisibleText.style.display="inline";   // show the invisible text after click 

        btnText.innerHTML="Read Less";    // changing btn text after clicking 
    }

    else{
        // in the else condition we will first show the dots then invisible the data and then change button text.

        dots.style.display="inline";
        invisibleText.style.display="none";

        btnText.innerHTML="Read More";
    }
}



// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "zaid84362@gmail.com",
//         Password : "Witcher3",
//         To : 'zaid84362@gmail.com',
//         From : document.getElementById("email").value, 
//         Subject : "new contact form",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
