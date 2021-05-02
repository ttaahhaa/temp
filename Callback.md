# mafraq-assignment
## Callback Function and wrap up the section before
### You have to write a code that checks if you can write a custom counter and compare it with .length property
### push the solution into your repository

1. #### Create an array named _contentArray_ contains
   * 5
   * 6
   * 7
   * "hello"
   * "javascript"

1. ####  Create Three  empty arrays called
   * numArry
   * strungArr
   * UnknownArr

1. ####  Create three counters the initial value of each of them is zero,  and named:
   * numCounter
   * stringCounter
   * UNKCounter

1. ####  Create a function named _switcher_,
   * ##### it takes the following parameters
     * a callback function
     * another callback function
   * ##### inside the function:
     * iterate over the _contentArray_ using _forEach_
     * inside of it
       * create an _arrow_ function takes one parameter 
         * inside the _arrow_ function: 
           1. push the elements that are numbers to the numArry
           1. increment the numCounter one step
           * repeat the steps for string and unknown types
     * call the first callback function and pass the following parametes:
       * the second callback function 
       * and pass the counters 

1. ####  Create a function named _counterPrinter_
   * ##### it takes the following parameters
     * a callback function named _checker_ 
     * count1: its initial value is zero
     * count2: its initial value is zero
     * count3: its initial value is zero
   * ##### inside the function:
     * show the counters in the console log
     * call the  _checker_ and pass the counters to it 

1. ####  Create a function named _counterChecker_
   * let the function check if the passed count1, count2, count3 are equals to numArry, strungArr, UnknownArr respectively 
     * if they are equal show "YES" in the log and "NO" if it is not

1. #### Call the _swithcer_ function using 
      `switcher(counterPrinter, counterChecker)`


