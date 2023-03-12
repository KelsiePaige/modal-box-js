var button = document.querySelector(".got-this");
//console.log(button);
var modal = document.querySelector(".modal");
//console.log(divModal);
var modalX = document.querySelector(".modal-x");
//console.log(spanModalX);

button.addEventListener("click", function() {
    modal.classList.add("show-modal");
    button.innerText = "You've got this!!!";
});

modalX.addEventListener("click", function() {
    modal.classList.remove("show-modal");
    button.innerText = "Who's got this?";
});
