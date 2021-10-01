let argument=process.argv.slice(2)

function areaCalculation(radius){

    let alan = radius*radius*Math.PI

    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${alan}`)
}

areaCalculation(Number(argument))