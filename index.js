// const people = ["Charlie", "Samip", "Ali"];
// const special = ("surprise")

// function writeCards(names, event) {
//     const cards= []
//   for (let i = 0; i < names.length; i++) {
//     cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
// }
// console.log(cards)
//   return cards;
// }
// writeCards(people, special)

// function countDown() {
// let downNumber = 10;
// while (downNumber > -1) {
//     console.log(downNumber--);
// }
// return downNumber;
// }
// const people = ["Guadalupe", "Ollie", "Aki"];
// const activity = ('surprise');
function writeCards(name, event) {
  console.log(name)
  const cards = [];
  for (let i = 0; i < name.length; i++) {
    cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  };
  console.log(cards);
  return cards;
};
// writeCards(people,activity);
function countDown(num) {
  let i = 10;
  while (i >= 0) {
    console.log(i--);
  }
}