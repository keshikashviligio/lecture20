// function startTime() {
//   const today = new Date();
//   let h = today.getHours();
//   const m = today.getMinutes();
//   const s = today.getSeconds();
//   let session = "AM";
//   if(h === 0){
//     h = 12;
//   }
//   if(h > 12){
//     h = h - 12;
//     session = "PM";
//   }
//
//   document.querySelector(".clock").innerHTML = h + ":" + m + ":" + s + " "+ session;
//   setTimeout(function(){ startTime() }, 1000);
// }
// startTime()
// //   დავალევა2-3
// let slideIndex = 1;
// let millis = 1000;
// let interval;
//
// startSlides();
//
// function startSlides(){
//   pauseSlides();
//   nextSlide();
//   interval = setInterval(nextSlide, millis);
// }
// function resumeSlides() {
//   nextSlide();
// }
// function pauseSlides() {
//   clearInterval(interval);
// }
// function nextSlide() {
//   showSlide();
//   slideIndex++;
// }
// function plusSlides(n) {
//   clearInterval(interval);
//   slideIndex += n;
//   nextSlide();
//   interval = setInterval(nextSlide, millis);
// }
//
// function currentSlide(n) {
//   clearInterval(interval);
//   slideIndex = n + 1;
//   nextSlide();
//   interval = setInterval(nextSlide, millis);
// }
//
// function showSlide() {
//   let i;
//   const slides = document.getElementsByClassName("mySlides");
//   const dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   if (slideIndex < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
//
// const slidesContainer = document.querySelector('.sliders-container');
//
// slidesContainer.addEventListener('mouseenter', e => {
//   pauseSlides();
// });
//
// slidesContainer.addEventListener('mouseleave', e => {
//   startSlides();
// });
//
// // დავალება4
// let k = 4;
// const students = [-1, -3, 4, 2,6,0,-5];
// let activeStudents = [];
// function angryProfessor(k, students){
//   students.forEach(item => {
//     if(item < 1){
//       return activeStudents++
//     }
//   });
//   if(activeStudents.length < k){
//     return "YES";
//   }else{
//     return "NO";
//   }
// };
// console.log(angryProfessor(k, students))
// console.log("activeStudents: " + activeStudents);

