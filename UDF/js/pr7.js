let fun7 = (Fahrenheit) => {
    let celsius = (Fahrenheit - 32) * 5 / 9;
    return celsius;
}

document.getElementById("name").innerHTML = fun7(88);

console.log(fun7(88));