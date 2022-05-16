const contactForm = document.querySelector('.contact-form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const contactEmail = document.getElementById('mail');
const message = document.getElementById('message');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  //for first name
  if (firstName.value === '') {
    console.log(true);
    return;
  } else {
    let myContactFirstName = firstName.value;
    console.log(myContactFirstName);
  }
  // clear first name
  firstName.value = '';

  //for last name
  if (lastName.value === '') {
    console.log(true);
    return;
  } else {
    let myContactLastName = lastName.value;
    console.log(myContactLastName);
  }
  // clear last name
  lastName.value = '';

  //   for email
  if (contactEmail.value === '') {
    console.log(true);
    return;
  } else {
    let myContactEmail = contactEmail.value;
    console.log(myContactEmail);
  }
  // clear email
  contactEmail.value = '';

  //   for message
  if (message.value === '') {
    console.log(true);
    return;
  } else {
    let myContactMessage = message.value;
    console.log(myContactMessage);
  }
  // clear email
  message.value = '';
});
