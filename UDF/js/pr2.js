let fun2 = (radius) => {
    let ans = Math.PI * radius * radius;
    return ans;
}

document.getElementById("name").innerHTML = fun2(5);

console.log(fun2(5));
