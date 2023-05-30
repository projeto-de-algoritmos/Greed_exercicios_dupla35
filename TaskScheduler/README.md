# Nome do Exercício 
621. Task Scheduler (Escalonador de tarefas)




[Link para o exercício](https://leetcode.com/problems/task-scheduler/)

# Explicação
 
É dado um array de tarefas que devem ser processadas representado por letras e um inteiro n que representa o tempo ocioso entre o término de uma tarefa que é igual a outra, como as tarefas "A" em um array ["A","A","A","B","C"]. Cada tarefa custa 1 unidade de tempo para ser feita, enquanto o tempo ocioso custa 2 unidades. O objetivo é resolver todas as tarefas de forma que seja gasto o mínimo de tempo possível (as tarefas não têm que ser feitas na ordem que estão no array).

Examplo:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3


# O que foi utilizado para resolver

Para solucionar esse problema foi utilizada uma implementação parecida com a do Interval Scheduling mostrada em sala, de forma que as tarefas primeiramente foram ordenadas por frequência em ordem decrescente, depois contando as tarefas que possuem a mesma frequência máxima para finalmente calcular o tempo total da execução de todas as tarefas da forma que ficaram dispostas juntamente com os tempos ociosos.