// DATOS DE ENTRADA Y VARIABLES
const categoria = document.getElementById("txtcategoria");
const txthora = document.getElementById("txthora");
const txtservicio = document.getElementById("txtservicio");
const boton = document.getElementById("btnEnviar");
const resultado = document.getElementById("resultado");

boton.onclick = function(){
// 3-> Definir datos de entrada y variables para realizar el proceso
// PROCESO
let A = 40 = "a";
let B = 35 = "b";
let C = 30 = "c";
let añoservicio1 =0;
let añoservicio2 =0;
let añoservicio3 =0;
let añoservicio4 =0;

// 4-> Implementar el proceso
A = categoria.value;
B = categoria.value;
C = categoria.value;
horastrabajadas = parseInt(txthora.value);

// operacion 1
    if (categoria = "a"){
    salario1 = 40 * txthora;
    }

    else if (categoria = "b"){
    salario2 = 35 * txthora;
    }

    else (categoria = "c")
    salario3 = 30 * txthora;

    // operacion 2
   if (txtservicio >1 <3) {
    salariofinal1 = salario1 * 0.15
    }

   else if (txtservicio >4 <7){
    salariofinal2 = salario2 * 0.2;
    }

    else if (txtservicio >8 <12){
        salariofinal3 = salario2 * 0.3;
    }

    else  (txtservicio >13)
         salariofinal4 = salario2 * 0.35;
     

   

// Resultado
resultado.innerText = "Es" + salariofinal1;
resultado.innerText = "Es" + salariofinal2;
resultado.innerText = "Es" + salariofinal3;
resultado.innerText = "Es" + salariofinal4;
}


