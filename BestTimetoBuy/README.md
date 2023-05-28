# Nome do Exercício 
714. Best Time to Buy and Sell Stock with Transaction Fee ( Melhor momento para comprar e vender ações com taxa de transação)


[Link para o exercício](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

# Explicação
 
O exercício consiste em receber uma matriz de preços de uma ação e uma taxa de transação e encontrar o lucro máxomo que se pode obter, sem realizar transações simultâneas, precisa primeiro vender uma ação antes de comprá-la de novo.

Examplo:

Input: prices = [1,3,2,8,4,9], fee = 2
Output: 8


# O que foi utilizado para resolver

Foi utilizado o Algoritmo de Agendamento de Intervalo, onde a função recebe a matriz de preços e a taxa e usa uma variável para ir recebendo os preços de compra inicial e outra com os lucros. Dentro do loop, os preços são percorridos, e caso o preço atual seja menor que o de compra autal, altera-se o valor da variável para o novo preço de compra, caso contrário, a ação é vendida e o lucro atualizado. No final, retorna-se o variável de lucro com o máximo que se pode obter.

