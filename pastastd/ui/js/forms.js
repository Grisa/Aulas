function ValidaValoresDoArray(params) {
    for (var i = 0; i < params.length; i++) {
        console.log(params[i]);
        if (params[i] >= 10) {
            return params[i];
        } 
    }
}

function Soma(a, b) {

    if (typeof a != "number") {
        alert("A nao eh um numero.");
        return false;
    }

    if (typeof b != "number") {
        alert("B nao eh um numero");
        return false;
    }

    return a+b;
}