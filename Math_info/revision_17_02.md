# Revision 

- for (int i = 1; i < n; i++) => 1 + 2(n-1) + 2n 

- for (i = 0; i < n; i++) => 1 + 2n + 2n 

- for (i = n; i > 0; i--) => 1 + 2(n+1) + 2n 



currentMax ← A[0]                   2 

for (i = 1;                         1 
     i < n;                         2n
      i = i+ 1 ;                    2(n-1)  
)

	if currentMax < A[i] then       3(n-1)
		currentMax ← A[i]           0

return currentMax                   1 

pire cas : 
2 + 1 + 2n + 2(n-1) + 3(n-1) + 2(n-1) + 1 

4 + 2n + 7(n-1)
4 + 2n + 7n - 7 
9n - 3 

meilleur cas 

2 + 1 + 2n + 2(n-1) + 3(n-1) + 0 + 1 

4 + 2n + 5(n-1)
5n - 5 + 4 + 2n 
7n - 1


n = 5
boucle : 

i= 1 
test 1 < 5 ? => oui 
i++
->  

i=2 
test 2 < 5 ? => oui 
i++
->  

i=3 
test 3 < 5 ? => oui 
i++
->  

i=4 
test 4 < 5 ? => oui 
i++
->  

i=5 
test 5 < 5 ? => non 
arret de la boucle 


--- 

```C
void tri_a_bulles(int T[], int n) { 

    for (int i = n - 1;   // 2  
                i >= 1;   // 2n
                   i--) { // 2(n-1) 
      
        for (int j = 0;   // 1 
                 j < i;   // 2()
                   j++) { // 2

            if (T[j + 1] < T[j]) { // 4  
            
                // échange des deux cases
                int temp = T[j]; // 2  
                T[j] = T[j + 1]; // 4 
                T[j + 1] = temp; // 4 

            }
        }
    }
}
```

MDP FORTIOS : FortiOS123!! 