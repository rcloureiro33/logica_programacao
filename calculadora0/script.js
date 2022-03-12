var n1 = "";
var n2 = "";
var operacao = "";

const altnum = (n) => {
    n1 += n.toString();
    n1 =parseInt(n1)
    document.getElementById("digitos").value = n1;
}

const adicao = () => {
    var res = n1 + n2;
    console.log(res);
};
const subt = () => {
    var res = n1 - n2;
    console.log(res);
};
const mult = () => {
    var res = n1 * n2;
    console.log(res);
};
const divi = () => {
    var res = n1 / n2;
    console.log(res);
};
const res = () => {
    console.log(res);
};


