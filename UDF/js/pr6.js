let fun6 = (a, b) => {
    let ans = (a * a) + (2 * a * b) + (b * b);
    return ans;
}

document.getElementById("name").innerHTML = fun6(6, 9);

console.log(fun6(6, 9));

