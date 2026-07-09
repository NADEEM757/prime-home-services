document.addEventListener("DOMContentLoaded", function () {

    console.log("Pro Home Services USA Loaded Successfully!");

    const buttons = document.querySelectorAll(".hero-btn,.btn");

    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thank you! Your free quote request feature will be available soon.");
        });
    });

});
