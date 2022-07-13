function addElement() {
  let li = document.createElement("li");
  let userValue = document.getElementById("inputValue").value;
  let x = document.createTextNode(userValue);
  if (userValue != "") {
    li.append(x);
    document.getElementById("todo_ul").appendChild(li);
    document.getElementById("inputValue").value = "";
    let btn = document.createElement("button");
    let txt = document.createTextNode("Delete");
    btn.className = "del";
    btn.appendChild(txt);
    li.appendChild(btn);

    let del = document.getElementsByClassName("del");
    for (i = 0; i < del.length; i++) {
      del[i].onclick = function () {
        let div = this.parentElement;
        console.log();
        div.style.display = "none";
      };
    }
  }
}
