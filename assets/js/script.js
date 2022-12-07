// $(document).ready(function(){
//     $('.services__slider').slick({
//         arrows: false,
//         slidesToShow: 3,
//         speed: 1000,
//         easing:'linear',
//         infinite:true,
//         initialSlide:1,
//         autoplay:true,
//         autoplaySpeed: 1500,
//     });
// });

// let arr = ["xcvx", 1, 23, "5"];

// function typeOfArr(value){
//     // arr2=[];
//     // for(let i=0; i<arr.length; i++){
//     //     if(typeof(arr[i])==='number'){
//     //         arr2.push(arr[i]);
//     //     }
//     //     else{
//     //         continue;
//     //     }
//     // }
//     // return arr2;
//     return value.filter(item=>typeof(item)==='number');
// }

// console.log(typeOfArr(["xcvx", 1, 23, "5"]));

// function sortArr(value){
//     return value.filter(item=>typeof(item)==="string").map(item=>item.toUpperCase());
// }

// console.log(sortArr(["xcvx", 1, 23, "5", false]));


// 'heelo' = > ['h','e','l','l','o']

function reducer(value){
    return value.split('').map(value=>value+'!');
}

console.log(reducer('heelo'));
