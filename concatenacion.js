saludo = "Hola pedro ";
pregunta = "Como estas?";

frase = saludo + pregunta; //cocatenamos dos cadenas de string

document.write(frase);

//forazar un string

numero1 = 5;
numero2 = 8;
numero3 = "15";

frase2 = "" + numero1 + numero2; //fozramos para que los numeros no se sumen y solo se muestren 
document.write(frase2);

frase3 = numero3.concat(numero3);//Para usar el concat solo funciona con cadenas de string

//Concatenacion con Bcktiks o acentos graves para concatenar
nombre = "lucas moreno";
frase = `soy ${nombre} y estoy camionando`;
document.write(frase);