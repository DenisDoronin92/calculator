let a = prompt('Введите число 1')
a = Number(a)
let b = prompt('Введите число 2')
b = Number(b)

let calc = prompt('Введите действие которое хотите выполнить')

switch (calc) {
    case '+':
        alert(a + b)
        break;
        case '-':
        alert(a - b)
        break;
        case '*':
        alert(a * b)
        break;
        case '/':
        alert(a / b)
        break;

    default:
        break;
}