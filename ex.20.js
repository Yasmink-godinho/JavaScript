let valores = [1, 4, 6, 7, 5, 8]

/*for(let pos=0; pos<valores.length; pos += 1){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}