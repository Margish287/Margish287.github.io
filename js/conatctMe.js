const Ename = document.forms["contact_form"]["name"].value;
const Eemail = document.forms["contact_form"]["email"];
const Ephone = document.forms["contact_form"]["phone"];

function ValidateEmail(event) {
    event.preventDefault();
}
ValidateEmail();