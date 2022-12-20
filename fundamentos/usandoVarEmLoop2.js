const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// neste caso, a variavel não é respeitavel por conta de 'var' não possuir
// escopo de bloco