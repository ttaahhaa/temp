# mafraq-assignment
## Problem solving -1
### Abbriviations
### push the solution into your repository

Sometimes some words like "localization" or "internationalization" are so long that writing them many times in one text is quite tiresome.

Let's consider a word too long, if its length is **strictly more** than 10 characters. All too long words should be replaced with a special abbreviation.

This abbreviation is made like this: we write down the first and the last letter of a word and between them we write the number of letters between the first and the last letters. That number is in decimal system and doesn't contain any leading zeroes.

Thus, "localization" will be spelt as "l10n", and "internationalization» will be spelt as "i18n".

You are suggested to automatize the process of changing the words with abbreviations. At that all too long words should be replaced by the abbreviation and the words that are not too long should not undergo any changes.


* ##### create a function that accepts an array of inputs e.g. 
  * each element in the array is a single world. All the words consist of lowercase Latin letters and possess the lengths of from 1 to 100 characters.
      [ word,
        localization,
        internationalization,
        pneumonoultramicroscopicsilicovolcanoconiosis]

* ##### Return an array that contains the output e.g.
     * word 
     * l10n 
     * i18n
     * p43s
  
* ##### Assign the returened array to a variable named _abrv_
* ##### Loop over the _abrv_ and log them in the console in this format 
  1. word
  2. l10n
  3. i18n
  4. p43s