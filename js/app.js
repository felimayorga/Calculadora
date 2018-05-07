var lista = []

function cambiarTeclaPulsada(elemento) {
	if (elemento.id == "mas") {
		elemento.style.width = "85%"
		elemento.style.height = "95%"
		modificarDisplay(elemento)
	}else if (elemento.id == "1" || elemento.id == "2" || elemento.id == "3" || elemento.id == "0" || elemento.id == "punto" || elemento.id == "igual") {
		elemento.style.width = "27%"
		elemento.style.height = "60px"
		modificarDisplay(elemento)
	}else{
		elemento.style.width = "20%"
		elemento.style.height = "60px"
		modificarDisplay(elemento)
	}
}

function cambiarTeclaSuelta(elemento) {
	if (elemento.id == "mas") {
		elemento.style.width = "90%"
		elemento.style.height = "100%"
	}
	else if (elemento.id == "1" || elemento.id == "2" || elemento.id == "3" || elemento.id == "0" || elemento.id == "punto" || elemento.id == "igual") {
		elemento.style.width = "29%"
		elemento.style.height = "62.91px"
	}else {
		elemento.style.width = "22%"
		elemento.style.height = "62.91px"
	}
}

function modificarDisplay(elemento) {
	var display = document.getElementById("display")

	switch(elemento.id){
		case "on":{
			display.childNodes[0].data = "0"
			lista = []
			break
		}
		case "0":{
			if (display.childNodes[0].data == "0") {
				display.innerHTML = "0"
			} else {
				display.innerHTML += "0"
			}
			break
		}
		case "1":{
			if (display.childNodes[0].data[0] == "0") {
				if (display.childNodes[0].data[1] == ".") {
					display.innerHTML += "1"	
				} else {
					display.childNodes[0].data = ""
					display.innerHTML += "1"
				}
			} else{
				display.innerHTML += "1"
			}
			break
		}
		case "2":{
			if (display.childNodes[0].data[0] == "0") {
				if (display.childNodes[0].data[1] == ".") {
					display.innerHTML += "2"	
				} else {
					display.childNodes[0].data = ""
					display.innerHTML += "2"
				}
			} else{
				display.innerHTML += "2"
			}
			break	
		}
		case "3":{
			if (display.childNodes[0].data[0] == "0") {
				if (display.childNodes[0].data[1] == ".") {
					display.innerHTML += "3"	
				} else {
					display.childNodes[0].data = ""
					display.innerHTML += "3"
				}
			} else{
				display.innerHTML += "3"
			}
			break	
		}
		case "4":{
			if (display.childNodes[0].data[0] == "0") {
				if (display.childNodes[0].data[1] == ".") {
					display.innerHTML += "4"	
				} else {
					display.childNodes[0].data = ""
					display.innerHTML += "4"
				}
			} else{
				display.innerHTML += "4"
			}
			break	
		}
		case "5":{
			if (display.childNodes[0].data[0] == "0") {
				if (display.childNodes[0].data[1] == ".") {
					display.innerHTML += "5"	
				} else {
					display.childNodes[0].data = ""
					display.innerHTML += "5"
				}
			} else{
				display.innerHTML += "5"
			}
			break	
		}
		case "6":{
			if (display.childNodes[0].data[0] == "0") {
				if (display.childNodes[0].data[1] == ".") {
					display.innerHTML += "6"	
				} else {
					display.childNodes[0].data = ""
					display.innerHTML += "6"
				}
			} else{
				display.innerHTML += "6"
			}
			break	
		}
		case "7":{
			if (display.childNodes[0].data[0] == "0") {
				if (display.childNodes[0].data[1] == ".") {
					display.innerHTML += "7"	
				} else {
					display.childNodes[0].data = ""
					display.innerHTML += "7"
				}
			} else{
				display.innerHTML += "7"
			}
			break	
		}
		case "8":{
			if (display.childNodes[0].data[0] == "0") {
				if (display.childNodes[0].data[1] == ".") {
					display.innerHTML += "8"	
				} else {
					display.childNodes[0].data = ""
					display.innerHTML += "8"
				}
			} else{
				display.innerHTML += "8"
			}
			break	
		}
		case "9":{
			if (display.childNodes[0].data[0] == "0") {
				if (display.childNodes[0].data[1] == ".") {
					display.innerHTML += "9"
				} else {
					display.childNodes[0].data = ""
					display.innerHTML += "9"
				}
			} else{
				display.innerHTML += "9"
			}
			break	
		}
		case "punto":{
			validarPunto(display)
			break
		}
		case "mas":{
			var num = Number(display.childNodes[0].data)
			lista.push(num)
			lista.push("+")
			display.childNodes[0].data = ""			
			break
		}
		case "menos":{
			var num = Number(display.childNodes[0].data)
			lista.push(num)
			lista.push("-")
			display.childNodes[0].data = ""
			break
		}
		case "por":{
			var num = Number(display.childNodes[0].data)
			lista.push(num)
			lista.push("*")
			display.childNodes[0].data = ""	
			break
		}
		case "dividido":{
			var num = Number(display.childNodes[0].data)
			lista.push(num)
			lista.push("/")
			display.childNodes[0].data = ""
			break
		}
		case "igual":{
			var num = Number(display.childNodes[0].data)
			lista.push(num)
			operar(lista, display)
			break
		}
		case "sign":{
			var pantalla = display.childNodes[0].data

			if (display.childNodes[0].data != "0") {
				if (display.childNodes[0].data[0] == "-") {
					pantalla = display.childNodes[0].data.slice(1)
					display.childNodes[0].data = pantalla
				}else {
					display.childNodes[0].data = "-"+pantalla	
				}
			}
			break
		}
	}
}

