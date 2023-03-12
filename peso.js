var escolher = document.querySelector('#list')
var valorDigitado = document.querySelector('#valor')
var imprimirTela = document.querySelector('#seuPeso')

function calcular(){
      if(valorDigitado.value == null ||  valorDigitado.value <= 0){
            imprimirTela.innerHTML = 'Por favor, digite um numero maior que Zero'
      }else{
            switch(escolher.value){
                  case "1": 
                        imprimirTela.innerHTML = ` O seu peso na Terra é: ${valorDigitado.value}Kg`
                        break
                  case '2':
                        imprimirTela.innerHTML = ` O seu peso em Jupiter é: ${(valorDigitado.value * 2.34).toFixed(2)}Kg`
                        break
                  case '3':
                        imprimirTela.innerHTML = `O seu peso em Mercurio é: ${(valorDigitado.value * 0.38).toFixed(2)}Kg`
                        break
                  case '4':
                        imprimirTela.innerHTML = `O seu peso em saturno é: ${(valorDigitado.value * 1.06).toFixed(2)}Kg`
                        break
                  case '5':
                        imprimirTela.innerHTML = `O seu peso em Netuno é: ${(valorDigitado.value * 1.19).toFixed(2)}Kg`
                        break
                  case '6':
                        imprimirTela.innerHTML = `O seu peso em Marte é: ${(valorDigitado.value * 0.38).toFixed(2)}Kg`
                        break
                  case '7':
                        imprimirTela.innerHTML = `O seu peso em Venus é: ${(valorDigitado.value * 0.91).toFixed(2)}Kg`
                        break
                  case '8':
                        imprimirTela.innerHTML = `O seu peso em Urano é: ${(valorDigitado.value * 0.92).toFixed(2)}Kg`
                        break
                  default:
                        imprimirTela.innerHTML = 'Por favor, selecione uma das opções da lista!!'
                  }
            }
  
}









