function formatDuration (seconds) {
    let YDMS= {}

    if(seconds ==0){
        return 'now'
    }
    YDMS.year = Math.trunc(seconds/365/24/60/60) 
    YDMS.day = Math.trunc(seconds/24/60/60)%365
    YDMS.hour = Math.trunc(seconds/60/60)%24
    YDMS.minute = Math.trunc(seconds/60)%60
    YDMS.second = seconds%60
    
    let arr = Object.keys(YDMS)
        .map(prop=>{
            if(YDMS[prop] !==0){
                return formatTime(YDMS[prop], prop)
            }
        })
        .filter(el=> el !== undefined)

    return formatReadbleTime(arr);
    //return arr
    function formatTime(number, unidade){
        return number >1 ?
        `${number} ${unidade}s`: 
        `${number} ${unidade}`
    }
    function formatReadbleTime(array){
        return array.reverse().reduce((acumulador, valorAtual, index, array)=>{
            console.log(valorAtual)
            if(index == 0) return `${valorAtual} ${acumulador}`
            if(index == 1) return `${valorAtual} and ${acumulador}`
            return `${valorAtual}, ${acumulador}`
        })
    }
}

console.log(formatDuration(44568922))
