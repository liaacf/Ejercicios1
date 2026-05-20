function calcularTemperatura() {

    let T0 = parseFloat(document.getElementById("T0").value);

    let Ts = parseFloat(document.getElementById("Ts").value);

    let k = parseFloat(document.getElementById("k").value);

    let t = parseFloat(document.getElementById("t").value);

    let T =
        Ts + (T0 - Ts) * Math.exp(-k * t);

    T = Math.round(T);

    document.getElementById("resultadoTemp").style.display = "block";

    document.getElementById("valorTemp").textContent =
        T + " °C";
}

function factorial(n) {

    let f = 1;

    for (let i = 1; i <= n; i++) {

        f = f * i;
    }

    return f;
}

function combinacion(n, r) {

    return factorial(n) /
        (factorial(r) * factorial(n - r));
}

function calcularCombinaciones() {

    let n1 = parseInt(document.getElementById("n1").value);

    let r1 = parseInt(document.getElementById("r1").value);

    let n2 = parseInt(document.getElementById("n2").value);

    let r2 = parseInt(document.getElementById("r2").value);

    if (r1 > n1 || r2 > n2) {

        alert("r no puede ser mayor que n");

        return;
    }

    let total =
        combinacion(n1, r1) *
        combinacion(n2, r2);

    total = Math.round(total);

    document.getElementById("resultadoComb").style.display = "block";

    document.getElementById("valorComb").textContent =
        total.toLocaleString();
}