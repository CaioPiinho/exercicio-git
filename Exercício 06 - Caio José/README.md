# 📚 Exercícios JavaScript II - Funções e Manipulação de Dados

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)

## 📖 Sobre o Projeto

Este projeto contém uma série de **funções JavaScript** que exploram desde manipulação de strings e arrays até lógicas mais complexas como validação de senha, cifra de César e geração de relatórios. Todas as funções podem ser testadas diretamente no **console do navegador**, sendo ideais para fixar conceitos intermediários da linguagem.

---

## 🎯 O que aprendi com este projeto

### ✅ Conceitos praticados

| Conceito | Onde foi aplicado |
|----------|-------------------|
| **Manipulação de strings** | `inverterString`, `contarVogais`, `ehPalindromo`, `capitalizarPalavras`, `cifrarCesar` |
| **Arrays e métodos** | `dobrarValores` (map), `filtrarMaiores` (filter), `buscarProduto` (find), `removerDuplicados` (Set) |
| **Objetos e arrays de objetos** | `criarAluno`, `buscarContato`, `ordenarPorNota`, `relatorioTurma` |
| **Estruturas condicionais** | `diaDaSemana` (switch), `calculadora` (switch), `verificarAprovacao` (ternário) |
| **Validação e regras** | `validarSenha` (múltiplas condições), `calcularIMC` (if-else encadeado) |
| **Funções de alta ordem** | `map`, `filter`, `find`, `forEach`, `sort` |
| **Template literals** | `gerarMensagem` |

### ✅ Funções desenvolvidas

| Função | Descrição |
|--------|-----------|
| `inverterString(texto)` | Retorna a string invertida |
| `contarVogais(texto)` | Conta vogais (maiúsculas/minúsculas) |
| `ehPalindromo(texto)` | Verifica se é palíndromo (ignora pontuação e case) |
| `capitalizarPalavras(frase)` | Capitaliza a primeira letra de cada palavra |
| `criarAluno(nome, idade, curso)` | Exibe dados do aluno no console |
| `calcularIMC(nome, peso, altura)` | Calcula IMC e mostra classificação |
| `buscarContato(contatos, nome)` | Busca contato por nome (retorna objeto ou null) |
| `diaDaSemana(numero)` | Retorna o dia da semana (1=Domingo, …, 7=Sábado) |
| `calculadora(num1, num2, operacao)` | Realiza operações básicas com tratamento de divisão por zero |
| `verificarAprovacao(nota)` | Retorna "Aprovado" se nota >= 60, senão "Reprovado" |
| `realParaDolar(reais, cotacao)` | Converte real para dólar com duas casas decimais |
| `gerarMensagem(nome, idade, cidade)` | Gera frase usando template literal |
| `dobrarValores(numeros)` | Retorna novo array com cada número dobrado |
| `filtrarMaiores(pessoas)` | Filtra pessoas com idade >= 18 |
| `buscarProduto(produtos, id)` | Busca produto por ID (find) |
| `validarSenha(senha)` | Valida tamanho, maiúscula, minúscula, número – retorna objeto |
| `cifrarCesar(texto, deslocamento)` | Cifra texto com deslocamento (somente letras) |
| `ordenarPorNota(alunos)` | Ordena array de alunos por nota decrescente |
| `removerDuplicados(array)` | Remove valores duplicados usando Set |
| `relatorioTurma(alunos)` | Exibe média, melhor/pior aluno, aprovados (nota >= 60) |

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| **JavaScript (ES6+)** | Lógica das funções |
| **HTML5** | Página base para carregar o script |
| **Console do Navegador** | Execução e testes interativos |

---

## 📁 Estrutura do Repositório
exercicios-js-ii/
│
├── index.html # Página que carrega o script e orienta abrir o console
├── exercicios.js # Todas as funções implementadas
└── README.md # Documentação do projeto

---

## 🚀 Como executar

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/CaioPiinho/exercicio-git/tree/main/Exerc%C3%ADcio%2006%20-%20Caio%20Jos%C3%A9