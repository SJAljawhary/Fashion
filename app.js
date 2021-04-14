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

