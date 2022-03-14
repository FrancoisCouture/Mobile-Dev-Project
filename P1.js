// toggle functionality----------------------------------------------------
const HIDDEN = "hidden";
let toggle = false;
var blog1edit = document.getElementById("editBlog1");

function setup() {
  $("#keyboard").hide();

  $("#eb1").val("off");

  $("#eb2").val("off");

  $("#eb3").val("off");
 

  // $("#editBlog1").on("click", function(){
  //   $("#editBlog2").hide();
  //   $("#editBlog3").hide();
  //   $("#keyboard").show();
  //   var t = $("#1").val();
  //   console.log(t);
  // })
  // $("#editBlog2").on("click", function(){
  //   $("#editBlog1").hide();
  //   $("#editBlog3").hide();
  //   $("#keyboard").show();
  // })
  // $("#editBlog3").on("click", function(){
  //   $("#editBlog2").hide();
  //   $("#editBlog1").hide();
  //   $("#keyboard").show();
  // })
}

function editBlog1() {
  if ($("#eb1").val() == "off"){
    $("#editBlog2").hide();
    $("#editBlog3").hide();
    $("#keyboard").show();
    $("#eb1").val("on");
  }
  else {
    $("#editBlog2").show();
    $("#editBlog3").show();
    $("#keyboard").hide();
    $("#eb1").val("off");
  }

}

function editBlog2() {
  if ($("#eb2").val() == "off"){
    $("#editBlog1").hide();
    $("#editBlog3").hide();
    $("#keyboard").show();
    $("#eb2").val("on");
  }
  else {
    $("#editBlog1").show();
    $("#editBlog3").show();
    $("#keyboard").hide();
    $("#eb2").val("off");
  }
}

function editBlog3() {
  if ($("#eb3").val() == "off"){
    $("#editBlog2").hide();
    $("#editBlog1").hide();
    $("#keyboard").show();
    $("#eb3").val("on");
  }
  else {
    $("#editBlog2").show();
    $("#editBlog1").show();
    $("#keyboard").hide();
    $("#eb3").val("off");
  }
}

// end of toggle functionality-------------------------------------------

let cap = false;
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
  currChars = $("#words").val();
  if ($("#eb1").val() == "on"){
	  $("#blogOne").val(currChars);
  }
  if ($("#eb2").val() == "on"){
	  $("#blogTwo").val(currChars);
  }
  if ($("#eb3").val() == "on"){
	  $("#blogThree").val(currChars);
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

function saveTitle(){
  //var content = $("#words").val();
	
}