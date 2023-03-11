import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getDatabase,
  get,
  set,
  ref,
  push,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDy72CYrAuJ6EVO8rgVqJ28t1EOQWvLGBc",
  authDomain: "library-e85db.firebaseapp.com",
  databaseURL: "https://library-e85db-default-rtdb.firebaseio.com",
  projectId: "library-e85db",
  storageBucket: "library-e85db.appspot.com",
  messagingSenderId: "744419190301",
  appId: "1:744419190301:web:bf3bdd4814a1e313e408f4",
};

export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const allBooksWrap = document.querySelector(".allBooksWrap");

async function getInfo() {
  onValue(ref(db, "/Books"), async (sp) => {
    let z = await sp.val();
    let arr = Object.entries(z);
    arr.forEach((e) => {
     

      allBooksWrap.innerHTML += `<div class="card swiper-slide">
  <div class="image-content">
    <span class="overlay"></span>
    <div class="card-image">
      <img src="${e[1].bookimgUrl}" alt="Book" class="card-img">
    </div>
  </div>
  <div class="card-content">
    <h2 class="name">${e[1].bookName}</h2>
    <button class="button">READ MORE</button>

  </div>
</div>`;
    });
  });
  await swip1();
}

getInfo();

const typeBooks = document.querySelectorAll(".allbooks-head ul li");
const allbooksBtn=document.querySelector(".allbooks")
allbooksBtn.addEventListener("click",()=>{
getInfo();

})
typeBooks.forEach((e) => {
  e.addEventListener("click", () => {
    onValue(ref(db, "/Books"), async (sp) => {
      let z = await sp.val();
      let arr = Object.entries(z);
      allBooksWrap.innerHTML = "";

      arr.forEach((k) => {
        
        if (k[1].booktype.toLowerCase().includes(e.innerHTML.toLowerCase()) || k[1].bookName.toLowerCase().includes(e.innerHTML.toLowerCase()) ) {
        console.log(k[1], "asa");

          allBooksWrap.innerHTML += `<div class="card swiper-slide">
  <div class="image-content">
    <span class="overlay"></span>
    <div class="card-image">
      <img src="${k[1].bookimgUrl}" alt="Book" class="card-img">
    </div>
  </div>
  <div class="card-content">
    <h2 class="name">${k[1].bookName}</h2>
    <button class="button">READ MORE</button>

  </div>
</div>`;
        }
      });
    });
  });
});

const bestsellerContainer=document.querySelector(".bestseller-container .card-wrapper")
onValue(ref(db, "/Books"), async (sp) => {
  let z = await sp.val();
  let arr = Object.entries(z);
  arr.forEach((e) => {
   if(e[1].sell==true){
    bestsellerContainer.innerHTML += `<div class="card swiper-slide">
  <div class="image-content">
    <span class="overlay"></span>
    <div class="card-image">
      <img src="${e[1].bookimgUrl}" alt="Book" class="card-img">
    </div>
  </div>
  <div class="card-content">
    <h2 class="name">${e[1].bookName}</h2>
    <button class="button">READ MORE</button>

  </div>
</div>`;
   }

   
  });
});













function swip1() {
  let swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    
  });

  1;
}
