function compute(){
    // get numbers and calculate values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result");
    // validate interest rates by number of years 
    validate()
    result.innerHTML = `If you deposit <mark>${principal}</mark> <br > at an interest rate of <mark>${rate}%</mark>. <br> You will receive an amount of <mark>${interest}</mark>, <br> in the year <mark>${year}</mark>`
}
// rate slider
function updateRate() {
    var rateValue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateValue} %`;
}

// alert user to enter positive number
function validate() {
    var prInput = document.getElementById("principal").value;
    if(prInput <= 0) {
        alert('Enter a positive number')
        document.getElementById("pricipal").value = '';
    }
}