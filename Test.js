const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.entries(car2)); // ['speed','color']

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}