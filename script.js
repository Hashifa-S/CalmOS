 function updateTime(){
        var ippoTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = ippoTime;

        }
        setInterval(updateTime, 1000);
// Make the DIV element draggable
dragElement(document.getElementById("welcome"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  // if present, the header is where you move the DIV from:
  var header = elmnt.querySelector(".windowheader");
  if (header) {
    header.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    
    // fix the position of the element to avoid jumping when dragging starts
    elmnt.style.transform = "none";
    
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var welcomeScreen = document.querySelector("#welcome")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "flex"
}
var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});
welcomeScreenClose.addEventListener("click", function(e) {
    e.stopPropagation(); // Prevents the drag script from hijacking the click
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function(e) {
    e.stopPropagation(); 
    openWindow(welcomeScreen);
});
// Grab elements safely
var welcomeScreen = document.getElementById("welcome");
var welcomeScreenClose = document.getElementById("welcomeclose");
var welcomeScreenOpen = document.getElementById("welcomeopen");

// Simple functions to show/hide
function closeWindow() {
    if (welcomeScreen) welcomeScreen.style.display = "none";
}

function openWindow() {
    if (welcomeScreen) welcomeScreen.style.display = "block"; 
}

// Attach the events safely
if (welcomeScreenClose) {
    welcomeScreenClose.addEventListener("click", closeWindow);
}

if (welcomeScreenOpen) {
    welcomeScreenOpen.addEventListener("click", openWindow);
}
var selectedIcon = undefined
// notes app elements
var notesWindow = document.getElementById("notesWindow");
var notesTaskbarIcon = document.getElementById("notesTaskbarIcon");
var notesClose = document.getElementById("notesclose");
var notesTextarea = document.getElementById("notesTextarea");

// open the notes app
notesTaskbarIcon.addEventListener("click", function() {
  notesWindow.style.display = "block";
  bringToFront(notesWindow);
});

// close the notes app
notesClose.addEventListener("click", function(e) {
  e.stopPropagation();
  notesWindow.style.display = "none";
});

// bring window to front when clicked
notesWindow.addEventListener("mousedown", function() {
  bringToFront(notesWindow);
});

var biggestIndex = 10;
function bringToFront(element) {
  biggestIndex = biggestIndex + 1;
  element.style.zIndex = biggestIndex;
}

// make the notes window draggable
dragElement(notesWindow);

var calcWindow= document.getElementById("calcWindow");
var calcTaskbarIcon= document.getElementById("calcTaskbarIcon");
var calcClose= document.getElementById("calcclose");
var calcButtons= document.querySelectorAll(".calcButton");
var calcEquals= document.getElementById("calcEquals");
var calcClear= document.getElementById("calcClear");

calcTaskbarIcon.addEventListener("click", function() {
  calcWindow.style.display = "flex";
  bringToFront(calcWindow);
})

calcClose.addEventListener("click", function(e) {
  e.stopPropagation();
  calcWindow.style.display = "none";
})

calcWindow.addEventListener("mousedown", function() {
  bringToFront(calcWindow);
})

dragElement(calcWindow);

for (var i = 0; i < calcButtons.length; i++) {
  calcButtons[i].addEventListener("click", function() {
    calcScreen.value = calcScreen.value + this.getAttribute("data-value");
  })
}

calcEquals.addEventListener("click", function() {
  calcScreen.value = eval(calcScreen.value);
})

calcClear.addEventListener("click", function() {
  calcScreen.value = "";
})

var calcWindow = document.getElementById("calcWindow");
var calcTaskbarIcon = document.getElementById("calcTaskbarIcon"); // <-- FIXED THIS LINE
var calcClose = document.getElementById("calcclose");

calcTaskbarIcon.addEventListener("click", function() {
  calcWindow.style.display = "flex";
  bringToFront(calcWindow);
});

// Close the calculator
calcClose.addEventListener("click", function(e) {
  e.stopPropagation();
  calcWindow.style.display = "none";
});

// Bring to front on click
calcWindow.addEventListener("mousedown", function() {
  bringToFront(calcWindow);
});

// Make it draggable
dragElement(calcWindow);
