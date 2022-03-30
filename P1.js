function setup() {
  $("#keyboard").hide();
  $("#words1").hide();
  $("#words2").hide();
  $("#words3").hide();

  $("#eb1").val("off");

  $("#eb2").val("off");

  $("#eb3").val("off");

  for (var i = 0; i < x.length; i++) {
    x[i].innerText = x[i].innerText.toLowerCase();
  }

}



function editBlog1() {
  if ($("#eb1").val() == "off") {
    $("#wrapper").hide();
    $("#keyboard").show();
    $("#words1").show();
    $("#eb1").val("on");
    act = "words1";
  }
  else {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#words1").hide();
    $("#eb1").val("off");
    $("#words").val("");
  }
}

function editBlog2() {
  if ($("#eb2").val() == "off") {
    $("#wrapper").hide();
    $("#keyboard").show();
    $("#words2").show();
    $("#eb2").val("on");
    act = "words2";
  }
  else {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#words2").hide();
    $("#eb2").val("off");
    $("#words").val("");
  }
}

function editBlog3() {
  if ($("#eb3").val() == "off") {
    $("#wrapper").hide();
    $("#keyboard").show();
    $("#words3").show();
    $("#eb3").val("on");
    act = "words3";
  }
  else {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#words3").hide();
    $("#eb3").val("off");
    $("#words").val("");
  }
}

// end of toggle functionality-----------------------------------------------------------------------------------

let cap = false;
function addChar(selection) {
  // Get the value from the id field
  var currChars = $("#" + act).val();

  if (selection === "bksp") {
    // Remove one char
    $("#" + act).val(currChars.substring(0, currChars.length - 1));
  } else {
    if (cap === true) {
      // Place one upper case char
      $("#" + act).val(currChars.concat(selection.toUpperCase()));
      caps();
    } else {
      // Place one lower case char
      $("#" + act).val(currChars.concat(selection));
      if (selection == ".") {
        console.log("end of sentence!");
        $("#" + act).val(currChars.concat(". "));
        cap = false;
        caps();
      }
    }

  }
}

// New line break
function enter() {
  var currChars = $("#" + act).val();
  $("#" + act).val(currChars.concat("\n"));
}

// Toggle caps lock
let x = document.getElementsByClassName("ltr");

function caps() {
  console.log(x.length);
  if (cap == false) {
    console.log("cap is true!");
    cap = true;
    for (var i = 0; i < x.length; i++) {
      x[i].innerText = x[i].innerText.toUpperCase();
    }
  } else {
    cap = false;
    for (var i = 0; i < x.length; i++) {
      x[i].innerText = x[i].innerText.toLowerCase();
    }
  }
}


function saveTitle() {
  if ($("#eb1").val() == "on") {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#words1").hide();
    $("#eb1").val("off");
    $("#words").val("");
    $("#eb1_1").prop("checked", false);
  }
  if ($("#eb2").val() == "on") {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#words2").hide();
    $("#eb2").val("off");
    $("#words").val("");
    $("#eb2_1").prop("checked", false);
  }
  if ($("#eb3").val() == "on") {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#words3").hide();
    $("#eb3").val("off");
    $("#words").val("");
    $("#eb3_1").prop("checked", false);
  }
}

// The last text box clicked becomes the "active" textbox. 
// This means when the keyboard is typed, values will appear in the active textbox.
let act;
function active() {
  act = document.activeElement.id;
  console.log("active element is now: " + act);
}

// JS for word bank -----------------------------------------------------------------------------------------------------
var arr = [];

function saveWord() {
  console.log("attempt to save word");
  var userInput = document.getElementById("words1").value;
  /*var userInput = document.getElementById("words2").value;
  var userInput = document.getElementById("words3").value;*/
  var n = userInput.split(" ");
  var lastWord = n[n.length - 1];
  console.log(lastWord);
  arr.push(lastWord);
  console.log(arr);
  arrayButton(lastWord);
}

function savePhrase() {
  console.log("attempt to save phrase");
  var userInput = document.getElementById("words1").value;
  var n = userInput.split(". ");
  var lastPhrase = n[n.length - 1];
  console.log(lastPhrase);
  arr.push(lastPhrase);
  console.log(arr);
  arrayButton(lastPhrase);
}

function undo() {
  console.log("attempt to undo");
  var userInput = document.getElementById("words1").value;
  let indexWithoutLastWord = userInput.lastIndexOf(" ");
  var newText = userInput.substring(0, indexWithoutLastWord);
  console.log(newText);
  document.getElementById("words1").value = newText;
}

function deleteItem() {
  console.log("attempt to delete item from word bank");
  console.log(arr);
  var wordBank = document.getElementById("wordBank");
  wordBank.removeChild(wordBank.lastChild)
}

function arrayButton(buttonName) {
  var button = document.createElement("input");
  button.type = "button";
  button.value = buttonName;
  button.addEventListener("click",function(){
    document.getElementById("words1").value += (" " + buttonName);
  })
  var wordBank = document.getElementById("wordBank");
  wordBank.appendChild(button);
}


