let unknowVar : unknown;

unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;



if (typeof unknowVar === 'string') {
unknowVar.toLowerCase();
}

const parse = (str: string) => {
  return JSON.parse(str);
}

