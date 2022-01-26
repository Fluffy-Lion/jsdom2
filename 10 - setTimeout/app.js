const myButton = document.getElementById("run")

myButton.addEventListener("click", () => {

    setTimeout((something) => {
        alert(something)
    }, 3000, "hello there")

})