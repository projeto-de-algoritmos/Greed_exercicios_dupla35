# Nome do Exercício 
134. Gas Station (Posto de gasolina)



[Link para o exercício](https://leetcode.com/problems/gas-station/description/)

# Explicação
 
O exercício consiste em receber um array com quantidades de combustível disponíveis em postos de gasolina que se encontram em uma rota circular e outro array com o custo de combustível para ir de um posto para o posto seguinte. O problema pede que encontremos um posto de partida que permita que nós consigamos dar uma volta completa no sentido horário nessa rota circular sem que o combustível acabe.

Examplo:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3


# O que foi utilizado para resolver

O algoritmo utilizado foi uma solução semelhante ao "algoritmo do caminhoneiro" apresentado em aula pelo professor, aonde a cada iteração a quantidade atual e total de combustível gasto são atualizadas, de forma que, caso o combustível acabe, outro posto é selecionado como ponto de partida.
