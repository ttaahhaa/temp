# Vanya and Fence
## Problem solving -3
### push the solution into your repository

Vanya and his friends are walking along the fence of height _h_ and they do not want the guard to notice them. In order to achieve this the height of each of the friends should not exceed _h_. If the height of some person is greater than _h_ he can bend down and then he surely won't be noticed by the guard. The height of the _i-th_ person is equal to _αi_.
Consider the width of the person walking as usual to be equal to 1, while the width of the bent person is equal to 2. Friends want to talk to each other while walking, so they would like to walk in a single row. What is the minimum width of the road, such that friends can walk in a row and remain unattended by the guard?
---
Input
The first line of the input contains two numbers _n_ and _h_ (1 ≤ _n_ ≤ 1000, 1 ≤ _h_ ≤ 1000) — the number of friends and the height of the fence, respectively. (Store each of the inputs in a variable)
The second line contains n integers ai (1 ≤ _αi_ ≤ 2h), the _i-th_ of them is equal to the height of the _i-th_ person. (store them in an array)
---
Output
Print a single integer in the console-log — the minimum possible valid width of the road.
---
Examples...

##### input
###### 3 7
###### 4 5 14
##### output
###### 4
----
##### input
###### 6 1
###### 1 1 1 1 1 1
##### output
###### 6
---
##### input
###### 6 5
###### 7 6 8 9 10 5
##### output
###### 11
---
#### Note
* In the first sample, only person number 3 must bend down, so the required width is equal to 1 + 1 + 2 = 4.

* In the second sample, all friends are short enough and no one has to bend, so the width 1 + 1 + 1 + 1 + 1 + 1 = 6 is enough.

* In the third sample, all the persons have to bend, except the last one. The required minimum width of the road is equal to 2 + 2 + 2 + 2 + 2 + 1 = 11.