//
const signupForm = document.querySelector('#user-signup-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const personal_number = document.querySelector('#personal_number');
const mobile_number = document.querySelector('#mobile_number');
const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const zip = document.querySelector('#zip');
const gender = document.querySelector('#gender');
const status = document.querySelector('#status');
// const position = document.querySelector('#position');

const usernameError = document.querySelector('#username-error');
const emailError = document.querySelector('#email-error');
const personal_numberError = document.querySelector('#personal_number-error');
const mobile_numberError = document.querySelector('#mobile_number-error');
// const positionError = document.querySelector('#position-error');

function validateUsername(){
  if(!username.validity.valid){
    username.classList.add('has-error');
    if(username.validity.tooShort){
      usernameError.innerText = 'Username must be 4 length or more';
    } else {
      usernameError.innerText = 'Username is required.';
    }
    return false;
  } else {
    username.classList.remove('has-error');
    username.classList.add('has-success');
    usernameError.innerText = '';
    return true;
  }
}

function validateEmail(){
  if(!email.validity.valid){
    email.classList.add('has-error');
    if(email.validity.typeMismatch){
      emailError.innerText = 'Please enter valid email.';
    } else {
      emailError.innerText = 'Email is required.';
    }
    return false;
  } else {
    email.classList.remove('has-error');
    email.classList.add('has-success');
    emailError.innerText = '';
    return true;
  }
}

function validatePersonalNumber(){
  const value = personal_number.value;
  // console.log(value);
  if(!personal_number.validity.valid){
    personal_number.classList.add('has-error');
    if(personal_number.validity.typeMismatch){
      personal_numberError.innerText = 'Please enter valid email.';
    } else {
      personal_numberError.innerText = 'Email is required.';
    }
    return false;
  } else {
    if(value.length !== 11) {
      personal_number.classList.add('has-error');
      personal_numberError.innerText = 'Please enter valid email.';
      return false;
    }
    personal_number.classList.remove('has-error');
    personal_number.classList.add('has-success');
    personal_numberError.innerText = '';
    return true;
  }
}

function validateMobile(){
  const value = mobile_number.value;
  // console.log(value);
  if(!mobile_number.validity.valid){
    mobile_number.classList.add('has-error');
    if(mobile_number.validity.typeMismatch){
      mobile_numberError.innerText = 'Please enter valid email.';
    } else {
      mobile_numberError.innerText = 'Email is required.';
    }
    return false;
  } else {
    if(value.length !== 9) {
      mobile_number.classList.add('has-error');
      mobile_numberError.innerText = 'Please enter valid email.';
      return false;
    }
    mobile_number.classList.remove('has-error');
    mobile_number.classList.add('has-success');
    mobile_numberError.innerText = '';
    return true;
  }
}

// function validatePessition(){
//   const value = position.value;
//   // console.log(value);
//   if(!position.validity.valid){
//     position.classList.add('has-error');
//     if(position.validity.typeMismatch){
//       positionError.innerText = 'Please enter valid email.';
//     } else {
//       positionError.innerText = 'Email is required.';
//     }
//     return false;
//   } else {
//     position.classList.remove('has-error');
//     position.classList.add('has-success');
//     positionError.innerText = '';
//     return true;
//   }
// }

// username.addEventListener('input', () => {
//   validateUsername();
// });

email.addEventListener('input', () => {
  validateEmail();
});

personal_number.addEventListener('input', () => {
  validatePersonalNumber();
});

mobile_number.addEventListener('input', () => {
  validateMobile()
});

// position.addEventListener('input', () => {
//   validatePessition();
// });

// signupForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const userData = {
//     first_name: first_name.value,
//     last_name: last_name.value,
//     zip: zip.value,
//     mobile: mobile_number.value,
//     pn: personal_number.value,
//     gender: gender.value,
//     email: email.value,
//     status: status.value,
//   };
//
//   console.log(userData);
//   // const isValidUsername = validateUsername();
//   // const isValidEmail = validateEmail();
//   // const isValidPn = validatePersonalNumber();
//   // const isValidMobile = validateMobile();
//   // const isValidPosition = validatePessition();
//
//   // console.log(isValidPn, isValidMobile);
//
//   // if(isValidEmail){
//   //
//   //   // const usernameValue = username.value;
//   //   // const emailValue = email.value;
//   //   // console.log('We can send information to server.', {username: usernameValue, email: emailValue});
//   //   // dynamicModalShow('#user-notification');
//   // } else {
//   //   // dynamicModalShow('#payment-success');
//   // }
// });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hi from promise 0 resolve');
  }, 1000);
});

async function resolvePromise() {
  const promiseValue = await myPromise;
  console.log(promiseValue);
}
resolvePromise();
//
// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hi from promise1 resolve');
//   }, 4000);
// });
//
// Promise.all([myPromise, myPromise1]).then(values => {
//   console.log('Promise.all', values);
// })

// myPromise.then(res => {
//   console.log('myPromise then', res);
// }).catch(error => {
//   console.log('myPromise catch', error);
// });
// console.log();
// console.log('Bla bla');

function getUsers() {
  const getUsersRequest = fetch('http://api.kesho.me/v1/user-test');

  getUsersRequest.then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
  });
}
// getUsers();

// function createUser(userData) {
//   const createUserRequest = fetch('http://api.yii2-starter-kit.localhost/v1/user-test/create', {
//     method: 'POST',
//     body: JSON.stringify(userData),
//     headers: {
//       'Content-type': 'application/json'
//     }
//   });
//
//   createUserRequest.then(response => {
//     return response.json();
//   }).then(data => {
//     console.log(data);
//   }).catch(error => {
//     console.log('Save error', error);
//   });
// }

// const myFunc = async () => {
//
// }
async function createUser(userData) {
  const createUserRequest = fetch('http://api.yii2-starter-kit.localhost/v1/user-test/create', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-type': 'application/json'
    }
  });
  try {
    const response = await createUserRequest;
    const data = await response.json();
    console.log(data);
  } catch (error){
   console.log(error);
  }


  // createUserRequest.then(response => {
  //   return response.json();
  // }).then(data => {
  //   console.log(data);
  // }).catch(error => {
  //   console.log('Save error', error);
  // });
}


signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const userData = {
    first_name: first_name.value,
    last_name: last_name.value,
    zip: zip.value,
    mobile: mobile_number.value,
    pn: personal_number.value,
    gender: gender.value,
    email: email.value,
    status: status.value,
  };
  createUser(userData);
  console.log('Save user');
});
