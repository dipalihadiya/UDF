let fun9 = (number) => {
    if (number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}
let number = 7;
fun9(number);    
number = 12;
fun9(number);   

document.getElementById('name').innerHTML = fun9(7,12);















