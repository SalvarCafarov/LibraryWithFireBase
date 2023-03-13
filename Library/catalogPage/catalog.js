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
const allBooksWrap = document.querySelector(".owl1");
const catBtn = document.querySelectorAll(".catBtn");
let g = JSON.parse(localStorage.getItem("TYPES") );

//OWL   /////////////////////////////////////////////////

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
    0: { items: 1 },
    400: { items: 1 },
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
$(".owl3").owlCarousel({
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

function resetOwl() {
  let owlLength = $(".owl1 .item").length;
  for (let i = 0; i < owlLength; i++) {
    $(".owl1")
      .trigger("remove.owl.carousel", [i])
      .trigger("refresh.owl.carousel");
  }
}
localStorage.setItem("READMORE", JSON.stringify(""));

onValue(ref(db, "/Books"), async (sp) => {
  let z = await sp.val();
  let arr = Object.entries(z);
  resetOwl();
  arr.forEach((e) => {
    let all = `<div class="item">
      <div class="item-inner">
        <div class="img"><img src="${e[1].bookimgUrl}" alt=""></div>
        <div class="name">${e[1].bookName}</div>
        <div class="author">${e[1].authorname}</div>
        <div class="readmore" data-id="${e[0]}"><button><a href="../bookPage/bookPage.html">Read More</a></button></div>
      </div>
    </div>`;
    
    if (e[1].sell>=4) {
      
      let bestseller = `<div class="item">
      <div class="item-inner">
        <div class="img"><img src="${e[1].bookimgUrl}" alt=""></div>
        <div class="name">${e[1].bookName}</div>
        <div class="author">${e[1].authorname}</div>
        <div class="readmore" data-id="${e[0]}"><button><a href="../bookPage/bookPage.html">Read More</a></button></div>
      </div>
    </div>`;
      $(".owl2").trigger("add.owl.carousel", [bestseller]);
      $(".owl2").trigger("refresh.owl.carousel");
    }
    let d = new Date( e[1].addTime )
    if (d.getHours()>20) {
      let bestsellerr = `<div class="item">
      <div class="item-inner">
        <div class="img"><img src="${e[1].bookimgUrl}" alt=""></div>
        <div class="name">${e[1].bookName}</div>
        <div class="author">${e[1].authorname}</div>
        <div class="readmore" data-id="${e[0]}"><button><a href="../bookPage/bookPage.html">Read More</a></button></div>

      </div>
    </div>`;
      $(".owl3").trigger("add.owl.carousel", [bestsellerr]);
      $(".owl3").trigger("refresh.owl.carousel");
    }
    
  });
});


if (g) {
  onValue(ref(db, "/Books"), async (sp) => {
    let z = await sp.val();
    let arr = Object.entries(z);
    resetOwl();
    arr.forEach((e) => {
      let all = `<div class="item">
        <div class="item-inner">
          <div class="img"><img src="${e[1].bookimgUrl}" alt=""></div>
          <div class="name">${e[1].bookName}</div>
          <div class="author">${e[1].authorname}</div>
          <div class="readmore" data-id="${z[0]}"><button><a href="../bookPage/bookPage.html">Read More</a></button></div>
        </div>
      </div>`;
      if(g == e[1].booktype){
        $(".owl1").trigger("add.owl.carousel", [all]);
        $(".owl1").trigger("refresh.owl.carousel");
      }
      
     
      
    });
  });
}
else{
  
  onValue(ref(db, "/Books"), async (sp) => {
    let z = await sp.val();
    let arr = Object.entries(z);
    resetOwl();
    arr.forEach((e) => {
      let all = `<div class="item">
        <div class="item-inner">
          <div class="img"><img src="${e[1].bookimgUrl}" alt=""></div>
          <div class="name">${e[1].bookName}</div>
          <div class="author">${e[1].authorname}</div>
          <div class="readmore" data-id="${e[0]}"><button><a href="../bookPage/bookPage.html">Read More</a></button></div>

        </div>
      </div>`;
        $(".owl1").trigger("add.owl.carousel", [all]);
        $(".owl1").trigger("refresh.owl.carousel");
      
     
      
    });
  });

}

catBtn.forEach((e) => {
  e.addEventListener("click", (k) => {
    onValue(ref(db, "/Books"), async (sp) => {
      let z = await sp.val();
      let arr = Object.entries(z);
      let owlLength = $(".owl1 .item").length;
      for (let i = 0; i < owlLength; i++) {
        $(".owl1")
          .trigger("remove.owl.carousel", [i])
          .trigger("refresh.owl.carousel");
      }
      arr.forEach((z) => {
        let type = `<div class="item">
        <div class="item-inner">
          <div class="img"><img src="${z[1].bookimgUrl}" alt=""></div>
          <div class="name">${z[1].bookName}</div>
          <div class="author">${z[1].authorname}</div>
          <div class="readmore" data-id="${z[0]}"><button><a href="../bookPage/bookPage.html">Read More</a></button></div>
        </div>
       </div>`;
        if (
          z[1].booktype
            .trim()
            .toLowerCase()
            .includes(e.innerHTML.trim().toLowerCase())
        ) {
          
          $(".owl1").trigger("add.owl.carousel", [type]);
          $(".owl1").trigger("refresh.owl.carousel");
        }
      });
    });
  });
});
localStorage.setItem("TYPES", JSON.stringify(""));




$(document).on("click", ".readmore", async function (e){
let t = JSON.parse(localStorage.getItem("READMORE") );

  if(!t){
    localStorage.setItem("READMORE", JSON.stringify(e.currentTarget.dataset.id));

  }
  
})