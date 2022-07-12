//template_1kuz27w
//service_cv4hfnb
//CwS1CqbLvvLsQJ2RP


//global variables
let isModalOpen =false;     //variable to account if modal is open
let contrastToggle = false;  //variable to account if dark-mode is enabled
const scaleFactor = 1/20;   //variable to add multiplier to decrease movement in elements

//function to move background images
function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");     //creates an array of all elemnts with shape class
    const x = event.clientX * scaleFactor;      //variable that holds location of x-axis of mouse position
    const y = event.clientY * scaleFactor;//variable that holds location of y-axis of mouse position
    for(i=0;i<shapes.length;i++)        //loop through all shapes array and translate their positions
    {
        const isOdd = i % 2 !== 0;      //if shape is in a odd index, move in negative direction else move in positive direction
        const booleanInt = isOdd ? -1 : 1;
        //each shape will be translated by the position of the mouse in a scale of 1/20
        shapes[i].style.transform = `translate(${x * booleanInt}px,${y * booleanInt}px)`;
    }
}
//function to enable and disable darkmode
function toggleContrast(){
    contrastToggle = !contrastToggle;   //set variable to opposite value
    if(!contrastToggle){         //check if toggle is false, add the dark-theme class to the body
        document.body.classList +=" dark-theme";
    }                           //else remove the dark-mode class from the body
    else {
        document.body.classList.remove("dark-theme");
    }
}
//function to send email and set the modal overlays
function contact(event) {
  event.preventDefault();           //prevent from event to be refreshed.
  const loading = document.querySelector(".modal__overlay--loading");   //set variable to grab loading modal overlay
  const success = document.querySelector(".modal__overlay--success");   //set variable to grab success modal overlay
  loading.classList += " modal__overlay--visible";          //add class visible to loading 
  emailjs                                             //send email using email.js function
    .sendForm(
      "service_cv4hfnb",
      "template_1kuz27w",
      event.target,
      "CwS1CqbLvvLsQJ2RP"
    )
    .then(() => {                               //wait for email to complete then execute
      loading.classList.remove("modal__overlay--visible"); //remove visible class to loading
      success.classList += " modal__overlay--visible"; //add visible class to success overlay
      
    }).catch(() => {                //handle error and display alert
        loading.classList.remove("modal__overlay--visible");
        alert("The email servise is temporarily unavailable. Please contact me directly at alex101nunez@gmail.com");
    });
}
//function to keep track if the modal has been clicked and opened
function toggleModal(){
    if(isModalOpen){            //if modal is open and clicked set boolean to false and remove class open to body
        isModalOpen = false;
        document.body.classList.remove("modal--open")
    }
    else{                       //if modal is closed and clicked set boolean to true and add class open to body
        isModalOpen = true;
        document.body.classList += " modal--open";
    }
}