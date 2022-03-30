function calc() {
    const operacao = Number(prompt('Escolha uma operação:\n 1- Soma(+)\n 2- Subtração(-)\n 3- Multiplicação(*)\n 4- DivisãoReal(/)\n 5- DivisãoInteira(%)\n 6- Potenciação(**)'));

    if (!operacao || operacao >= 7) {
        alert('Erro - Operação inválida!!');
        calc();
    } else {

        let n1 = Number(prompt('Digite o Primeiro Valor: '));
        let n2 = Number(prompt('Digite o Segundo Valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - Parâmetros Inválidos!')
        } else {
            function soma() {
                resultado = n1 + n2;
                //para concatenar a string aqui usa crase mesmo!!!!
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function sub() {
                resultado = n1 - n2;
                //para concatenar a string aqui usa crase mesmo!!!!
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function mult() {
                resultado = n1 * n2;
                //para concatenar a string aqui usa crase mesmo!!!!
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divReal() {
                resultado = n1 / n2;
                //para concatenar a string aqui usa crase mesmo!!!!
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divInt() {
                resultado = n1 % n2;
                //para concatenar a string aqui usa crase mesmo!!!!
                alert(`O resto da Divisão de ${n1} por ${n2} é de: ${resultado}`);
                novaOperacao();
            }

            function pow() {
                resultado = n1 ** n2;
                //para concatenar a string aqui usa crase mesmo!!!!
                alert(`${n1} elevado à ${n2} = ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1- Sim\n 2- Não');
                if (opcao == 1) {
                    calc();
                } else if (opcao == 2) {
                    alert('Até Logo!!!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }


        /* if(operacao  == 1){
            soma();
        }else if(operacao == 2){
            sub();
        }else if(operacao == 3){
            mult();
        }else if(operacao == 4){
            divReal();
        }else if(operacao == 5){
            divInt();
        }else if(operacao == 6){
            pow(); */

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                sub();
                break;
            case 3:
                mult();
                break;
            case 4:
                divReal();
                break;
            case 5:
                divInt();
                break;
            case 6:
                pow();
                break;
        }
    }
}

calc();