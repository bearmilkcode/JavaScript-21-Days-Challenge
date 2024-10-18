(() => {
  // เริ่มเขียนโค้ด

  const SECOND = 1000;
  const MINUTE = SECOND*60;
  const HOUR = MINUTE*60;
  const DAY = HOUR*24;

  function setElementInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }

  function countDown() {
    const dayElem = document.getElementById('target'); 
    const target = new Date(dayElem.value).getTime(); 
    
    const now = new Date().getTime();
    
    const newYear = new Date('Decomber 31, 2024 23:59:59').getTime();
    const unixTimeLeft = target - now;
    

    // const dayElem = document.getElementById('days');
    // dayElem.innerText = Math.floor(unixTimeLeft / DAY) ;

    setElementInnerText('days',Math.floor(unixTimeLeft / DAY));

    // const hoursElem = document.getElementById('hours');
    // hoursElem.innerText = Math.floor(unixTimeLeft % DAY / HOUR);

    setElementInnerText('hours', Math.floor(unixTimeLeft % DAY / HOUR));
    setElementInnerText('minutes',Math.floor(unixTimeLeft % HOUR / MINUTE));
    setElementInnerText('seconds',Math.floor(unixTimeLeft % MINUTE / SECOND));


  }
function run() {
countDown();
setInterval(countDown,SECOND);
}
run();

})();
