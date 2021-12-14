const selected = document.querySelector('.selected');
const optionscontainer = document.querySelector('.option-container');
const optionsList = document.querySelectorAll('.option');
selected.addEventListener('click', () => {
    optionscontainer.classList.toggle('active');
});
optionsList.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerHTML = option.innerHTML;
        optionscontainer.classList.remove('active');
    });
});

function fahTocel(fah){
    let cel = (fah-32)*(5/9);
    return cel;
}

function kelTocel(kel){
    let cel = kel-273;
    return cel;
}
function rankTocel(rank){
    let cel = (rank - 491.67)*(5/9);
    return cel;
}
function delisTocel(delis){
    let cel = (delis+100)/1.5;
    return cel;
}
function newtonTocel(newton){
    let cel = newton/0.33;
    return cel;
}
function romerTocel(romer){
    let cel = (romer - 7.5)/0.525;
    return cel;
}
function reauTocel(reau){
    let cel = reau*5/4;
    return cel;
}

const Calculator=()=>{
    let  numberTemp = document.getElementById("numberselect").value;
    console.log(numberTemp);
    let selectedTemp = document.getElementById("selected");
    let selectedTempValue = selectedTemp.innerText;
    if(selectedTempValue=="Fahrenheit"){
        let result = fahTocel(numberTemp);
        document.getElementById("result").innerHTML = result.toFixed(3) + "°C";
    }
    else if(selectedTempValue=="Kelvin"){
        let result = kelTocel(numberTemp);
        document.getElementById("result").innerHTML = result.toFixed(3) + "°C";
    }
    else if(selectedTempValue == "Rankine"){
        let result = rankTocel(numberTemp);
        document.getElementById("result").innerHTML = result.toFixed(3) + "°C";
    }
    else if(selectedTempValue == "Delisle"){
        let result = delisTocel(numberTemp);
        document.getElementById("result").innerHTML = result.toFixed(3) + "°C";
    }
    else if(selectedTempValue == "Newton"){
        let result = newtonTocel(numberTemp);
        document.getElementById("result").innerHTML = result.toFixed(3) + "°C";
    }
    else if(selectedTempValue == "Romer"){
        let result = romerTocel(numberTemp);
        document.getElementById("result").innerHTML = result.toFixed(3) + "°C";
    }
    else if(selectedTempValue == "Reaumur"){
        let result = reauTocel(numberTemp);
        document.getElementById("result").innerHTML = result.toFixed(3) + "°C";
    }
}