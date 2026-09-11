const nombre1 = 14
const nombre2 = 27
const nombre3 = 9

table = [nombre1, nombre2, nombre3, 14, 27]
        console.log(table)

let i=0
let grand = table[0]

while (i < table.length) {
    if (table[i] > grand) {
        grand = table[i]
        }
    i++
}
console.log(grand)
