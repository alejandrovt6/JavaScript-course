const payMethod = 'cash';

switch (payMethod) {
    case 'cash':
        pay()
        console.log(`You paid with ${payMethod}`);
        break;
    case 'card':
        pay()
        console.log(`You paid with ${payMethod}`);
        break;
    case 'voucher':
        pay()
        console.log(`You paid with ${payMethod}`);
        break;
    default:
        console.log('You need to select a pay method');
        break;
}

function pay() {
    console.log('Paying...')
}