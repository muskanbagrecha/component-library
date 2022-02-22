const priceSlider = () => {
    const slider = document.getElementById("price-range");
    const output = document.querySelector(".price-range-output");
    output.innerHTML = `₹100 to ₹${slider.value}`; // the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = `₹100 to ₹${this.value}`;
    }
}

priceSlider();