const loveStatus = ['drama', 'success', 'surprises', 'struggles', 'joy', 'connection', 'attraction', 'security'];
const moneyStatus = ['great', 'fair', 'mediocre', 'bad', 'rough', 'superb', 'special'];
const considerThings = ['outfit', 'friends', 'hobbies', 'work', 'pet', 'plants', 'telephone', 'physique'];

const generateRandomNumber = (array) => {
  const randomNumber = Math.floor(Math.random()*array.length);
  return randomNumber;
};

const pickWordFromArray = (array) => {
  return array[generateRandomNumber(array)];
}

const generateMessage = () => {
  const loveMessage = `Today your love life will be characterised by ${pickWordFromArray(loveStatus)}.`;
  const moneyMessage = `Financially it will be a ${pickWordFromArray(moneyStatus)} day for you.`;
  const considerMessage = `Consider paying extra attention to your ${pickWordFromArray(considerThings)}!`;

  document.getElementById('love').innerHTML = loveMessage;
  document.getElementById('money').innerHTML = moneyMessage;
  document.getElementById('consider').innerHTML = considerMessage;
};

generateMessage();