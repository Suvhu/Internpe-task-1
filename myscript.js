val1 = document.getElementById('screen_view1');
val2 = document.getElementById('box1');
function allclear() {
    val1.value = "";
    val2.innerHTML = "";
}
function remove(values) {
    val1.value = values.toString().slice(0, -1);
}
function run(values) {
    val2.innerHTML = values + ' =';
}
function fun1(values) {
    val2.innerHTML = '1/' + values + ' =';
    val1.value = 1 / values;
}
function fun2(values) {
    val2.innerHTML = values + '^2' + ' =';
    val1.value = values ** 2;
}
function fun3(values) {
    val2.innerHTML = '√' + values + ' =';
    val1.value = values ** (1 / 2);
}
function fun4(values) {
    val2.innerHTML = values + '% =';
    val1.value = values / 100;
}
function adda(values) {
    var x = values.toString();
    var y = x.charAt(x.length - 1);
    if ((y == '+') || (y == '-') || (y == '*') || (y == '/')) {
    }
    else {
        val1.value += '/';
    }
}
function addb(values) {
    var x = values.toString();
    var y = x.charAt(x.length - 1);
    if ((y == '+') || (y == '-') || (y == '*') || (y == '/')) {
    }
    else {
        val1.value += '*';
    }
}
function addc(values) {
    var x = values.toString();
    var y = x.charAt(x.length - 1);
    if ((y == '+') || (y == '-') || (y == '*') || (y == '/')) {
    }
    else {
        val1.value += '-';
    }
}
function addd(values) {
    var x = values.toString();
    var y = x.charAt(x.length - 1);
    if ((y == '+') || (y == '-') || (y == '*') || (y == '/')) {
    }
    else {
        val1.value += '+';
    }
}
function adde(values) {
    var x = values.toString();
    var y = x.charAt(x.length - 1);
    if (y == '.') {
    }
    else {
        val1.value += '.';
    }
}