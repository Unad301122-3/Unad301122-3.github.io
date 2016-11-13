function validar_actividad1(){
var campo_correcto = document.getElementById("cb1");
var campo_correcto2 = document.getElementById("cb5");
var calificacion="";
if (campo_correcto.checked&&campo_correcto2.checked) {
	calificacion="Has respondido 2/2 preguntas correctamente, ¡Felicidades!"
}else if (campo_correcto.checked||campo_correcto2.checked){
	calificacion="Has respondida 1/2 preguntas correctamente, ¡Sigue Intentando!"
}else{
	calificacion="Has respondida 0/2 preguntas correctamente, ¡Sigue Intentando!"
};
alert(calificacion);
};

function validar_actividad2(){
var campo_correcto = document.getElementById("cb1");
var campo_correcto2 = document.getElementById("cb5");
var calificacion="";
if (campo_correcto.checked&&campo_correcto2.checked) {
	calificacion="Has respondido 2/2 preguntas correctamente, ¡Felicidades!"
}else if (campo_correcto.checked||campo_correcto2.checked){
	calificacion="Has respondida 1/2 preguntas correctamente, ¡Sigue Intentando!"
}else{
	calificacion="Has respondida 0/2 preguntas correctamente, ¡Sigue Intentando!"
};
alert(calificacion);
};

function validar_actividad3(){
var campo_correcto = document.getElementById("cb1");
var campo_correcto2 = document.getElementById("cb5");
var calificacion="";
if (campo_correcto.checked&&campo_correcto2.checked) {
	calificacion="Has respondido 2/2 preguntas correctamente, ¡Felicidades!"
}else if (campo_correcto.checked||campo_correcto2.checked){
	calificacion="Has respondida 1/2 preguntas correctamente, ¡Sigue Intentando!"
}else{
	calificacion="Has respondida 0/2 preguntas correctamente, ¡Sigue Intentando!"
};
alert(calificacion);
};
