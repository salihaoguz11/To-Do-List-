//*create a close button and append it to each element

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash";
  // trashIcon.style.color = "gray";
  span.className = "close";

  span.appendChild(trashIcon);

  myNodelist[i].appendChild(span);
}

//* Click on a close button to hide the current list item//*

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement;

    div.style.display = "none";
  };
}

//*Add a checked symbol when clicking on a list item

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

//*Create a new list item when clicking on the "Add "button

function newElement() {
  const li = document.createElement("li");

  const inputValue = document.getElementById("myInput").value;

  const t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === "") {
    alert("You must write something");
  } else {
    document.getElementById("myUl").appendChild(li);
  }

  const myInput = document.getElementById("myInput");
  myInput.addEventListener("keyup", (event) => {
    if (event.which === 13) {
      newElement();
    }
  });

  document.getElementById("myInput").value = "";
  const span = document.createElement("SPAN");
  const trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash";

  span.className = "close";
  span.appendChild(trashIcon);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  }
}
