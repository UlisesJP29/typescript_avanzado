const withoutEnd = () => {
  while (true) {
    console.log('hola, mundo');
  }
}


const fail = (messege: string) => {
  throw new Error(messege);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  }else if (Array.isArray(input)){
    return 'es un array';
  }
  return fail('not match');
}

console.log(example('Hola'));
console.log(example([1,2,3,4]));
console.log(example(1211));
console.log(example('Hola'));
