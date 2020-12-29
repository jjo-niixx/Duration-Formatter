function formatDuration(num) {
  let answer = "";

  const obj = {
    second: (n) => {
      const result = n % 60;
      num = parseInt(n / 60);
      return result;
    },
    minute: (n) => {
      const result = n % 60;
      num = parseInt(n / 60);
      return result;
    },
    hour: (n) => {
      const result = n % 24;
      num = parseInt(n / 24);
      return result;
    },
    day: (n) => {
      const result = n % 365;
      num = parseInt(n / 365);
      return result;
    },
    year: (n) => n,
  };

  for (let el in obj) {
    answer += obj[el](num);
  }

  let splittedAnswer = answer
    .split("")
    .reverse()
    .map((el) => el * 1);

  let arr = ["year", "day", "hour", "minute", "second"];

  let finalResult = "";

  for (let i = 0; i < arr.length; i++) {
    if (splittedAnswer[i]) {
      finalResult = finalResult + ", " + splittedAnswer[i] + " " + arr[i];
    }
  }
  return finalResult.substring(2);
}
