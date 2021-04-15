alert('Welcome here,Enjoy your shopping !!');



var section = prompt('Please enter if you want to go to a men,women or children section??')

if (section == 'men'){
console.log('section '+'men');
}
else if (section == 'women'){
  console.log('section'+'women');
}
else if (section == 'children'){
  console.log('section'+'children');
}


var age = prompt('please enter if your age is less than 30 or more ?')

if(age >= '45' && section == 'men'){
  alert('Thank you alot !');
  console.log('morethan');
}

else if(age >= '45'&& section =='women'){
  alert('Thank you very much !');
  console.log('lessthan');
}


 confirm('Did you find our site interested ?')




 var section= prompt('Please enter if you want to go to a men,women or children section??');

while(section !=='men'&& section !=='women' && section !=='children'){

section = prompt('Please enter if you want to go to a men,women or children section??');

}

console.log(section);




var dilevery = prompt('how many times you want us to dilever weekly?') 

for (let i =1; i<=dilevery; i++){

  if(dilevery <='3'){

 let image=' <img  src="https://external-preview.redd.it/a-CWbn39-IaF6plSXyz9JJ6AauDs6KSOf93w9MZAGLc.png?auto=webp&s=c4e27ead7a2b027c8f6595e90854490056e55064" alt="men"width=300px >'
  
   document.write(image)
  }

  else if(opens >= '3'){
   let image='<img src="https://www.moneycrashers.com/wp-content/uploads/2019/03/designer-kids-clothes-1068x713.jpg" alt="children" width=300px >'

   document.write(image)


  }


}























