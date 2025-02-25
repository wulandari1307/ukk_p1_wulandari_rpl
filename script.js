let expression = " ";

function appendToDisplay(value) {
    expression += value;
    document.getElementById("display").innerText = expression;
}

function clearDisplay() {
    expression = " ";
    document.getElementById("display").innerText = "0";
}

function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById("display").innerText = expression || "0";
}

function calculateResult() {
    if (/\/0(\.0+)?$/.test(expression)) {
        document.getElementById("display").innerText = "Tidak bisa dibagi 0";
        expression = " ";
        return;
    }

    try {
        let result = new Function('return ' + expression)(); 

        if (result === Infinity || result === -Infinity) {
            document.getElementById("display").innerText = "Tidak bisa dibagi 0";
        } else {
            result = result.toString();
            if (result.includes(".")) {
                result = parseFloat(result).toString();
            }
            document.getElementById("display").innerText = result;
            expression = result;
        }
    } catch (e) {
        document.getElementById("display").innerText = "Error";
        expression = " ";
    }
}
