// v e v -> V
// v e f -> f
// f e ? -> f

// v ou ? -> V
// f ou V -> V
// f ou f -> f

// V xor v -> f
// V xor f -> v 
// f xor V - V
// f xor f - f

// v! -> f
// !f -> V

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv35 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv35 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv35, manterSaudavel }
}

console.log(compras(true, true))