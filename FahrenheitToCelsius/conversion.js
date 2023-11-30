const fahrInput      = document.getElementById('fahrInput');         // red
const celsiusInput = document.getElementById('celsiusInput');      // blue

function fahrToCelsius() {
    const f = parseInt(fahrInput.value);
    celsiusInput.value = ((f - 32) * (5 / 9)).toFixed(2);
}

function celsiusToFahr() {
    const c = parseInt(celsiusInput.value);
    fahrInput.value = ((c * (9 / 5)) + 32).toFixed(2);
}