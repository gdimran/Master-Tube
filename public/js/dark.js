//==================dark mode theme===========================

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('.theme-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}


// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}
document.querySelectorAll('.theme-mode-toggle').forEach(item => {
  item.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
      enableDarkMode();
      document.getElementById("logo-dark").style.display = "block";
      document.getElementById("logo-light").style.display = "none";

      // if it has been enabled, turn it off  
    } else {
      disableDarkMode();
      document.getElementById("logo-dark").style.display = "none";
      document.getElementById("logo-light").style.display = "block";

    }
  });
})

var len = document.querySelectorAll(".system-mode-toggle").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".system-mode-toggle")[i].addEventListener("click", function () {
    if (matchMedia('(prefers-color-scheme: light)').matches) {
      disableDarkMode();
      document.getElementById("logo-dark").style.display = "none";
      document.getElementById("logo-light").style.display = "block";
    } else {
      enableDarkMode();
      document.getElementById("logo-dark").style.display = "block";
      document.getElementById("logo-light").style.display = "none";
    }
  });
}

var tlen = document.querySelectorAll(".light-mode-toggle").length;
for (var i = 0; i < tlen; i++) {
  document.querySelectorAll(".light-mode-toggle")[i].addEventListener("click", function () {
    // if it not current enabled, enable it
    if (darkMode === 'enabled') {
      disableDarkMode();
      document.getElementById("logo-dark").style.display = "none";
      document.getElementById("logo-light").style.display = "block";
      // if it has been enabled, turn it off  
    }
  });
}

