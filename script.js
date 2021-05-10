const loveStatus = ['drama', 'success', 'surprises', 'struggles'];
const moneyStatus = ['great', 'fair', 'mediocre', 'bad'];
const consider = ['outfit', 'friends', 'hobbies', 'work'];

const generateRandomNumber = (array) => {
  const randomNumber = Math.floor(Math.random()*array.length);
  return randomNumber;
};

const pickLove = () => {
  return loveStatus[generateRandomNumber(loveStatus)];
};

const pickMoney = () => {
  return moneyStatus[generateRandomNumber(moneyStatus)];
};

const pickConsideration = () => {
  return consider[generateRandomNumber(consider)];
};

const generateMessage = () => {
  const loveLife = pickLove();
  const moneyLife = pickMoney();
  const consideration = pickConsideration();
  console.log(`Today your love life will be characterised by ${loveLife}.`);
  console.log(`Financially it will be a ${moneyLife} day for you.`);
  console.log(`Consider paying extra attention to your ${consideration}!`);
};

generateMessage();