function operar(lista, display) {
	var resultado = 0

	switch(lista[1])
	{
		case "+":{
			resultado = lista[0] + lista[2]
			display.childNodes[0].data = resultado
			break
		}
		case "-":{
			resultado = lista[0] - lista[2]
			display.childNodes[0].data = resultado
			break	
		}
		case "*":{
			resultado = lista[0] * lista[2]
			display.childNodes[0].data = resultado
			break
		}
		case "/":{
			resultado = lista[0] / lista[2]
			display.childNodes[0].data = resultado
			break
		}
	}
}

function validarPunto(display) {
	var puntos = 0
	for(var i=0; i<display.childNodes[0].length; i++){
		if(display.childNodes[0].data[i] == "."){
			puntos++
		}
	}

	if (puntos < 1) {
			display.innerHTML+= "."
			puntos++
		}
}

function validarDigitos() {
	var display = document.getElementById("display"), pantalla = "", puntos = 0

	for(var i=0; i<display.childNodes[0].length; i++){
		if(display.childNodes[0].data[i] == "."){
			puntos++
		}
	}

	if(display.childNodes[0].length > 8){
		if(display.childNodes[0].data[0] == "-" && puntos == 1) {
			pantalla = display.childNodes[0].data.slice(0, 10)
			display.childNodes[0].data = pantalla
		}else if(puntos == 1){
			pantalla = display.childNodes[0].data.slice(0, 9)
			display.childNodes[0].data = pantalla
		}else if(display.childNodes[0].data[0] == "-"){
			pantalla = display.childNodes[0].data.slice(0, 9)
			display.childNodes[0].data = pantalla	
		}else{
			pantalla = display.childNodes[0].data.slice(0, 8)
			display.childNodes[0].data = pantalla	
		}
	}
}

var calculadora = {
 	init: function() {
 		this.asignarEventosTeclas("tecla")
 	},
 	asignarEventosTeclas: function (selector) {
 		var teclas = document.getElementsByClassName(selector)

 		for(var i=0; i<teclas.length; i++){
 			teclas[i].onmousedown = this.eventoTeclaPulsada
 			teclas[i].onmouseup = this.eventoTeclaSuelta
 		}	
 	},
 	eventoTeclaPulsada: function(event) {
 		cambiarTeclaPulsada(event.target)
 		validarDigitos()
 	},
 	eventoTeclaSuelta: function(event){
 		cambiarTeclaSuelta(event.target)
 	}
}

calculadora.init()
