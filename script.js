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
  console.log(`Today your love life will be characterised by ${loveLife}.`);
  console.log(`Financially it will be a ${moneyLife} day for you.`);
  console.log(`Consider paying extra attention to your ${consideration}!`);
};

generateMessage();