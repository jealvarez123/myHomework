console.log("Can I kick it?");
// // //
// // // for (var i = 1; i <= 20; i++) {
// // // console.log(i);
// // // }
// // //
// // // for (var i = 0; i <= 200; i++) {
// // // if ( i % 2 === 0 ){
// // //   console.log(i);
// // // }
// // // }
// // //
// // // for (var i = 0; i <= 20; i++) {
// // //
// // // console.log("Love me, pet me! HSSSSSS!");
// // //
// // // }
// // //
// // // var catThoughts = ["...human...why you taking pictures of me?..", "...the catnip made me do it...", "...why does the red dot always get away..."]
// // //
// // // console.log(catThoughts);
// // //
// // // for (var i = 0; i <= 20; i++) {
// // //   if (i % 2===0){
// // //     var random = catThoughts[Math.floor(Math.random() * catThoughts.length)];
// // //     console.log(random);
// // //   }
// // //
// // //
// // // }
// // //
// // // for (var i = 1; i <=100 ; i++) {
// // //   if (i % 3===0 && i % 5 ===0) {
// // //     console.log("fizzbuzz");
// // //
// // //
// // //   } else if (i % 5 ===0 ) {
// // //     console.log("buzz");
// // //
// // //   } else if (i % 3 === 0 ) {
// // //     console.log("fizz");
// // //
// // //   }  else {
// // //     console.log(i);
// // //   }
// // //
// // //
// // // }
// // //
// // // const thom = ["Thom", 1000, "Christchurch"]
// // // const karolin = ["Karolin", 16, "New York"]
// // // const kristyn = ["Kristyn", 5, "Pittsburgh"]
// // // const matt = ["Matt H", 186, "Philadelphia"]
// // //
// // //
// // // // Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".
// // //
// // // const thom = ["Gameboy", 1000, "Christchurch"]
// // //
// // // // Karolin just had her birthday; change Karolin's array to reflect her being a year older.
// // //
// // // const karolin = ["Karolin", 17, "New York"]
// // //
// // // // Change Matt H's hometown from Philadelphia to "Gotham City".
// // //
// // // const matt = ["Matt H", 186, "Gotham City"]
// // //
// // // // Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".
// // //
// // // const kristyn = ["Kristyn", 5, "Brooklyn"]
// // //
// // //
// // // var tmnt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// // //
// // // for (var i = 0; i <= tmnt.length-1; i++) {
// // //   console.log(tmnt[i].toUpperCase());
// // }
// var kristynsLeft = "left shoe"
// const kristynsCloset = [
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
//
// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     kristynsLeft,
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
//
// var kristynsLeft = "left shoe"
//
// console.log(thomsCloset);
// console.log("Kristyn likes to spice it up with just " + kristynsCloset[0] + " and a " + kristynsCloset[2]);
// console.log("Thom likes to dress down with " + thomsCloset[0][1] + " with some " + thomsCloset[1][1] );
// console.log(" But both love to wear " + kristynsCloset[5] + " with those " + thomsCloset[2][3]);
//
// for (var i = 0; i < kristynsCloset.length; i++) {
//   console.log("WHIRR: Now washing " + kristynsCloset[i]);
// }
//
// for (var i = 0; i < thomsCloset.length; i++) {
//   console.log(thomsCloset[i][i]);
// }

var pound = "#"

for (var i = 0; i <= 6 ; i++) {

  console.log(pound);
pound += "#"
  }
