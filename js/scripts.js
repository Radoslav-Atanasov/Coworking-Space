AOS.init(); //initialize AOS animation 

//changes the opacity and shrinks the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("headerId").style.padding = "5px 0px";
    document.getElementById("headerId").style.opacity = "0.9";
  } else {
    document.getElementById("headerId").style.padding = "10px 0px";
    document.getElementById("headerId").style.opacity = "1";
  }
}

//navResponsive
function navFunction() {
  var x = document.getElementById("headerRightID");
  if (x.className === "headerRight") {
    x.className += " responsive";
  } else {
    x.className = "headerRight";
  }
}

function hideLogo() {
	let x = document.getElementById("headerLeftID");
	if (x.className === "headerLeft") {
		x.className += " classHideLogo";
    $(".navLogo navDot").hide();
	} else {
		x.className = "headerLeft";
	}
}

//Parallax1
window.addEventListener('scroll', function(){
	const parallax = document.querySelector('.section2');
	let scrollPosition = window.pageYOffset;
	parallax.style.backgroundPosition = (0 + 'px' + ' ' + (-0.3) * scrollPosition + 'px');
});

//Slider section4

       var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      loopFillGroupWithBlank: true,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
    });

       //Parallax2
// window.addEventListener('scroll', function(){
// 	let topY = section8ID.offsetTop;;
// 	const parallax = document.querySelector('.section8');
// 	let scrollPosition = window.pageYOffset;
// 	parallax.style.backgroundPosition = (0 + 'px' + ' ' + ((topY/10) - (scrollPosition/10)) + 'px');
// });



window.addEventListener('scroll', function(){
  let topY = section8ID.offsetTop;;
  const parallax = document.querySelector('.section8');
  let scrollPosition = window.pageYOffset;
  let relScrollPosition = (topY-scrollPosition);
  parallax.style.backgroundPosition = (0 + 'px' + ' ' + (0.3) *relScrollPosition + 'px');
});

// google.maps

function initMap() {
  let location = {lat: 43.223884, lng: 27.935973};
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location
  });
  let marker = new google.maps.Marker ({
    position: location, 
    map: map
  });
}

/*----- Password Validation -----*/

  $("#inputPassword").keyup(function (inputtt) {
  let upCaseCount = 0;
  let loCaseCount = 0;
  let numCount = 0;
  let specSymbCount = 0;
  let otherSymbolsCount = 0;
  let minChar = 3;
  document.getElementById("passReq").style.display = "none";
  let userInput = document.getElementById("inputPassword").value;
  let inputt = [];
  inputt.push(userInput);
  let inputArr = inputt[0].split("");
  let specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+','-', '<', '>', '?', '_'];
    let inputArrLength = inputArr.length;
    for (i = 0; i < inputArrLength; i++) {
        if (Number.isInteger(inputArr[i] - 0) == true) { //if inputArr[0] == number in string, inputArr[i] - 0 returns the same number in the right type
            numCount++
        } else if ((inputArr[i] == inputArr[i].toUpperCase()) && (inputArr[i].toLowerCase() !== inputArr[i].toUpperCase())) {
            upCaseCount++
        } else if ((inputArr[i] == inputArr[i].toLowerCase()) && (inputArr[i].toLowerCase() !== inputArr[i].toUpperCase())) {
            loCaseCount++
        } else if (specialSymbols.includes(inputArr[i])) {
            specSymbCount++
        } else {
            otherSymbolsCount++
        }
    }
    function passValidation (upCaseCount, loCaseCount, numCount, specSymbCount) {
    let printUpCaseCount
    let printLoCaseCount
    let printNumCount
    let printspecSymbCount
    let isValidCount = 0;
    if (upCaseCount < minChar) {
        printUpCaseCount = ((minChar - upCaseCount) + " Uppercase characters ");
        isValidCount++;
    } else {
        printUpCaseCount = "";
    }
    if (loCaseCount < minChar) {
        printLoCaseCount = (minChar - loCaseCount + " Lowercase characters ");
        isValidCount++;
    } else {
        printLoCaseCount = "";
    } 
    if (numCount < minChar) {
        printNumCount = (minChar - numCount + " Number characters ");
        isValidCount++;
    } else {
        printNumCount = "";
    }
    if (specSymbCount < minChar) {
        printSpecSymbCount = (minChar - specSymbCount + " pecial symbols ");
        isValidCount++;
    } else {
        printSpecSymbCount = "";
    }
    if (isValidCount === 0) {
        document.getElementById("IdPassValid").innerHTML = ("Your password is Valid!");
        document.getElementById("IdPassValid").style.color = "green";
        document.getElementById("IdErrPass").style.display = "none";
        document.getElementById("IdPassValid").style.display = "block";
        document.getElementById("submitReg").removeAttribute("disabled");
        $("#inputPassword").removeClass("inputPassword-Error");
        $("#inputPassword").addClass("inputPassword-Valid");

    } else {
        document.getElementById("IdErrPass").innerHTML = ("Your must add " + printUpCaseCount + printLoCaseCount + printNumCount + printSpecSymbCount + " to your password!");
        document.getElementById("IdErrPass").style.color = "red";
        document.getElementById("IdPassValid").style.display = "none";
        document.getElementById("IdErrPass").style.display = "block";
        document.getElementById("submitReg").setAttribute("disabled", "");
        $("#inputPassword").addClass("inputPassword-Error");
        $("#inputPassword").removeClass("inputPassword-Valid");



    }
    // console.log(upCaseCount, loCaseCount, numCount, specSymbCount);
    upCaseCount = 0;
    loCaseCount = 0;
    numCount = 0;
    specSymbCount = 0;
    otherSymbolsCount = 0;
    isValidCount = 0;
}
passValidation (upCaseCount, loCaseCount, numCount, specSymbCount);

});

