import entradaDados from 'readline-sync';


let inflacao_lista = [
    { inflacao: 5.91, ano: 2010 },
    { inflacao: 6.50, ano: 2011 },
    { inflacao: 5.84, ano: 2012 },
    { inflacao: 5.91, ano: 2013 },
    { inflacao: 6.41, ano: 2014 },
    { inflacao: 10.67, ano: 2015 },
    { inflacao: 6.29, ano: 2016 },
    { inflacao: 2.95, ano: 2017 },
    { inflacao: 3.75, ano: 2018 },
    { inflacao: 4.31, ano: 2019 },
    { inflacao: 4.53, ano: 2020 }
]

let salario_lista = [
    { salario: 510, ano: 2010 },
    { salario: 540, ano: 2011 },
    { salario: 622, ano: 2012 },
    { salario: 678, ano: 2013 },
    { salario: 724, ano: 2014 },
    { salario: 788, ano: 2015 },
    { salario: 880, ano: 2016 },
    { salario: 937, ano: 2017 },
    { salario: 954, ano: 2018 },
    { salario: 998, ano: 2019 },
    { salario: 1045, ano: 2020 }
]

let labelAno = 'Ano:'
let labelSalario = 'Salario minimo:'
let labelInfracao = 'inflação IPCA:'
let crescimento = 'Crescimento salarial:'

console.log("Escolha uma opção:\n");
console.log("1 - Listar o histórico do salário mínimo");
console.log("2 - Listar o histórico da taxa IPCA (inflação)");
console.log("3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)");

let escolha = entradaDados.question("\nDigite a opcao que deseja: \n");

if (escolha == 1) {

    for (let i = 0; i < salario_lista.length; i++) {
        
        let anoSalario = salario_lista[i].ano;
        let salarioMinimo = salario_lista[i].salario;
        
        let valorFormatadoSalario = salarioMinimo.toFixed(2).replace('.', ',');
        console.log(labelAno.padEnd(30, '.') + ` ${anoSalario}`)
        console.log(labelSalario.padEnd(30, '.') + ` R$ ${valorFormatadoSalario}\n`)
    }

}
else if (escolha == 2) {

    for (let i = 0; i < inflacao_lista.length; i++) {

        let anoInfracao = inflacao_lista[i].ano;
        let inflacaoPorAno = inflacao_lista[i].inflacao;
        
        let valorFormatadoInfracao = inflacaoPorAno.toFixed(2).replace('.', ',');
        console.log(labelAno.padEnd(30, '.') + ` ${anoInfracao}`)
        console.log(labelInfracao.padEnd(30, '.') + ` ${valorFormatadoInfracao}%\n`)

    }

}
else if (escolha == 3) {
    
    for (let i = 0; i < salario_lista.length; i++) {
        let anoSalario = salario_lista[i].ano;
        let salarioMinimo = salario_lista[i].salario;
        let inflacaoPorAno = inflacao_lista[i].inflacao;
        let crescimentoFormatado

        if (i > 0 ) {
            let salarioAnterior = salario_lista[i - 1].salario
            let diferencia = salario_lista[i].salario - salarioAnterior
            
            let percentual = (diferencia / salarioAnterior) * 100;
            crescimentoFormatado = percentual.toFixed(2).replace(".",",")+"%";
        }
        else{
            crescimentoFormatado = '-'
        }

        let valorFormatadoInfracao = inflacaoPorAno.toFixed(2).replace('.', ',');
        let valorFormatadoSalario = salarioMinimo.toFixed(2).replace('.', ',');

        console.log('\n' + labelAno.padEnd(30, '.') + ` ${anoSalario}`)
        console.log(labelSalario.padEnd(30, '.') + ` R$ ${valorFormatadoSalario}`)
        console.log(crescimento.padEnd(30, '.') + ` ${crescimentoFormatado}` )
        console.log(labelInfracao.padEnd(30, '.') + ` ${valorFormatadoInfracao}%\n`)
    }
    
    
}
else {
    console.log('opcao invalida')
}

