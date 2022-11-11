function myFunctionButton() {
  function myFunctionOne() {
    let advice = fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data1) => document.getElementById("advice-title").innerHTML = `Advice # ${data1.slip.id}`);
  }

  function myFunctionTwo() {
    let advice = fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data2) => document.getElementById("advice-text").innerHTML = data2.slip.advice);
  }

  myFunctionOne();
  myFunctionTwo();
}
