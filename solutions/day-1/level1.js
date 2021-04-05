const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
] 

// 1.  declare an empty array 
const arr = []
// 2.  declare an array with more than 5 number of els
const arr2 = ['ben', 'cow', 'zipper',  'boy' , 'singer', 'code']
//3. find length of array
const arr2Length = arr2.length
 // 4. the first, middle and last item in the array 
 const firstItem = arr2[0]
 const midItem = arr2[Math.round((arr2.length - 1) / 2)]
 const lastItem = arr2[arr2.length -1]

const arr3 = firstItem.split(' ').concat(midItem, lastItem)

//5 mixed datatypes array
const mixedDataTypes = ['hello ', 5 , true, 5.6, {'ben': 'name'}, 'tea' ]
//6. itCompanies
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']
//7. log the companies
console.log(itCompanies);
//8. print the number of companies
console.log(`There are ${itCompanies.length} companies in the array`)
// 9.  print first last and middle companies
const firstComp = itCompanies[0]
const midComp = itCompanies[Math.round((itCompanies.length - 1) / 2)]
const  lastComp= itCompanies[arr2.length -1]

const companyextract = firstComp.split(' ').concat(midComp, lastComp)

//10. print each company 
for (let a = 0; a < itCompanies.length; a++) {
  console.log(itCompanies[a]);
  
}

//11. print each company to uppercase
for (let a = 0; a < itCompanies.length; a++) {
  console.log(itCompanies[a].toUpperCase());
}
//12 print the array as a senence 

const sentence = itCompanies.slice(0, itCompanies.length - 1).join(', ') + ", and " + itCompanies.slice(-1);

//13 check if certain companies exist 

function includecompany(str) {
  let arr = itCompanies
  if (arr.includes(str)) {
    return(`${str} is in the list`);
  } else {
    return('not found');
  }
}