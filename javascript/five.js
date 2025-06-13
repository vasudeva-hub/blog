const arr1=[10,20,30,40];
const arr2=[100,500,700,900];
//...spread operator
const arr3=[...arr1,...arr2,...arr1];
console.log(arr3);

let newarray=[12,14,23,45,67,89];

//array.map((value,index)=>{
    //block
    //})
   // newarray.map(function hi(){})
   newarray.map((value,index)=>{
    console.log(value*2);
   })

   const arr4=[100,200,300,400,500,600,700,800,900,1000];
   const filtered=arr4.filter((things)=>things<500);
   document.write(filtered);
   const valuesSmaller=filtered.map((value,index)=>{
    return value;
   })
   console.log(valuesSmaller);


   const hello=[1,2,3,4,5,6,7];//1+2+3+4+5+6+7=28
   //accumulator value+cummulative value
   //1+2=3
   //3+3=6
   //6+4=10
   //10+5=15
   //15+6=21
   //21+7=28
   const main=hello.reduce((a,b)=>{
    c=a+b;
    return c;
   })
   console.log(main);//28
  // reduce function


  let h="hello everyone, welcome to codegnan";
  console.log(h);
  console.log(h.at(10));
  console.log(h.indexOf("w"));