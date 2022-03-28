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
                  '0':'"'};
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



function saveTitle(){
	
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
  var n = userInput.split(" ");
  console.log(n[n.length - 1]);
  arr.push(n[n.length - 1]);
  console.log(arr);
  document.getElementById("wordBankItems").textContent = arr.join(", ");
  return n[n.length - 1];
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