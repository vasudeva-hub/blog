//primitive
let a=20;
console.log(a);
console.log(typeof(a));
//string
let b="hello vasu";
console.log(b);
console.log(typeof(b));
//boolean
let c=false;
console.log(c);
console.log(typeof(c));

let d;
console.log(d);
console.log(typeof(d));

let e=null;
console.log(e);
console.log(typeof(e));

let f=Symbol("unique");//immutable
console.log(f);
console.log(typeof(f));

let g=21345678987654321234567876543n;
console.log(g);
console.log(typeof(g));

//non-primitive datatypes
let l=["realme","hp","tata"];
console.log(l[0]);
console.log(l);
//destructuring of array
[r,t,y,h]=[1,2,3,4,5];
console.log(t);

let obj={
    name:"vasu",
    place:"vja",
    qualification:"msc"
}
console.log(obj);
console.log(obj.name,obj.place);

let {book,bookid,author}={
    book:"harrypotter",
    bookid:8,
    author:"j.k rowling"
}
console.log(book,author);

//type coercion
console.log(2+3+5);
console.log(3+4+"hello");
console.log("hi"+2+7);
console.log("morning"+"hlo"+4);
console.log("mrng"-"hlo"-4);
console.log("mrng"-"hlo"+"4");

//comparison 
let z=25;
let u=23;
let k=45;
let j=25;
console.log(z<=k);
console.log(z<k);
console.log(z>=k);
console.log(z>k);
console.log(z==u);
console.log(z!=u);
console.log(z===u);
console.log(z!==u);

//condition?"corrrect":wrong
let one=56;
let two=23;
console.log(one<two?"true block":"false block")

// &&,||,!
let m=3;
let n=4;
let o=7;
console.log(m>n && n<o);

//alert("display the message on browser");
 //prompt("hello everyone");
 //confirm("to confirm the question");

let age=number(prompt("enter the voting ballot"));
if(age>=18){
    alert("apllicable to vote");
}
else if(age>=0 && age<18){
    alert("not applicable to vote");
}
else{
    alert("enter proper age");
}

//if age is <5 free entry if age is in between 5 to 10 pay rupees 10 if age in between 10to20 pay rupee 20 if age in between 20 to 30 pay 30 above 30 