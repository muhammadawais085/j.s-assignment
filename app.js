// // *****alerts*****

// // task 1
alert("Hello Visitors")

// // task 2
alert("Error! Please enter a valid password")

// // task 3
alert("Helcome to Js land.. \nHappy coding!")

// // task 4
alert("Welcome to JS Land..")

// // task 5
alert("Happy Coding\nPrevent this page from creating additional dilogs")

// *****variables*****

// // task1
var username

// // task 2
var myName = "m.awais"

// // task 3
var message = "Hello World!"
alert(message)

// // task 4
var bio = ["John Doe","15 years old","Certified Mobile Application Development"]
for(i=0; i <= 2; i++)
{
    alert(bio[i])
} 

// // task 5
var j = 4;
var p = "pizza";
for(var i = 0; i <= 4; i++)
{
    alert(p);
    p = p.slice(0, j);
    j--;
}

// // task 6
var email = "awaishanif085@gmail.com"
alert("my email address is " + email)

// // task 7
var book =  "A smarter way to learn JavaScript"
alert("I'm trying to learn from the book " + book)

// // task 8
// document.write("Yah! i can write HTML content through javascript")

// // task 9
alert(" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ");

// ******variables for numbers*******

// // task 1
var age = 22;
alert("I am " + age + " years old")

// // task 2
// var c = document.cookie("username = awais; expires=Thu, 5 Jun 2020 12:00:00 UTC; ")
// alert(c)

// // task 3
var birthYear = 1998
document.write("My birth year is " + String(birthYear) + " <br/> Data type of my declared variable is " + typeof birthYear)

// // task 4
var name, prod, quant;
name = prompt("Enter your name")
prod = prompt("What product do you want to buy?")
quant = prompt("Type in product quantity")

var a = name.charAt(0).toUpperCase()
var b = name.slice(1, name.length + 1)
name = a + b
    
document.write( "<br/><br/>" + name + " ordered " + quant + " " + prod + "(s) on XYZ Clothing Store" )

// ***** var names legal/illegal *****

// // task 1
var var1, var2, var3;

// // task 2
// var Ali, Paki$tan, bookName, hello_brother, abc123;
// var alert, "Paki$tan" , bookName, hello-brother, 123abc;

// task 3
document.write("<br> <h1> Rules for naming JS variables </h1><br> Variable names can only contain numbers, $, alphabets, and underscores. For example: $my_1stVariable <br> Variables must begin with a letter, $, or underscore.  For example $name, _name or name <br> Variable names are case sensitive. <br> Variable names should not be JS keywords")

// // ***** maths expression *****

// // task 1
var a, b
a = +prompt("Enter 1st number to add")
b = +prompt("Enter 2nd number to add")
c = a + b
document.write("<br>The sum of " + a + " and " + b + " is " + c )

// // task 2

d = a - b
document.write("<br>The difference of " + a + " and " + b + " is " + d )


e = a * b
document.write("<br>The product of " + a + " and " + b + " is " + e )


f = a / b
document.write("<br>The quotient of " + a + " and " + b + " is " + f )


g = a % b
document.write("<br>The remainder of " + a + " and " + b + " is " + g )


// // task 3

var m 
document.write(" <br> Value after variable declaration is: " + m)

m = 349
document.write("<br>Initial value: " + m)

m++
document.write("<br>Value after increment is: " + m)

m += 7
document.write("<br>Value after addition is: " + m)

m--
document.write("<br>Value after decrement is: " + m)

m = m % 3
document.write("<br>The remainder is : " + m)

// // task 4

var cost = 600
tickets = +prompt("How many tickets do you wanna buy?")
total = cost * tickets
document.write("<br> Total cost to buy " + tickets + " tickets to a movie is " + total + " PKR")

// task 5
var a, i, m
a = 9
for(i = 1; i <= 10; i++){
    m = a * i 
    document.write("<br>" + a + " x " + i + " = " + m)
}

// // task 6

var c, f
c = 40
f = ((c * (9/5)) + 32)
document.write("<br>" + c + "C is " + f + "F")

var a,b
a = 97
b = ((a - 32) * (5/9))
document.write("<br>" + a + "F is " + b + "C")

// // task 7

document.write("<br> <h1> Shopping Cart </h1>")
var item1 = 650, item2 = 100, qItem1 = 3, qItem2 = 7, sCharges = 100, total 
total = ((item1*qItem1) + (item2*qItem2) + sCharges)

