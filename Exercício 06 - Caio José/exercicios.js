function inverterString(texto) {
return texto.split("").reverse().join("");
}

function contarVogais(texto) {
  const vogais = texto.match(/[aeiouAEIOU]/g);
  return vogais ? vogais.length : 0;
}

function ehPalindromo(texto) {
  const textoLimpo = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
  const textoInvertido = textoLimpo.split('').reverse().join('');
  return textoLimpo === textoInvertido;
}

function capitalizarPalavras(frase) {
  return frase
    .split(' ')
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
    .join(' ');
}

function criarAluno(nome, idade, curso) {
  console.log("Aluno: " + nome +
    "\nIdade: " + idade +
    "\nCurso: " + curso)
}

function calcularIMC(nome, peso, altura) {
  const imc = peso / (altura * algura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do Peso";
  else if (imc < 25) classificacao = "Peso Normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else classificacao = "Obesidade";

  console.log("Nome: " + nome +
    "\nIMC: " + imc.toFixed(2) +
    "\nClassificação: " + classificacao);
}

function buscarContato(contato, nome) {
  return contato.find(contato => contato.nome === nome) || null;
}

let contatos = [
  { nome: "Ana", telefone: "1111-1111" },
  { nome: "Bruno", telefone: "2222-2222" },
  { nome: "Carlos", telefone: "3333-3333" }
];

function diaDaSemana(numero) {
  switch (numero) {
    case 1: return "Domingo";
    case 2: return "Segunda-Feira";
    case 3: return "Terça-Feira";
    case 4: return "Quarta-Feira";
    case 5: return "Quinta-Feira";
    case 6: return "Sexta-Feira";
    case 7: return "Sábado";
    default: return "Dia Inválido";  
  }
}


function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/':
    if (num2 === 0) return "Erro: Divisão por zero";
    return num1 / num2;
    default: return "Operação Inválida";
  }
}

function verificarAprovacao(nota) {
  return nota >= 60 ? "Aprovado" : "Reprovado";
}

const realParaDolar = (reais, cotacao) => +(reais / cotacao).toFixed(2);

const gerarMensagem = (nome, idade, cidade) => `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;

function dobrarValores(numeros) {
  return numeros.map(numero => numero * 2);
}

function filtrarMaiores(pessoas) {
  return pessoas.filter(pessoa => pessoa.idade >= 18);
}

let pessoas = [
  { nome: "Ana", idade: 22 },
  { nome: "Bruno", idade: 15 },
  { nome: "Carlos", idade: 30 },
  { nome: "Diana", idade: 17 }
];

function buscarProduto(produtos, id) {
  return produtos.find(produtos => produtos.id === id) || null;
}

let produtos = [
    { id: 1, nome: "Camiseta", preco: 49.90 },
    { id: 2, nome: "Calça", preco: 89.90 },
    { id: 3, nome: "Tênis", preco: 199.90 }
];

function validarSenha(senha) {
  let erros = [];

  if (senha.length < 8) erros.push("A senha deve ter pelo menos 8 caracteres.");
  if (!/[A-Z]/.test(senha)) erros.push("A senha deve conter pelo menos uma letra maiúscula.");
  if (!/[a-z]/.test(senha)) erros.push("A senha deve conter pelo menos uma letra minúscula.");
  if (!/[0-9]/.test(senha)) erros.push("A senha deve conter pelo menos um número.");
  return {
    Valida: erros.length === 0,
    erros: erros
  };
}

function cifrarCesar(texto, deslocamento) {
    return texto.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const codigoAscii = char.charCodeAt(0);
            const ehMaiuscula = codigoAscii >= 65 && codigoAscii <= 90;
            const base = ehMaiuscula ? 65 : 97;
          
            return String.fromCharCode(((codigoAscii - base + deslocamento) % 26) + base);
        }
        return char;
    }).join('');
}

function ordenarPorNota(alunos) {
    return [...alunos].sort((a, b) => b.nota - a.nota);
}

function removerDuplicados(array) {
    return [...new Set(array)];
}

function relatorioTurma(alunos) {
    if (alunos.length === 0) return "Turma vazia";
    
    let soma = 0;
    let aprovados = 0;
    let melhor = alunos[0];
    let pior = alunos[0];

    alunos.forEach(aluno => {
        soma += aluno.nota;
        if (aluno.nota >= 60) aprovados++;
        if (aluno.nota > melhor.nota) melhor = aluno;
        if (aluno.nota < pior.nota) pior = aluno;
    });

    const media = soma / alunos.length;

    console.log(`Média da turma: ${media}`);
    console.log(`Melhor aluno: ${melhor.nome} (${melhor.nota})`);
    console.log(`Pior aluno: ${pior.nome} (${pior.nota})`);
    console.log(`Aprovados: ${aprovados}`);
}

function ordenarPorNota(alunos) {
  return [...alunos].sort((a,b) => b.nota - a.nota);
}

let alunos = [
    { nome: "Ana", nota: 7.5 },
    { nome: "Bruno", nota: 9.0 },
    { nome: "Carlos", nota: 6.0 },
    { nome: "Diana", nota: 8.5 }
];

function removerDuplicados(array) {
  return [...new Set(array)];
}

function relatorioTurma(alunos) {
  let somaNotas = 0;
  let aprovados = 0;
  let melhorAlunos = alunos[0];
  let piorAlunos = alunos[0];
  
  alunos.forEach(aluno => {
    somaNotas += aluno.nota;

    if (aluno.nota >= 60) {
      aprovados++;
    }
    if (aluno.nota > melhorAlunos.nota) {
      melhorAluno = aluno;
    }
    if (aluno.nota < piorAlunos.nota) {
      piorAluno = aluno;
    }
  });

  const media = somaNotas / alunos.length;

  console.log(`Média da turma: ${media.toFixed(2)}`);
  console.log(`Melhor aluno: ${melhorAluno.nome} (${melhorAluno.nota})`);
  console.log(`Pior aluno: ${piorAluno.nome} (${piorAluno.nota})`);
  console.log(`Aprovados: ${aprovados}`);
} 

let turma = [
    { nome: "Ana", nota: 85 },
    { nome: "Bruno", nota: 42 },
    { nome: "Carlos", nota: 70 },
    { nome: "Diana", nota: 95 },
    { nome: "Eduardo", nota: 55 }
];