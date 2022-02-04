function calculator(val1, val2, operand) {
    switch (operand) {
        case '+':
            return val1 + val2;
            break;
        case '-':
            return val1 - val2;
            break;
        case '*':
            return val1 * val2;
            break;
        case '/':
            return val1 / val2;
            break;
        default:
            return false;
    }
}

console.log(`12 + 24 = ${calculator( 12, 24, '+' )}`);
console.log(`12 - 24 = ${calculator( 12, 24, '-' )}`);
console.log(`12 * 24 = ${calculator( 12, 24, '*' )}`);
console.log(`12 / 24 = ${calculator( 12, 24, '/' )}`);