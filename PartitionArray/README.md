# Nome do Exercício 
2294. Partition Array Such That Maximum Difference Is K (Matriz de partição de modo que a diferença máxima seja K)

[Link para o exercício](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/)

# Explicação

O exercício consiste em receber um array e um número inteiro, onde pode-se particonar o array em subsequências de forma a fazer que cada elemento do vetor apareca em uma das subsequências. Deve-se retornar o valor mínimo de subsequências de modo em que a diferença entre os valores seja no máximo o indicado na entrada. Pode-se derivar uma subsequência da outra, excluindo alguns ou nenhum elemnto sem alterar o ordem dos que sobraram.

Exemplo:

Input: nums = [3,6,1,2,5], k = 2
Output: 2


# O que foi utilizado para resolver

Para realizar o exercício, foi feita a implementação do Algoritmo de Intervalo de Partição, onde inicialmente é feita a ordenação do vetor, e foram criadas variáveis que vão guardar o mínimo de subsequências e o que tem atualmente para ir sendo feita a comparação. Percorrendo o vetor, verifica-se se a diferença entre o valor atual e o menor guardado é menor ou igual ao da condição para incluir. É feita contagem de quantas subsequências são necessárias para incluir todos os valores.