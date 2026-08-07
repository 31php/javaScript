//Switch/case

// const dia = 6;
// switch (dia){
//     case 1:
//         console.log('segunda');
//         break
//     case 2:
//         console.log('terça-feira');
//         break;
//     case 3:
//         console.log('quarta-feira');
//         break;
//     default:
//         console.log('dia inválido');

// }
const data = new Date('2019-12-32 21:35');
const diaSemana = data.getDay();

switch(diaSemana){
    case 0:
        console.log('domingo');
        break;
    case 1:
        console.log('segunda');
        break;
    case 2:
        console.log('terça');
        break;
    case 3:
        console.log('quarta');
        break;
    case 4:
        console.log('quinta');
        break;
    case 5:
        console.log('sexta');
        break;
    case 6:
        console.log('sábado');
        break;
    default:
        console.log('dia inválido');                            
};