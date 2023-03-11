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

$(".owl1").owlCarousel({
  margin: 30,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  loop: true,
  center: false,
  mergeFit: true,
  items: 5,
  autoplay: true,
  duration: "3000",
  dots: false,
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  dotsEach: true,
  responsive: {
    4: { items: 1 },
    576: { items: 2 },
    700: { items: 3 },
    900: { items: 4 },
    1100: { items: 5 },
  },
  nav: true,
});
$(".owl2").owlCarousel({
  margin: 30,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  loop: true,
  center: false,
  mergeFit: true,
  items: 5,
  autoplay: true,
  duration: "3000",
  dots: false,
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  dotsEach: true,
  responsive: {
    4: { items: 1 },
    576: { items: 2 },
    700: { items: 3 },
    900: { items: 4 },
    1100: { items: 5 },
  },
  nav: true,
});
const allBooksWrap = document.querySelector(".owl1");
console.log(allBooksWrap);
function resetOwl() {
  let owlLength = $(".owl1 .item").length;
  for (let i = 0; i < owlLength; i++) {
    $(".owl1")
      .trigger("remove.owl.carousel", [i])
      .trigger("refresh.owl.carousel");
  }
}
  onValue(ref(db, "/Books"), async (sp) => {
    let z = await sp.val();
    let arr = Object.entries(z);
    resetOwl();
    arr.forEach((e) => {
      console.log(e);
      let all = `<div class="item">
      <div class="item-inner">
        <div class="img"><img src="${e[1].bookimgUrl}" alt=""></div>
        <div class="name">${e[1].bookName}</div>
        <div class="author">${e[1].authorname}</div>
        <div class="readmore"><button>Read More</button></div>
      </div>
    </div>`;
     if(e[1].sell){
      let bestseller =`<div class="item">
      <div class="item-inner">
        <div class="img"><img src="${e[1].bookimgUrl}" alt=""></div>
        <div class="name">${e[1].bookName}</div>
        <div class="author">${e[1].authorname}</div>
        <div class="readmore"><button>Read More</button></div>
      </div>
    </div>`
    $(".owl2").trigger("add.owl.carousel", [all]);
    $(".owl2").trigger("refresh.owl.carousel");

     }
     e[1].publish
     if(e[1].publish){
      let bestseller =`<div class="item">
      <div class="item-inner">
        <div class="img"><img src="${e[1].bookimgUrl}" alt=""></div>
        <div class="name">${e[1].bookName}</div>
        <div class="author">${e[1].authorname}</div>
        <div class="readmore"><button>Read More</button></div>
      </div>
    </div>`
    $(".owl2").trigger("add.owl.carousel", [all]);
    $(".owl2").trigger("refresh.owl.carousel");

     }






      $(".owl1").trigger("add.owl.carousel", [all]);
      $(".owl1").trigger("refresh.owl.carousel");
     
    });
  });


