alert ("This is a task manager where you can edit, delete and add your tasks, so you can do your tasks more efficiently.")

let task = []

let inputValue = document.getElementById("text")
let list = document.getElementById("show")

function add() {
    task.push(inputValue.value)
    inputValue.value = ""

    valueChange()
}


valueChange ()
function valueChange () {
    list.innerHTML = ``
for (var i = 0; i < task.length; i++){

      list.innerHTML += `<li><span>${task[i]}</span> <button onclick = "edit(${i})">Edit</button> <button onclick = "del(${i})">Delete</button></li> `
}
}

function edit (num) {
    let valueForupdate = prompt("Enter your value that you want to be shown instead of this value.")
    console.log(num);
    if (valueForupdate) {
        task.splice(num, 1, valueForupdate)
    }
    
    valueChange ()
}

function del (num) {

    task.splice(num, 1)
valueChange()    
}    
