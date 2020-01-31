import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const customers =[ 
       {id:0,
        name:'Guajuvira',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx',
      status:'ok'},
        {
        id:1,
        name:'Amélia',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx',
        status:'ok'},
        {
        id:2,
        name:'Pensilvania',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx',
        status:'ok'},
        {
        id:3,
        name:'Fausto Silva',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx',
        status:'ok'},
        {
        id:4,
        name:'Goias',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx',
        status:'ok'},
        {
        id:5,
        name:'Josifo',
        tel:'99 9999999',
        email:'sdafsa@fasfsa.com',
        cpf:'xxx xxx xxx-xx',
        status:'ok'},
];

const rentings =[ 
  {id:0,name:'Giao',check_in:new Date(11/12/2020),check_out:new Date(11/12/2020),value:0},
  {id:1,name:'Dani',check_in:new Date(11/12/2020),check_out:new Date(11/12/2020),value:0},
  {id:2,name:'Gobi',check_in:new Date(11/12/2020),check_out:new Date(11/12/2020),value:0},
  {id:3,name:'José',check_in:new Date(11/12/2020),check_out:new Date(11/12/2020),value:0},
  {id:4,name:'Shoji',check_in:new Date(11/12/2020),check_out:new Date(11/12/2020),value:0},
  {id:5,name:'Darcle',check_in:new Date(11/12/2020),check_out:new Date(11/12/2020),value:0},
  {id:6,name:'Naruto',check_in:new Date(11/12/2020),check_out:new Date(11/12/2020),value:0},
];
    return {customers,rentings};
  }
}