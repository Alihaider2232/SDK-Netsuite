//1. ways to print in JavaScript
        //console.log("Hello world");
        // alert("me")
//document.write("this is document write")

       //2. Javascript console API
      //  Console.log("Hello world");
       // Console.warn("this is warning");
       // Console.error("This is an error");
       // What are variables?- Containers to store data values

       /*
       multi
       line
       commment
       */

       var number1 = 34;
       var number2 = 56;
       //console.log(number1 + number2);

       //4.Data types in JavaScript
       // Number
       var num1 = 455;
       var num2 = 56.76;

       //string
       var str1 = "This is a string";
       var str2 = 'This is also a string';

       //Object
       var marks = {
           Ali: 34,
           Ahmad:78,
           awais:99.97
       }
       //console.log(marks);

       //Booleans
       var a = true;
       var b = false;
       //console.log(a,b);

       // var und = undefined;
       var und;
       //console.log(und);

       var n = null;
       //console.log(n);
       
       /*
       At a very high level,there are two types of data types in javaScript.
       1.Primitive data types: undefined,null, string,boolean,symbol
       2.Reference data types: Arrays and Objects
        */

       var arr = [1,2,"babu",4,5]
       //console.log(arr)

       //Operators in JavaScript
       // Arithmetic operators
       var a = 34;
       var b = 56;
       console.log("The value of a+b is ", a+b);
       console.log("The value of a-b is ", a-b);
       console.log("The value of a*b is ", a*b);
       console.log("The value of a/b is ", a/b);

       //Assigment Operators
       var c = b;
       // c += 2;
       // c -= 2; // c = c - 2;
       // c *= 2;
       // c /= 2;
       // console.log(c);

       // Comparison Operators
       var x = 34;
       var y = 56;
       //console.log(x==y);
       //console.log(x>=y);
       //console.log(x<=y);
       //console.log(x>y);
       //console.log(x<y);

       // Logical Operators

       //console.log(true && true)
       //console.log(true && false)
       //console.log(false && true)
       //console.log(false && false)

       //console.log(true || true)
       //console.log(true || false)
       //console.log(false || true)
       //console.log(false || false)

       // console.log(!false);
       // console.log(!true);

       // Function in javascripts
       function avg(a, b){
           c = (a + b)/2;
           return c;
       }

       // DRY = Do not repeat yourself
       c1 = avg(4, 6);
       c2 = avg(14, 16);
       // console.log(c1, c2);

       //conditionals in javaScript
