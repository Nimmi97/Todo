import "./styles.css";
// showTasks();
let inputBox = document.querySelector(".inputField input");
let addBtn = document.querySelector(".inputField button");
let todoList = document.querySelector(".todoList");
let listArray = [];
let userEnteredValue = inputBox.value;

if (userEnteredValue !== "") {
  addBtn.onclick = () => {
    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
      listArray = [];
    } else {
      listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
  };
}

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }

  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `
      <li>
        <span>${element}</span>
        <span class="icon" onclick="deleteTask(${index})">del</span>
      </li>
    `;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}

showTasks();

window.deleteTask = (index) => {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
};
