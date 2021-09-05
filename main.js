document.addEventListener('DOMContentLoaded', function() {

  
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    

    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  })

}
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

function imageChange(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  expandImg.src = imgs.src;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}


function userInputName() {
  var input = document.getElementById("userInputNameSection").value;
  var input2 = document.getElementById("userInputNameSection2").value;
  var message = document.getElementById("messageInputSection").value;
  document.getElementById("nameInput").innerHTML = input;
  document.getElementById("nameInput2").innerHTML = input2;
  document.getElementById("messageInput").innerHTML = message;
  document.getElementById("initalsDesign").innerHTML = input.slice(0,1) + input2.slice(0,1);
}

function fontChange1() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.fontFamily = "Allison,sans-serif");
}
function fontChange2() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.fontFamily =  "Damion,cursive");
}
function fontChange3() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.fontFamily =  "Dancing Script,cursive");
}
function fontChange4() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.fontFamily =  "Fuggles,cursive");
}
function fontChange5() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.fontFamily =  "Gloria Hallelujah,cursive");
}
function fontChange6() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.fontFamily =  "Lovers Quarrel,cursive");
}
function fontChange7() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.fontFamily =  "Pacifico,cursive");
}
function fontChange8() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.fontFamily =  "Petit Formal Script,cursive");
}

function colourChange1() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.color = "white");
}
function colourChange2() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.color = "black");
}
function colourChange3() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.color = "green");
}
function colourChange4() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.color = "blue");
}
function colourChange5() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.color = "pink");
}
function colourChange6() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.color = "purple");
}
function colourChange7() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.color = "grey");
}
function colourChange8() {
  document.querySelectorAll(".invitation").forEach(invitation => invitation.style.color = "orange");
}