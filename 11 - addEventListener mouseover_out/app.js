let item = document.getElementById("fav")
let myList = document.getElementsByTagName("li")


for(let listItem of myList) {
    listItem.addEventListener("click", () => {
        listItem.textContent = listItem.textContent.toUpperCase()
    })
    listItem.addEventListener("click", () => {
        listItem.textContent = listItem.textContent.toLowerCase()
    })
}


