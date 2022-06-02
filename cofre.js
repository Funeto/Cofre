var regrascertas = 0;
function conferir(){
	regrascertas = 0;
	var mensagem1 = document.getElementById("valida");
	var mensagem2 = document.getElementById("invalida");
	mensagem1.style.display = "none";
	mensagem2.style.display = "none";
	var input = document.getElementById('senha');
	var senha = input.value;
	teste = regra1(senha);
	imprimir(teste, "1");
	teste = regra2(senha);
	imprimir(teste, "2");
	teste = regra3(senha);
	imprimir(teste, "3");
	teste = regra4(senha);
	imprimir(teste, "4");
	teste = regra5(senha);
	imprimir(teste, "5");
	if (regrascertas == 5) {
		mensagem1.style.display = "block";
	} else {
		mensagem2.style.display = "block";
	}
}

function imprimir(teste, vez) {
	if (teste) {
		/*alert("Passou pela regra "+vez)*/
		regrascertas += 1;
	} else {
		/*alert("NAO passou pela regra "+vez)*/
		return
	}
}

function regra1(senha){
	var tamanho = senha.length;
	if (tamanho >=8 && tamanho <= 14) {
		return true;
	} else {
		return false;
	}
}

function regra2(senha){
	var char1 = senha[0];
	var exp1 = /^[a-z]/
	var exp2 = /^[A-Z]/
	var casou1 = exp1.test(char1);
	var casou2 = exp2.test(char1);
	if (casou1 || casou2) {
		return true;
	} else {
		return false;
	}
}

function regra3(senha){
	var exp = /\!|\@|\#|\$/ig
	var resultado = senha.match(exp);
	if (resultado == null) {
		return false;
	} else if (resultado.length >= 2) {
		return true;
	} else if(resultado == undefined){
		return false;
	}
}

function regra4(senha){
	var exp3 = /[a-z]/
	var exp4 = /[A-Z]/
	var casou3 = exp3.test(senha);
	var casou4 = exp4.test(senha);
	if (casou3 == null || casou4 == null) {
		return false;
	} else if (casou3 && casou4) {
		return true;
	} else {
		return false;
	}
}

function regra5(senha){
	var exp5 = /[0-9]/ig
	var resultado2 = senha.match(exp5);
	if (resultado2 == null) {
		return false;
	} else if (resultado2.length >= 2) {
		return true;
	} else {
		return false;
	}
}