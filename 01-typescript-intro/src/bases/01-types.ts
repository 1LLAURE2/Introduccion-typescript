export let name='Jose';
export const age=35;
export const isValid:boolean = true;

name='Enrique';

export const templateString =` Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
expresiones ${1+1}
números: ${age}
booleanos: ${isValid}
`
console.log(templateString);