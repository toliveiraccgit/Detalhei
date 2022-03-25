const range = document.querySelector('.input__range-preco');
const spanRangePreco = document.querySelector('.valor__range-preco');


function movePreco(){

    const valorRange = range.value
    spanRangePreco.style.left = valorRange.value

}