const isPalindrome = (line) => {

  //transformando os números em string e passando letras maiusculas ("A" em "Anna") em letras minusculas 
    let words = line.toString().toLowerCase();

   //fazendo o mesmo, porém criando uma variavel com as Strings ao contrário
     let reverse = line.toString().split('').reverse().join('').toLowerCase();
     
     //usando ternário para comparar as duas variaveis e retornar True para palindromos 
     return words === reverse? true: false
     
   
   }

   //Outra maneira

   /* function isPalindrome(line) {
    return line.toString().toLowerCase() === line.toString().toLowerCase().split("").reverse().join('');
  } */
 
 isPalindrome("Anna")
 isPalindrome("anna")
 isPalindrome(".")
 isPalindrome("pedro")
 isPalindrome(2112)
 isPalindrome(4432)