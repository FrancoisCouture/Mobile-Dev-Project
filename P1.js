function setup() {
  $("#keyboard").hide();
  $("#blog1").hide();
  $("#blog2").hide();
  $("#blog3").hide();

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
    $("#blog1").show();
    $("#eb1").val("on");
    act = "blog1";
    sAct = "blog1";
  }
  else {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#blog1").hide();
    $("#eb1").val("off");
    $("#words").val("");
  }
}

function editBlog2() {
  if ($("#eb2").val() == "off") {
    $("#wrapper").hide();
    $("#keyboard").show();
    $("#blog2").show();
    $("#eb2").val("on");
    act = "blog2";
    sAct = "blog2";
  }
  else {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#blog2").hide();
    $("#eb2").val("off");
    $("#words").val("");
  }
}

function editBlog3() {
  if ($("#eb3").val() == "off") {
    $("#wrapper").hide();
    $("#keyboard").show();
    $("#blog3").show();
    $("#eb3").val("on");
    act = "blog3";
    Sact = "blog3";
  }
  else {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#blog3").hide();
    $("#eb3").val("off");
    $("#words").val("");
  }
}

// end of toggle functionality-----------------------------------------------------------------------------------

let cap = false;
function addChar(selection) {
  // Get the value from the id field
  var currChars = $("#"+ act).val();
  const special = {'1':'@',
                  '2':'!',
                  '3':'$',
                  '4':'%',
                  '5':'&',
                  '6':'(' ,
                  '7':')',
                  '8':';',
                  '9':':',
                  '0':"'"};
    console.log(selection in special);

  if (selection === "bksp") {
    // Remove one char
    $("#" + act).val(currChars.substring(0, currChars.length - 1));
  } else {
    if (cap === true) {
       if (selection in special) {
        $("#"+ act).val(currChars.concat(special[selection]));
        caps();
       } else {
         // Place one upper case char
      $("#"+ act).val(currChars.concat(selection.toUpperCase()));
      
      caps();
    }
    } else {
      // Place one lower case char
      $("#" + act).val(currChars.concat(selection));
      if (selection == ".") {
        console.log("end of sentence!");
        $("#"+ act).val(currChars.concat(". "));

        
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
    for(var i = 0; i < x.length; i++){
    x[i].innerText = x[i].innerText.toUpperCase();
    
    }
    characterChange();
   
  } else {
    cap = false;
    for (var i = 0; i < x.length; i++) {
      x[i].innerText = x[i].innerText.toLowerCase();

    }
    numeralChange();
    
  }

}



function saveTitle() {
  if ($("#eb1").val() == "on") {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#blog1").hide();
    $("#eb1").val("off");
    $("#words").val("");
    $("#eb1_1").prop("checked", false);
  }
  if ($("#eb2").val() == "on") {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#blog2").hide();
    $("#eb2").val("off");
    $("#words").val("");
    $("#eb2_1").prop("checked", false);
  }
  if ($("#eb3").val() == "on") {
    $("#wrapper").show();
    $("#keyboard").hide();
    $("#blog3").hide();
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

let sAct;
function specActive() {
  sAct = document.activeElement.id;
  console.log("active element is now: " + sAct);
}

// JS for word bank -----------------------------------------------------------------------------------------------------
var arr = [];

function saveWord() {
  var currChars = $("#"+ sAct).val();
  var words = currChars.split(" ");
  if ($("#wordbank1").val() == ""){
    $("#wordbank1").val(words.pop());
  }
  else if ($("#wordbank2").val() == ""){
    $("#wordbank2").val(words.pop());
  }
  else if ($("#wordbank3").val() == ""){
    $("#wordbank3").val(words.pop());
  }
  else{
    $("#wordbank1").val(words.pop());
  }
  
}

function savePhrase() {
  var currChars = $("#"+ sAct).val();
  var words = currChars.split(".");
  if ($("#wordbank1").val() == ""){
    $("#wordbank1").val(words.pop());
  }
  else if ($("#wordbank2").val() == ""){
    $("#wordbank2").val(words.pop());
  }
  else if ($("#wordbank3").val() == ""){
    $("#wordbank3").val(words.pop());
  }
  else{
    $("#wordbank1").val(words.pop());
  }
  
}

function undo(){
  var currChars = $("#"+ act).val();
  var words = currChars.split(" ");
  $("#" + act).val(currChars.substring(0, currChars.length - (words.pop().length+1)));



}

function characterChange(){
    document.getElementById("num1").innerText = "@";
    document.getElementById("num2").innerHTML = "!";
    document.getElementById("num3").innerHTML = "$";
    document.getElementById("num4").innerHTML = "%";
    document.getElementById("num5").innerHTML = "&";
    document.getElementById("num6").innerHTML = "(";
    document.getElementById("num7").innerHTML = ")";
    document.getElementById("num8").innerHTML = ":";
    document.getElementById("num9").innerHTML = ";";
    document.getElementById("num0").innerHTML = "'";
}

function numeralChange(){
    document.getElementById("num1").innerText = "1";
    document.getElementById("num2").innerHTML = "2";
    document.getElementById("num3").innerHTML = "3";
    document.getElementById("num4").innerHTML = "4";
    document.getElementById("num5").innerHTML = "5";
    document.getElementById("num6").innerHTML = "6";
    document.getElementById("num7").innerHTML = "7";
    document.getElementById("num8").innerHTML = "8";
    document.getElementById("num9").innerHTML = "9";
    document.getElementById("num0").innerHTML = "0";
}

function save() {
  var content = $("#words").val();
  if (typeof Storage !== "undefined"){
     window.localStorage.setItem("content",content);
  }else{
    console.log("local storage is not available");
  }
}

function cancel(){
  document.getElementById("context").innerHTML = "";
  
}

function addWordb1(){
  var currChars = $("#"+ sAct).val();
  $("#"+ sAct).val(currChars.concat(" "+ $("#wordbank1").val()));
}
function addWordb2(){
  var currChars = $("#"+ sAct).val();
  $("#"+ sAct).val(currChars.concat(" "+ $("#wordbank2").val()));
}
function addWordb3(){
  var currChars = $("#"+ sAct).val();
  $("#"+ sAct).val(currChars.concat(" "+ $("#wordbank3").val()));
}

function del(){
  var currChars = $("#"+ act).val();
  if (confirm("Do you want to delete " + act + "?")){
    if (confirm("Are you sure?")){
      $("#" + act).val("");
    }
  }
}