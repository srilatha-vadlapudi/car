let count = 0;
let cartNumber = document.querySelector("#cart-number");
let addButtons = document.querySelectorAll(".addbutton");
function inc() {
    count++;
    cartNumber.textContent = count;
}
addButtons.forEach(function(btn) {
    btn.addEventListener("click", inc);
});


let cartpanel = document.getElementById("cartpanel");
let closecart = document.getElementById("closecart");
let cartbutton = document.getElementById("cartbutton");

cartbutton.addEventListener("click", function() {
    cartpanel.classList.add("open");
});

closecart.addEventListener("click", function() {
    cartpanel.classList.remove("open");
});
