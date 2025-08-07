const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const result = document.querySelector('.result');

function calculate() {
    let h = parseFloat(height.value) / 100;
    let w = parseFloat(weight.value);

    if (!w || !h || w <= 0 || h <= 0) {
        result.innerText = "Please enter valid height and weight!";
        return;
    }

    let res = (w / (h * h)).toFixed(2);
    result.innerText = `Your BMI is ${res}`;

    setTimeout(remove, 5000);
}

function remove(){
    result.innerText = "";
}
