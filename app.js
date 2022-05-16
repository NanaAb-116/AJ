const homeForm = document.querySelector('.newsletterform');
const email = document.querySelector('.input_email');

homeForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (email.value === '') {
    console.log(true);
    return;
  } else {
    let newsLetterEmail = email.value;
    console.log(newsLetterEmail);
  }
  // clear input
  email.value = '';
});
