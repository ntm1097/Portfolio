let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 15;

function moveBackground (event) {
   const shapes = document.querySelectorAll(".shape");
   const x = event.clientX * scaleFactor;
   const y = event.clientY * scaleFactor;
    
   for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0; 
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
   }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
   document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact (event) {
    event.preventDefault();
     const loading = document.querySelector('.modal__overlay--loading');
     const success = document.querySelector('.modal__overlay--success');
     loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        'service_755n5f9',
        'template_zllopfg',
        event.target,
        'R0_BeGoyZAbNFrQUu'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "the email service is temporarily unavailable. Please contact me directly at natemiller1097@gmail.com  "
        );
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open";
}

