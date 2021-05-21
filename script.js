const loveStatus = ['drama', 'success', 'surprises', 'struggles', 'joy', 'connection', 'attraction', 'security'];
const moneyStatus = ['great', 'fair', 'mediocre', 'bad'];
const considerThings = ['outfit', 'friends', 'hobbies', 'work'];

const generateRandomNumber = (array) => {
  const randomNumber = Math.floor(Math.random()*array.length);
  return randomNumber;
};

const pickWordFromArray = (array) => {
  return array[generateRandomNumber(array)];
}

const generateMessage = () => {
  const loveLife = pickWordFromArray(loveStatus);
  const moneyLife = pickWordFromArray(moneyStatus);
  const consideration = pickWordFromArray(considerThings);
  const loveMessage = `Today your love life will be characterised by ${loveLife}.`;
  const moneyMessage = `Financially it will be a ${moneyLife} day for you.`;
  const considerMessage = `Consider paying extra attention to your ${consideration}!`;

  document.getElementById('love').innerHTML = loveMessage;
  document.getElementById('money').innerHTML = moneyMessage;
  document.getElementById('consider').innerHTML = considerMessage;

};

generateMessage();