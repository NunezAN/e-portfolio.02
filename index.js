//template_1kuz27w
//service_cv4hfnb
//CwS1CqbLvvLsQJ2RP

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_cv4hfnb",
      "template_1kuz27w",
      event.target,
      "CwS1CqbLvvLsQJ2RP"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
      console.log("Email Sent!!");
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email servise is temporarily unavailable. Please contact me directly at alex101nunez@gmail.com");
    });

}
