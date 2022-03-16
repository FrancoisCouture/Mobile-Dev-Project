function setup() {
  $("#keyboard").hide();
  $("#words1").hide();
  $("#words2").hide();
  $("#words3").hide();

  $("#eb1").val("off");

  $("#eb2").val("off");

  $("#eb3").val("off");

}

function editBlog1() {
  if ($("#eb1").val() == "off"){
    $("#editBlog2").hide();
    $("#editBlog3").hide();
    $("#keyboard").show();
    $("#words1").show();
    $("#eb1").val("on");
    act ="words1";
  }
  else {
    $("#editBlog2").show();
    $("#editBlog3").show();
    $("#keyboard").hide();
    $("#words1").hide();
    $("#eb1").val("off");
	  $("#words").val("");
  }

}

function editBlog2() {
  if ($("#eb2").val() == "off"){
    $("#editBlog1").hide();
    $("#editBlog3").hide();
    $("#keyboard").show();
    $("#words2").show();
    $("#eb2").val("on");
    act ="words2";
  }
  else {
    $("#editBlog1").show();
    $("#editBlog3").show();
    $("#keyboard").hide();$
    ("#words2").hide();
    $("#eb2").val("off");
	  $("#words").val("");
  }
}

function editBlog3() {
  if ($("#eb3").val() == "off"){
    $("#editBlog2").hide();
    $("#editBlog1").hide();
    $("#keyboard").show();
    $("#words3").show();
    $("#eb3").val("on");
    act ="words3";
  }
  else {
    $("#editBlog2").show();
    $("#editBlog1").show();
    $("#keyboard").hide();
    $("#words3").hide();
    $("#eb3").val("off");
	  $("#words").val("");
  }
}

// end of toggle functionality-------------------------------------------

let cap = false;
function addChar(selection) {
  // Get the value from the id field
  var currChars = $("#"+ act).val();

  if (selection === "bksp") {
    // Remove one char
    $("#"+ act).val(currChars.substring(0, currChars.length - 1));
  } else {
    if (cap === true) {
      // Place one upper case char
      $("#"+ act).val(currChars.concat(selection.toUpperCase()));
    } else {
      // Place one lower case char
      $("#"+ act).val(currChars.concat(selection));
    }
    
  }
}

// New line break
function enter() {
  var currChars = $("#"+ act).val();
  $("#"+ act).val(currChars.concat("\n"));
}

// Toggle caps lock
function caps() {
  if(cap == false){ 
    console.log("cap is true!");
    cap = true;
  } else {
    cap = false;
  }
}

function saveTitle(){
	
}

// The last text box clicked becomes the "active" textbox. 
// This means when the keyboard is typed, values will appear in the active textbox.
let act;
function active(){
  act = document.activeElement.id;
  console.log("active element is now: "+ act);
}
