function fatorial(n) {
    var p = 1;
    for (var i = 2; i <= n; i++)
      p = p * i;
    return p;
}

console.log(fatorial(3));