/*----- Password Validation ends -----*/


$("#modalLogin").on("click", function(){ //show the log in modal
  $('#exampleModal1').modal("toggle");
});
$("#toRegID").on("click", function(){ //hide the log in modal and show the reg modal
  $("#exampleModal1").modal("hide");
  $("#exampleModal2").modal("show");
});
$("#exampleModal1").on("hidden.bs.modal", function(){ //reset the log in form after closing
  $("#loginForm")[0].reset();
  $("#IdPassValid").hide();
  $("#passReq").show();
});
$("#exampleModal2").on("hidden.bs.modal", function(){ // reset the reg form after closing
  $("#regForm")[0].reset();
  $("#IdPassValid, #IdErrPass, #IdNotSamePass").hide();
  $("#passReq").show();
});

/*Set the input background color on focus*/

$("#inputPassword, #repeatInputPassword").keyup(function(){  
    let passValue = document.getElementById("inputPassword").value;;
    let repPassValue = document.getElementById("repeatInputPassword").value;  
    console.log(passValue);
    console.log(repPassValue);
    if (passValue !== repPassValue) {
      $("#repeatInputPassword").addClass("inputPassword-Error");
      $("#repeatInputPassword").removeClass("inputPassword-Valid");
      console.log(passValue);
    } else {
      $("#repeatInputPassword").addClass("inputPassword-Valid");
      $("#repeatInputPassword").removeClass("inputPassword-Error");
      console.log(repPassValue);
    }
 })

$("#submitReg").on("click", function(){
  let passValue = document.getElementById("inputPassword").value;;
  let repPassValue = document.getElementById("repeatInputPassword").value; 
  if (passValue !== repPassValue) {
    $("#IdNotSamePass").addClass("notSamePassClassShow");
    $("#IdNotSamePass").removeClass("notSamePassClass");
        console.log("ebasi");
  } else {
      $("#IdNotSamePass").addClass("notSamePassClass");
      $("#IdNotSamePass").removeClass("notSamePassClassShow");
  }
});

/*accordion*/

$(".accLabel").on("click", function() {
  if ($(this).next().hasClass('accShow')) {
   $(this).next().removeClass('accShow');
  }
  else
  {
   $(this).next().addClass('accShow');
  }
});