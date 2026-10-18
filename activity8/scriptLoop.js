function showForLoop() {
    let num = parseInt(document.getElementById("num1").value);
    let txt = document.getElementById("txt1").value;
    let output = document.getElementById("output1");

    if (isNaN(num) || num <= 0 || txt === "") {
        output.innerHTML = "Please enter a number greater than 0 and some text.";
        return;
    }

    let result = "";
    for (let i = 1; i <= num; i++) {
        result += i + ". " + txt + "<br>";
    }
    output.innerHTML = result;
}

function clearFields1() {
    document.getElementById("output1").innerHTML = "";
}



function showWhileLoop() {
    let num = parseInt(document.getElementById("num2").value);
    let txt = document.getElementById("txt2").value;
    let output = document.getElementById("output2");

    if (isNaN(num) || num <= 0 || txt === "") {
        output.innerHTML = "Please enter a number greater than 0 and some text.";
        return;
    }

    let result = "";
    let i = 1;               
    while (i <= num) {      
        result += i + ". " + txt + "<br>";
        i++;                
    }
    output.innerHTML = result;
}

function clearFields2() {
    document.getElementById("output2").innerHTML = "";
}


function showDoWhileLoop() {
    let num = parseInt(document.getElementById("num3").value);
    let txt = document.getElementById("txt3").value;
    let output = document.getElementById("output3");

    if (isNaN(num) || txt === "") {
        output.innerHTML = "Please enter a number and some text.";
        return;
    }

    let result = "";
    let i = 1;              
    do {
        result += i + ". " + txt + "<br>";   
        i++;                
    } while (i <= num);      
    output.innerHTML = result;
}

function clearFields3() {
    document.getElementById("output3").innerHTML = "";
}