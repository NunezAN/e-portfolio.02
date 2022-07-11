//template_1kuz27w
//service_cv4hfnb
//CwS1CqbLvvLsQJ2RP

let isModalOpen =false;
let contrastToggle = true;
const scaleFactor = 1/20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    for(i=0;i<shapes.length;i++)
    {
        const isOdd = i % 2 !== 0;
        const booleanInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booleanInt}px,${y * booleanInt}px)`;
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList +=" dark-theme";
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}

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
      
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email servise is temporarily unavailable. Please contact me directly at alex101nunez@gmail.com");
    });

}
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        document.body.classList.remove("modal--open")
    }
    else{
        isModalOpen = true;
        document.body.classList += " modal--open";
    }
}