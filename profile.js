function submit(evt) {
    evt.preventDefault();

    alert("Form has been submitted!")
}


let btn = document.getElementById("color")

btn.addEventListener("click", () => {
    alert("My favorite color is blue!")
})

let btn2 = document.getElementById("place")

btn2.addEventListener("click", () => {
    alert("My favorite place to be is the beach!")
})

let btn3 = document.getElementById("ritual")

btn3.addEventListener("click", () => {
    alert("Im not sure I have a favorite ritual.")
})