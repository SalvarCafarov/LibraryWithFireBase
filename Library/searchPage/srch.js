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

$(".azb").on("click", function () {
  let searchBook = $(".searchBook").val();

  localStorage.setItem("searchBook", searchBook);
});

function searchResult() {
  let searchBook = localStorage.getItem("searchBook");
  if (!searchBook) {
    return;
  }

  let booksData = JSON.parse(localStorage.getItem("books"));

  let resultData = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchBook)
  );

  $(".books").removeClass("d-none");
}
searchResult();