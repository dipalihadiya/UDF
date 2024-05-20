let fun10 = (a, b) => { 
    console.log("Before swapping: a =", a, ", b =", b);

    let temp = a;
    a = b;
    b = temp;       

    console.log("After swapping: a =", a, ", b =", b);
}           

document.getElementById("name").innerHTML = fun10(5, 10);