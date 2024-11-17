const isPalindrome = (n) => {
  let reversed = 0;
  let original = n;
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return reversed === original;
};
const Bodlogo1 = () => {
  let inp = parseInt(document.getElementById("input1").value);
  let result1 = document.getElementById("bodlogo1");

  isPalindrome(inp)
    ? (result1.innerHTML = "palindrome mun")
    : (result1.innerHTML = "palindrome bish");
};

const Bodlogo2 = () => {
  let inp = parseInt(document.getElementById("input2").value);
  let result = document.getElementById("bodlogo2");

  const wolf = 25,
    rabbit = 18;

  const wolfSpeed = wolf / 3.6;
  const rabbitSpeed = rabbit / 3.6;

  const timeRabbitInSeconds = inp / rabbitSpeed;
  const timeWolfInSeconds = inp / wolfSpeed;

  const timeDifferenceInSeconds = timeRabbitInSeconds - timeWolfInSeconds;
  console.log(timeDifferenceInSeconds);

  const minutes = Math.floor(timeDifferenceInSeconds / 60);
  const seconds = Math.round(timeDifferenceInSeconds % 60);

  result.innerHTML = `${minutes} минут ${seconds} секунд`;
};
const Bodlogo3 = () => {
  let inp = parseInt(document.getElementById("input3").value);
  let result = document.getElementById("bodlogo3");
  const totalFloors = 9;
  const totalEntries = 3;
  const apartmentsPerFloor = 4;
  const apartmentsPerEntry = (totalFloors * apartmentsPerFloor) / totalEntries;

  const entryNumber = Math.ceil(inp / apartmentsPerEntry);
  const floorNumberInEntry = Math.ceil(
    (inp - (entryNumber - 1) * apartmentsPerEntry) / apartmentsPerFloor
  );
  const doorNumber =
    inp -
    (entryNumber - 1) * apartmentsPerEntry -
    (floorNumberInEntry - 1) * apartmentsPerFloor;
  result.innerHTML = `Орц ${entryNumber}, Давхар ${floorNumberInEntry}, Хаалга ${doorNumber}`;
};

const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const findGCDofArray = (arr) => {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = gcd(result, arr[i]);
  }
  return result;
};

const Bodlogo4 = () => {
  let inp = document.getElementById("input4").value;
  let result = document.getElementById("bodlogo4");

  let numbers = inp.split(" ").map(Number);

  result.innerHTML = findGCDofArray(numbers);
};

const performCalculation = (inp) => {
  const currentHour = new Date().getHours(); // Одоогийн цагийг авах
  const number = inp;

  if (currentHour < 12) {
    return Math.pow(number, 2);
  } else {
    return Math.sqrt(number);
  }
};

const Bodlogo5 = () => {
  let inp = parseInt(document.getElementById("input5").value);
  let result = document.getElementById("bodlogo5");

  result.innerHTML = performCalculation(inp);
};
