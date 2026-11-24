function changeText() {
    document.getElementById("heading").innerHTML = "Hello JavaScript!";
}

const demo = document.getElementById("demo");
demo.style.color = "red";

const p = document.createElement("p");
p.innerText = "New Paragraph";
document.body.appendChild(p);

function removeDemo() {
    demo.remove();
}