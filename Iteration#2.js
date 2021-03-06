
/* Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios. */

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]


let contador=0;
let totalVolume= 0;

for (let user of users) {
    for (let atributes in user) {
        if (user[atributes] == user.favoritesSounds) {
            for (let name in user.favoritesSounds) {
                for (let value in user.favoritesSounds[name]) {
                    if(user.favoritesSounds[name][value] == user.favoritesSounds[name].volume) {     
                        totalVolume += user.favoritesSounds[name][value];
                        contador ++;
                    }
                }
            }    
        }
    }
} 

let avgVolume = totalVolume / contador;
console.log('El volumen medio de todos los sonidos es ' +avgVolume)
