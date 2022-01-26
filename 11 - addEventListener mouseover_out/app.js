let item = document.getElementById("fav")
let myList = document.getElementsByTagName("li")


for(let listItem of myList) {
    listItem.addEventListener("mouseover", () => {
        listItem.textContent = listItem.textContent.toUpperCase()
    })
    listItem.addEventListener("mouseout", () => {
        listItem.textContent = listItem.textContent.toLowerCase()
    })
}


