import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const customers =[ 
       {id:0,
        name:'Guajuvira',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx'},
        {
        id:1,
        name:'Amélia',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx'},
        {
        id:2,
        name:'Pensilvania',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx'},
        {
        id:3,
        name:'Fausto Silva',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx'},
        {
        id:4,
        name:'Goias',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx'},
        {
        id:5,
        name:'Josifo',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx'},
];

    return {customers};
  }
}