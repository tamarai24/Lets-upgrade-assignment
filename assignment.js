const michael="People say I'm the best boss"
console.log(michael.length);
console.log(michael.slice(15));
console.log(michael.slice(11,29));
console.log(michael.slice(11,-1));
console.log(michael.slice(-5));
console.log(michael.slice(-10,-6));


let dukeofhastingssays="I burn for you"
let newarray= dukeofhastingssays.split("o");
console.log(newarray);
let newstringwithspace= newarray.join("o");
console.log(newstringwithspace);
let newstringwithoutspace= newarray.join("s");
console.log(newstringwithoutspace);

let starhallows = ['lorelai','rory','luke','lane','kirk','taylor']
console.log(starhallows.splice(1));

let beverlyhillsgang = ['Brandon','Brenda','Dylan','Andrea','steve','kelly','donna','david']
console.log(beverlyhillsgang.splice(1,2));

let seinfeld = ['Jerry', 'George', 'Kramer', 'Newman', 'Elaine']
console.log(seinfeld.splice(-2,1));

let brooklynNineNine = ['Jake', 'Amy', 'Charles','Rosa', 'Captain Holt', 'Gina', 'Terry']
console.log(brooklynNineNine.splice(5,1,'Hitchcock','scully'));

let friends = ['Ross', 'Rachel', 'Joey', 'Chandler', 'Monica', 'Phoebe']
console.log(friends.splice(1,0,'Guunther','Carol','Susan'));