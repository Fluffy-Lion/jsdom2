const myRemove = document.getElementById("remove")
// const myRemov3 = document.querySelector("#remove")


const myList = document.getElementById("list")

myRemove.addEventListener("click", () => {
    let lastItem = document.querySelector('li:last-child')
    myList.removeChild(lastItem)
})