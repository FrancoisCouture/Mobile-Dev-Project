let cap = false;

function setup() {
  document.getElementById("keyboard").style.display = "hidden";
}

function addChar(selection) {
  // Get the value from the id'ed field
  var currChars = $("#words").val();

  if (selection === "bksp") {
    // Set the id'ed field to a shortened string
    $("#words").val(currChars.substring(0, currChars.length - 1));
  } else {
    // Set the id'ed field to the longer string
    if (cap === true) {
      $("#words").val(currChars.concat(selection.toUpperCase()));
      document.getElementById("Caps").innerHTML = "Caps Off!";
      cap = false;
    } else {
      $("#words").val(currChars.concat(selection));
    }
  }
}

function enter() {
  var content = $("#words").val();
  console.log(content);
  $("#words").val("");
}

function caps() {
  document.getElementById("Caps").innerHTML = "Caps On!";
  cap = true;
}
