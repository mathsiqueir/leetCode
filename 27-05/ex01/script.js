function specialArray(nums) {
	let n = nums.length;
	console.log("tamanho da matriz "+n+"\n")
	for (let x = 0; x <= n; x++) {
			// Contar quantos números são maiores ou iguais a x
			let count = 0;
			for (let num of nums) {
					if (num >= x) count++;
					console.log("Valor de Num:"+num)
					console.log("valor de X:"+x)
			}
			
			// Verificar se a contagem é igual a x
			if (count === x) return x;
	}
	
	return -1; // Se não encontramos tal x, retornamos -1
}

// Teste com os exemplos fornecidos

console.log(specialArray([3])); // Output: 2
console.log("-------------------")
console.log(specialArray([0, 0])); // Output: -1
console.log("-------------------")
console.log(specialArray([0,1,2,3])); // Output: 3
