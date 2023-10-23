// scroll sections

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// form validation

function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var phonenumber = "+6281370500144";

  if (
    name.length == 0 ||
    email.length == 0 ||
    number.length == 0 ||
    subject.length == 0 ||
    message.length == 0
  ) {
    alert("No blank values are allowed");
  } else if (!number.match(/^[0-9]{12}$/)) {
    alert("Phone number is invalid");
  } else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    alert("Email is invalid");
  } else {
    var url = "https://wa.me/" + phonenumber + "?text=" + message + "%0a%0a";

    window.open(url, "_blank").focus();
  }
}
