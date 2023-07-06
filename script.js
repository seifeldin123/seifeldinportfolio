const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};
// search bar
const searchInput = document.querySelector(".searchbar");
const searchButton = document.querySelector(".fa-search");
const courses = document.querySelectorAll(".courses");
const classNames = document.querySelectorAll(".class");     // get all course names
function filter() {
  const filter = document.querySelector("#filtering").value.toLowerCase().split(" ").join("");
  for (let i = 0; i < courses.length; i++) {
    courses[i].classList.remove("hidden");
  };  
  if (filter !== 'alllevels'){
  
    for (let i = 0; i < courses.length; i++) {
      if( !courses[i].firstElementChild.classList.contains(filter)){
      courses[i].classList.add("hidden");
  } else {
      for (let i = 0; i < classNames.length; i++) {
        classNames[i].classList.remove("hidden");
    };
}
  }
}
}


searchButton.addEventListener("click", function (){
     // listen for user events
    let searchedValue = searchInput.value;  // get the value of the searched item
    
    // we did this to hide all the whole sec (levels)
    for (let i = 0; i < courses.length; i++) {
        courses[i].classList.add("hidden");
    };
    // we did this to hide all the classes
    for (let i = 0; i < classNames.length; i++) {
        classNames[i].classList.add("hidden");
    };


        let searchedCourse = document.getElementsByClassName(searchedValue);
        for (let i = 0; i < searchedCourse.length; i++) {

            let parentNode = searchedCourse[i].parentNode.parentNode.parentNode;

            searchedCourse[i].classList.remove("hidden");
            parentNode.classList.remove("hidden");
        }
    event.preventDefault();


});
// to make the search work if we press enter
searchInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      searchButton.click();
    }
  });



  // sorting button
  const sortButton = document.getElementById('sort-btn');
const list = document.getElementById('list');
let ascending = false;

sortButton.addEventListener('click', () => {
  // Convert HTMLCollection to Array to use sort() method
  const items = Array.from(list.children);
  
  // Sort items in ascending or descending order based on boolean flag
  items.sort((a, b) => {
    if (ascending) {
      return a.innerText.localeCompare(b.innerText);
    } else {
      return b.innerText.localeCompare(a.innerText);
    }
  });
  
  // Toggle boolean flag for next sort
  ascending = !ascending;
  
  // Append sorted items back to the list
  items.forEach((item) => list.appendChild(item));
});

