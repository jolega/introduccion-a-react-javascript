
const active = true;

let message = ''


if ( !active ) {

    message = 'active'

} else {
    message = 'inactive'
}

console.log(message) ;

/// ==


const messagePrint = ( active ) ? 'active' : 'inactive' ;
console.log(messagePrint) ;