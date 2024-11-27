# Gift Assignment Script

This project contains a script that assigns gifts among participants ensuring no one is their own receiver. The assignment is done using the Fisher-Yates shuffle algorithm.

## Files

- `script.js`: Contains the main logic for shuffling participants and assigning gifts.

## Usage

To run the script, simply execute `script.js` in a JavaScript runtime environment (e.g., Node.js).

### Example

The script will output the gift assignments in the following format:

```
X envoie un cadeau à Y 🎁
Z envoie un cadeau à W 🎁 ...
```

## Functions

### `shuffle(array)`

Shuffles an array in place using the Fisher-Yates algorithm.

**Parameters:**

- `array` (Array): The array to shuffle.

### `assignGifts(participants)`

Assigns gifts among participants ensuring no one is their own receiver.

**Parameters:**

- `participants` (Array): An array of participant objects, each with an `id` and `name` property.

**Returns:**

- `Array`: An array of assignment objects, each containing a `giver` and `receiver` property.

## Participants

The participants are defined in the `script.js` file as follows:

```javascript
const participants = [
  { id: 1, name: "X" },
  { id: 2, name: "Y"}
  ...
];
```

## License

Feel free to reuse this code.

## Author

Made by [IOAyoub](https://github.com/ioayoub)
