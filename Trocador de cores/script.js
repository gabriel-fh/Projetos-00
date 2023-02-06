const cores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ]
const bot = document.getElementById("botao")
const cor = document.querySelector(".cor")

bot.addEventListener("click", clicar)

function clicar (){
    // console.log(document.querySelector("div.container"));
    let corFinal = "#"

    

    for (let i = 0; i < 6; i++ ){
        corFinal += cores[gerarNumAleat()]

        function gerarNumAleat (){
            return Math.floor(Math.random() * cores.length)
        }
    }
    cor.textContent = corFinal;
    document.querySelector("div.container").style.backgroundColor = corFinal;
    document.querySelector("span").style.color = corFinal
};
