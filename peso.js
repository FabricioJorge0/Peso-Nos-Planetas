var escolher = document.querySelector('#list')
var valorDigitado = document.querySelector('#valor')
var imprimirTela = document.querySelector('#seuPeso')

function calcular(){
      if(valorDigitado.value == null ||  valorDigitado.value <= 0){
            imprimirTela.innerHTML = 'Por favor, digite um numero maior que Zero'
      }else{
            switch(escolher.value){
                  case "1": 
                        imprimirTela.innerHTML = ` O seu peso na Terra é: ${(valorDigitado.value * 9.81).toFixed(2)}N`
                        break
                  case '2':
                        imprimirTela.innerHTML = ` O seu peso em Jupiter é: ${(valorDigitado.value * 24.79).toFixed(2)}N`
                        break
                  case '3':
                        imprimirTela.innerHTML = `O seu peso em Mercurio é: ${(valorDigitado.value * 3.78).toFixed(2)}N`
                        break
                  case '4':
                        imprimirTela.innerHTML = `O seu peso em saturno é: ${(valorDigitado.value * 10.5).toFixed(2)}N`
                        break
                  case '5':
                        imprimirTela.innerHTML = `O seu peso em Netuno é: ${(valorDigitado.value * 10.8).toFixed(2)}N`
                        break
                  case '6':
                        imprimirTela.innerHTML = `O seu peso em Marte é: ${(valorDigitado.value * 3.72).toFixed(2)}N`
                        break
                  case '7':
                        imprimirTela.innerHTML = `O seu peso em Venus é: ${(valorDigitado.value * 8.60).toFixed(2)}N`
                        break
                  case '8':
                        imprimirTela.innerHTML = `O seu peso em Urano é: ${(valorDigitado.value * 8.50).toFixed(2)}N`
                        break
                  default:
                        imprimirTela.innerHTML = 'Por favor, selecione uma das opções da lista!!'
                  }
            }
  
}









