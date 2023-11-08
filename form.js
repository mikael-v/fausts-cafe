function validateForm(){
  let requiredFieldOne = document.forms["myForm"]["name"]
  let requiredFieldTwo = document.forms["myForm"]["email"]
  let requiredFieldThree = document.forms["myForm"]["contactForm"]
  let requiredFields = requiredFieldOne + requiredFieldTwo + requiredFieldThree;

  if (requiredFields == ""){
    alert("Required fields must be filled out");
    return false
  }
  else {
    var text = document.getElementById("messageOutput");
    if (text.style.display === "none") {
      text.style.display = "block";
    }  
  }
  event.preventDefault()
}

//if else returns thank you message

//checks required fields
//if empty returns error
/*
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
} 

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post" required>
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>*/