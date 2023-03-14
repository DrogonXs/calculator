//a declaração const cria uma variavel cujo o valor é fixo, ou seja, uma constante somente leitura. isso não significa que o valor é imutavel. apenas que a  variavel constante não pode ser alterada ou retribuida.

const display = document.querySelector("#display"); //o querySelector retorna o primeiro elemento dentro do documento.

const button = document.querySelectorAll("button"); //retorna uma listra de elementos presentes no documento.


button.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    })
})