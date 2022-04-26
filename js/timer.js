(function () {
  const daysBlock = document.querySelector('.timer__days');
  const hoursBlock = document.querySelector('.timer__hours');
  const minutesBlock = document.querySelector('.timer__minutes');
  const secondsBlock = document.querySelector('.timer__seconds');
  const timerCount = document.querySelectorAll('.timer__count');

  let interval;
  let wordsSec = ['секунда', 'секунды', 'секунд'];
  let wordsMin = ['минута', 'минуты', 'минут'];
  let wordsHour = ['час', 'часа', 'часов'];
  let wordsDay = ['день', 'дня', 'дней'];

  const numWord = (val, words) => {
    val = Math.abs(val) % 100;

    let lastNum = val % 10;

    if (val > 10 && val < 20) return words[2];
    if (lastNum > 1 && lastNum < 5) return words[1];
    if (lastNum === 1) return words[0];

    return words[2];
  };

  const updateTimer = () => {
    const date = new Date();
    const dateDeadline = new Date('30 april 2022').getTime();
    const timeRemaining = (dateDeadline - date) / 1000;

    const days = Math.floor(timeRemaining / 3600 / 24);
    const hours = Math.floor((timeRemaining / 3600) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    const fDays = days > 10 ? days : '0' + days;
    const fHours = hours > 10 ? hours : '0' + hours;
    const fMinutes = minutes > 10 ? minutes : '0' + minutes;
    const fSeconds = seconds > 10 ? seconds : '0' + seconds;

    daysBlock.textContent = fDays;
    hoursBlock.textContent = fHours;
    minutesBlock.textContent = fMinutes;
    secondsBlock.textContent = fSeconds;

    daysBlock.nextElementSibling.textContent = numWord(days, wordsDay);
    hoursBlock.nextElementSibling.textContent = numWord(hours, wordsHour);
    minutesBlock.nextElementSibling.textContent = numWord(minutes, wordsMin);
    secondsBlock.nextElementSibling.textContent = numWord(seconds, wordsSec);

    if (timeRemaining <= 0) {
      clearInterval(interval);

      daysBlock.textContent = '00';
      hoursBlock.textContent = '00';
      minutesBlock.textContent = '00';
      secondsBlock.textContent = '00';

      timerCount.forEach((elem) => {
        elem.style.cssText = `color:red`;
      });
    }
  };

  updateTimer();
  interval = setInterval(updateTimer, 500);
})();
