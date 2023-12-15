let id = (id) => document.getElementById(id);

let username = id("username"),
  email = id("email"),
  phone = id("phone");

// error message
let errName = id("errname"),
  errMail = id("errmail"),
  errPhone = id("errphone");

// regular expression

let userExp = /^[a-zA-Z]+$/;
let emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;
let mobExp = /^[0]?[789]\d{9}$/;
let passwordExp = /^[a-zA-Z0-9]+$/;

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value == "") {
    errName.innerHTML = "Name cant not be left blank";
  } else {
    if (username.value.match(userExp)) {
      errName.innerHTML = "success";
    } else {
      errName.innerHTML = "only alphabet is allowed";
    }
  }

  // for email
  if (email.value == "") {
    errMail.innerHTML = "Email can not be left blank";
  } else {
    if (email.value.match(emailExp)) {
      errMail.innerHTML = "success";
    } else {
      errMail.innerHTML = "Enter valid email id ";
    }
  }

  // for phone

  if (phone.value == "") {
    errPhone.innerHTML = "Please enter phone number";
  } else {
    if (phone.value.match(mobExp)) {
      errPhone.innerHTML = "success";
    } else {
      errPhone.innerHTML = "Enter  a valid phone number";
    }
  }
});
