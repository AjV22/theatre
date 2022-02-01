var theatre = [
     {
        'movie':'A',
        'price': 100
    },
    {
        'movie':'B',
        'price': 120
    },
    {
        'movie':'C',
        'price': 130
    },
    {
        'movie':'D',
        'price': 140
    },
    {
        'movie':'E',
        'price': 150
    },
]

//loop

// for(i=0; i<theatre.length; i++){
//     console.log(theatre[i]);
// }

//while loop

// var i=0;
// while(i<theatre.length){
//     console.log(theatre[i]);
//     i++;
// }

//do while loop

// var i=3;
// do{
//     console.log(theatre[i]);
//     i++;
// }while(i<theatre)

//for each loop

theatre.forEach((theatre) =>{
    console.log(theatre.price + 50);
});


//map

// let screen = theatre.map(function(val){
//     return val + "action movies";
// });
// console.log(screen);

//