document.write("<br>  Price of item 1 is " + item1)
document.write("<br>  Quantity of item 1 is " + qItem1)
document.write("<br>  Price of item 2 is " + item2)
document.write("<br>  Quantity of item 2 is " + qItem2)
document.write("<br>   Shipping charges " + sCharges)
document.write("<br><br> Total cost of your order is " + total)

// task 8
document.write("<h1> <br> Marks Sheet </h1>")
var total, obt, perc
total = 980
obt = 804
perc = ((obt/total) * 100)

document.write("<br> Total Marks: " + total)
document.write("<br> Obtained Marks: " + obt)
document.write("<br> Percentage: " + perc + " %")

// task 9
document.write("<h1> <br> currency converter </h1>")
var c,s,p;
c = 10*104.80;
s = 25*28;
p = ((c+s)) 

document.write("<br> Total currency in PKR:" + p)

// task 10
document.write("<h1> <br> sequence </h1>")
var a = 2;
var b = (a+5*10/2)
document.write("<br>" + b)

// task 11
document.write("<h1> <br> Age Calculator </h1>")
var current  = 2020;
var birth  = 1998;
var  age = (current-birth)

// task 12
document.write("<h1> <br> The Geometrizer </h1>")
var r = 20;
var c = (2*3.142*20);
var a = (3.142*20*20);
document.write("<br> Radius of a circle is: " + r)
document.write("<br> The circumference is: " + c)
document.write("<br> The area is: " + a)

// task 13
document.write("<h1> <br> The Life Supply Calculator </h1>")
var fav = ("french fries");
var ag = 21;
var max = 70;
var snk = 2;
var total = (snk * 365) * (max - ag);
document.write("<br> Favourite Snack: " + fav)
document.write("<br> Current age: " + ag)
document.write("<br> Estimate Maximum age: " + max )
document.write("<br> Amount of snacks per day: " + snk)
document.write("<br> you will need "  + total + " french fries to last until the ripe old age of :" + max)

                //  --------MATH EXPRESSIONS-------
// task 1               

document.write(" <br> result " )
var a = 10 ;
document.write( " <br> the value of a is :" + a )
document.write( " <br>..........................")

document.write( " <br> the value of ++a  is :" + ++a )
document.write( " <br>  now the value of a is :" + a )

document.write( " <br><br> the value of a++  is :" + a++ )
document.write( " <br>  now the value of a is :" + a )

document.write( " <br> <br> the value of --a  is :" + --a )
document.write( " <br>  now the value of a is :" + a )

document.write( "  <br><br> the value of a--  is :" + a-- )
document.write( " <br>  now the value of a is :" + a )

// task 2
document.write("<br> <br> <h1>task 2 </h1>")
var a = 2;
var b = 1;
 --a;
 --a - --b;
 --a - --b + ++b;
 --a - --b + ++b + b--;
 var result = --a - --b + ++b + b--;
 document.write("<br> a is:" + a )
 document.write("<br> b is:" + b )
 document.write("<br> result is:" + result)

//  task 3
var a = prompt("enter your name:")
document.write("<br> <br> Hello " +  a  +  " How are you today?")

// task 5
var num = prompt("enter a number",5)
if (num!=null)
{
    for(i=1; i<=10; i++){
        ans = num *1
        document.write("<br>" + num + "x" + i + "=" + ans)
    }
}
else{
    for(i=1; i<=10; i++){
        ans = num *1
        document.write("<br>" + num + "x" + i + "=" + ans)
    }
}

// task 6
document.write("<br> <h2> subject total marks obtained marks percentage")

document.write("<br> maths")
document.write( "  \xa0\xa0 \xa0100")
document.write( " \xa0\xa0 \xa0\xa0\xa0 \xa0\xa054")
document.write( " \xa0\xa0 \xa0\xa0\xa0 \xa0\xa054%")
document.write("<br> physics")
document.write("  \xa0\xa0 \xa0100")
document.write( " \xa0 \xa0\xa0\xa0\xa0 \xa0\xa054")
document.write( " \xa0\xa0 \xa0\xa0\xa0 \xa0\xa054%")
document.write("<br> urdu")
document.write(" \xa0 \xa0 \xa0100")
document.write( " \xa0\xa0\xa0 \xa0\xa0 \xa0\xa048")
document.write( " \xa0\xa0 \xa0\xa0\xa0 \xa0\xa048%")
document.write("<br>\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0300")
document.write("\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0156")
document.write("\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa052%")


