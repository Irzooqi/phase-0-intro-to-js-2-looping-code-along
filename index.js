// Code your solutions in this file
function writeCards(names, eventName) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}

function countDown(number) {
  let i = number;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

module.exports = {
  writeCards,
  countDown,
};
