/*Guest selection*/
window.onload = function () {
    const selected_guest = document.querySelector("#selected-guest");
    const optionsContainer_guest = document.querySelector("#options-container-guest");
    const optionsList_guest = document.querySelectorAll("#option-guest");

    /*Spot Selection*/
    const selected_spot = document.querySelector("#selected-spot");
    const optionsContainer_spot = document.querySelector("#options-container-spot");
    const optionsList_spot = document.querySelectorAll("#option-spot");

    $(document).click(function () {
        optionsContainer_spot.classList.remove("active");
        optionsContainer_guest.classList.remove("active");
    })

    selected_guest.addEventListener("click", (event) => {
        optionsContainer_guest.classList.toggle("active");
        optionsContainer_spot.classList.remove("active");
        action(selected_guest, optionsContainer_guest, optionsList_guest)
        event.stopPropagation()
    });


    selected_spot.addEventListener("click", (event) => {
        optionsContainer_spot.classList.toggle("active");
        optionsContainer_guest.classList.remove("active");
        action(selected_spot, optionsContainer_spot, optionsList_spot)
        event.stopPropagation()
    });


    function action(selected, optionsContainer, optionsList) {
        optionsList.forEach(o => {
            o.addEventListener("click", () => {
                selected.innerHTML = o.querySelector("label").innerHTML;
                optionsContainer.classList.remove("active");
            });
        });
    }
}