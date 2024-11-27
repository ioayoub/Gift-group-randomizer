const participants = [
  { id: 1, name: "X" },
  { id: 2, name: "Y" },
];

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 *
 * @param {Array} array - The array to shuffle.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * Assigns gifts among participants ensuring no one is their own receiver.
 *
 * @param {Array} participants - An array of participant objects, each with an `id` and `name` property.
 * @returns {Array} An array of assignment objects, each containing a `giver` and `receiver` property.
 */
function assignGifts(participants) {
  const givers = [...participants];
  const receivers = [...participants];

  shuffle(receivers);

  const assignments = [];

  for (let i = 0; i < givers.length; i++) {
    // Shuffle again if giver is receiver
    if (givers[i].id === receivers[i].id) {
      return assignGifts(participants);
    }

    assignments.push({ giver: givers[i].name, receiver: receivers[i].name });
  }

  return assignments;
}

const result = assignGifts(participants);

result.forEach(({ giver, receiver }) => {
  console.log(`${giver} envoie un cadeau à ${receiver} 🎁`);
});
