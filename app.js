let water1 = document.getElementById("water1");
let waterText1 = document.getElementById("waterText1");
let textContainer = document.getElementById("textContainer");
let remainingWaterText = document.getElementById("remainingWaterText");

let firstSpan = document.getElementById("remainedWater");

let miniWater1 = document.getElementById("miniWater1");
let miniWaterText1 = document.getElementById("miniWaterText1");
let miniWaterSpan1 = document.getElementById("miniWaterSpan1");

let miniWater2 = document.getElementById("miniWater2");
let miniWaterText2 = document.getElementById("miniWaterText2");
let miniWaterSpan2 = document.getElementById("miniWaterSpan2");

let miniWater3 = document.getElementById("miniWater3");
let miniWaterText3 = document.getElementById("miniWaterText3");
let miniWaterSpan3 = document.getElementById("miniWaterSpan3");

let miniWater4 = document.getElementById("miniWater4");
let miniWaterText4 = document.getElementById("miniWaterText4");
let miniWaterSpan4 = document.getElementById("miniWaterSpan4");

let miniWater5 = document.getElementById("miniWater5");
let miniWaterText5 = document.getElementById("miniWaterText5");
let miniWaterSpan5 = document.getElementById("miniWaterSpan5");

let miniWater6 = document.getElementById("miniWater6");
let miniWaterText6 = document.getElementById("miniWaterText6");
let miniWaterSpan6 = document.getElementById("miniWaterSpan6");

let miniWater7 = document.getElementById("miniWater7");
let miniWaterText7 = document.getElementById("miniWaterText7");
let miniWaterSpan7 = document.getElementById("miniWaterSpan7");

let miniWater8 = document.getElementById("miniWater8");
let miniWaterText8 = document.getElementById("miniWaterText8");
let miniWaterSpan8 = document.getElementById("miniWaterSpan8");

let bottlePressed1 = true;
let bottlePressed2 = true;
let bottlePressed3 = true;
let bottlePressed4 = true;
let bottlePressed5 = true;

miniWater1.addEventListener("click", getBottleNum);

miniWater2.addEventListener("click", getBottleNum);
miniWater3.addEventListener("click", getBottleNum);
miniWater4.addEventListener("click", getBottleNum);
miniWater5.addEventListener("click", getBottleNum);
miniWater6.addEventListener("click", getBottleNum);
miniWater7.addEventListener("click", getBottleNum);
miniWater8.addEventListener("click", getBottleNum);

let bottleOn1 = true;

let numClick1 = 0;
let numClick2 = 0;
let numClick3 = 0;
let numClick4 = 0;
let numClick5 = 0;
let numClick6 = 0;
let numClick7 = 0;
let numClick8 = 0;

function getBottleNum(e) {
  /*console.log(e.path[0].id);ddd
  console.log(e.path[0] == miniWater1);
  console.log(e.path[0] == miniWaterSpan1);
  console.log(e.path[0] == miniWaterText1);*/

  if (
    e.path[0] == miniWater1 ||
    e.path[0] == miniWaterSpan1 ||
    e.path[0] == miniWaterText1
  ) {
    if (numClick1 == 0) {
      numClick1++;
      numClick8 = 0;
      numClick7 = 0;
      numClick6 = 0;
      numClick2 = 0;
      numClick3 = 0;
      numClick4 = 0;
      numClick5 = 0;
      bottle(1);
    } else if (numClick1 == 1) {
      numClick1 = 0;
      bottleOff1();
    }
  }

  if (
    e.path[0] == miniWater2 ||
    e.path[0] == miniWaterSpan2 ||
    e.path[0] == miniWaterText2
  ) {
    if (numClick2 == 0) {
      numClick2++;
      numClick8 = 0;
      numClick7 = 0;
      numClick6 = 0;
      numClick1 = 0;
      numClick3 = 0;
      numClick4 = 0;
      numClick5 = 0;

      bottle(2);
    } else if (numClick2 == 1) {
      numClick2 = 0;
      bottleOff2();
    }
  }

  if (
    e.path[0] == miniWater3 ||
    e.path[0] == miniWaterSpan3 ||
    e.path[0] == miniWaterText3
  ) {
    if (numClick3 == 0) {
      numClick3++;
      numClick8 = 0;
      numClick7 = 0;
      numClick6 = 0;
      numClick2 = 0;
      numClick1 = 0;
      numClick4 = 0;
      numClick5 = 0;

      bottle(3);
    } else if (numClick3 == 1) {
      numClick3 = 0;
      bottleOff3();
    }
  }

  if (
    e.path[0] == miniWater4 ||
    e.path[0] == miniWaterSpan4 ||
    e.path[0] == miniWaterText4
  ) {
    if (numClick4 == 0) {
      numClick4++;
      numClick8 = 0;
      numClick7 = 0;
      numClick6 = 0;
      numClick3 = 0;
      numClick2 = 0;
      numClick1 = 0;
      numClick5 = 0;

      bottle(4);
    } else if (numClick4 == 1) {
      numClick4 = 0;
      bottleOff4();
    }
  }

  if (
    e.path[0] == miniWater5 ||
    e.path[0] == miniWaterSpan5 ||
    e.path[0] == miniWaterText5
  ) {
    if (numClick5 == 0) {
      numClick5++;
      numClick8 = 0;
      numClick7 = 0;
      numClick6 = 0;
      numClick4 = 0;
      numClick3 = 0;
      numClick2 = 0;
      numClick1 = 0;

      bottle(5);
    } else if (numClick5 == 1) {
      numClick5 = 0;
      bottleOff5();
    }
  }

  if (
    e.path[0] == miniWater6 ||
    e.path[0] == miniWaterSpan6 ||
    e.path[0] == miniWaterText6
  ) {
    if (numClick6 == 0) {
      numClick6++;
      numClick8 = 0;
      numClick7 = 0;
      numClick5 = 0;
      numClick4 = 0;
      numClick3 = 0;
      numClick2 = 0;
      numClick1 = 0;

      bottle(6);
    } else if (numClick6 == 1) {
      numClick6 = 0;
      bottleOff6();
    }
  }

  if (
    e.path[0] == miniWater7 ||
    e.path[0] == miniWaterSpan7 ||
    e.path[0] == miniWaterText7
  ) {
    if (numClick7 == 0) {
      numClick7++;
      numClick8 = 0;
      numClick6 = 0;
      numClick5 = 0;
      numClick4 = 0;
      numClick3 = 0;
      numClick2 = 0;
      numClick1 = 0;

      bottle(7);
    } else if (numClick7 == 1) {
      numClick7 = 0;
      bottleOff7();
    }
  }

  if (
    e.path[0] == miniWater8 ||
    e.path[0] == miniWaterSpan8 ||
    e.path[0] == miniWaterText8
  ) {
    if (numClick8 == 0) {
      numClick8++;
      numClick7 = 0;
      numClick6 = 0;
      numClick5 = 0;
      numClick4 = 0;
      numClick3 = 0;
      numClick2 = 0;
      numClick1 = 0;

      bottle(8);
    } else if (numClick8 == 1) {
      numClick8 = 0;
      bottleOff8();
    }
  }
  //console.log(e.path[0]=="");
}

function bottleOff1() {
  remainingWaterText.innerHTML = "2L";
  firstSpan.innerHTML = "Remained";
  water1.style.display = "flex";
  waterText1.innerHTML = "0%";
  water1.style.height = "0%";
  water1.style.transition = "height 0.25s";
  textContainer.style.height = "100%";

  miniWater1.style.background = "rgb(237, 244, 253)";
  miniWater1.style.transition = "background-color 0.25s";
  miniWaterText1.style.color = "rgb(20, 79, 198)";
  miniWaterSpan1.style.color = "rgb(20, 79, 198)";
}

function bottleOff2() {
  remainingWaterText.innerHTML = "1.75L";
  firstSpan.innerHTML = "Remained";
  water1.style.display = "flex";
  waterText1.innerHTML = "12.5%";
  water1.style.height = "12.5%";
  water1.style.transition = "height 0.25s";
  textContainer.style.height = "87.5%";

  miniWater2.style.background = "rgb(237, 244, 253)";
  miniWater2.style.transition = "background-color 0.25s";
  miniWaterText2.style.color = "rgb(20, 79, 198)";
  miniWaterSpan2.style.color = "rgb(20, 79, 198)";
}

function bottleOff3() {
  remainingWaterText.innerHTML = "1.50L";
  firstSpan.innerHTML = "Remained";
  water1.style.display = "flex";
  waterText1.innerHTML = "25%";
  water1.style.height = "25%";
  water1.style.transition = "height 0.25s";
  textContainer.style.height = "75%";

  miniWater3.style.background = "rgb(237, 244, 253)";
  miniWater3.style.transition = "background-color 0.25s";
  miniWaterText3.style.color = "rgb(20, 79, 198)";
  miniWaterSpan3.style.color = "rgb(20, 79, 198)";
}

function bottleOff4() {
  remainingWaterText.innerHTML = "1.25L";
  firstSpan.innerHTML = "Remained";
  water1.style.display = "flex";
  waterText1.innerHTML = "37.5%";
  water1.style.height = "37.5%";
  water1.style.transition = "height 0.25s";
  textContainer.style.height = "62.5%";

  miniWater4.style.background = "rgb(237, 244, 253)";
  miniWater4.style.transition = "background-color 0.25s";
  miniWaterText4.style.color = "rgb(20, 79, 198)";
  miniWaterSpan4.style.color = "rgb(20, 79, 198)";
}

function bottleOff5() {
  remainingWaterText.innerHTML = "1L";
  firstSpan.innerHTML = "Remained";
  water1.style.display = "flex";
  waterText1.innerHTML = "50%";
  water1.style.height = "50%";
  water1.style.transition = "height 0.25s";
  textContainer.style.height = "50%";

  miniWater5.style.background = "rgb(237, 244, 253)";
  miniWater5.style.transition = "background-color 0.25s";
  miniWaterText5.style.color = "rgb(20, 79, 198)";
  miniWaterSpan5.style.color = "rgb(20, 79, 198)";
}

function bottleOff6() {
  remainingWaterText.innerHTML = "0.75L";
  firstSpan.innerHTML = "Remained";
  water1.style.display = "flex";
  waterText1.innerHTML = "37.5%";
  water1.style.height = "37.5%";
  water1.style.transition = "height 0.25s";
  textContainer.style.height = "62.5%";

  miniWater6.style.background = "rgb(237, 244, 253)";
  miniWater6.style.transition = "background-color 0.25s";
  miniWaterText6.style.color = "rgb(20, 79, 198)";
  miniWaterSpan6.style.color = "rgb(20, 79, 198)";
}

function bottleOff7() {
  remainingWaterText.innerHTML = "0.5L";
  firstSpan.innerHTML = "Remained";
  water1.style.display = "flex";
  waterText1.innerHTML = "25%";
  water1.style.height = "25%";
  water1.style.transition = "height 0.25s";
  textContainer.style.height = "75%";

  miniWater7.style.background = "rgb(237, 244, 253)";
  miniWater7.style.transition = "background-color 0.25s";
  miniWaterText7.style.color = "rgb(20, 79, 198)";
  miniWaterSpan7.style.color = "rgb(20, 79, 198)";
}

function bottleOff8() {
  remainingWaterText.innerHTML = "0.25L";
  firstSpan.innerHTML = "Remained";
  water1.style.display = "flex";
  waterText1.innerHTML = "12.5%";
  water1.style.height = "12.5%";
  water1.style.transition = "height 0.25s";
  textContainer.style.height = "87.5%";

  miniWater8.style.background = "rgb(237, 244, 253)";
  miniWater8.style.transition = "background-color 0.25s";
  miniWaterText8.style.color = "rgb(20, 79, 198)";
  miniWaterSpan8.style.color = "rgb(20, 79, 198)";
}

let numBottle1Clicked = 0;
let numBottle2Clicked = 0;
let numBottle3Clicked = 0;

function bottle(x) {
  if (x == 1) {
    remainingWaterText.innerHTML = "1.75L";
    firstSpan.innerHTML = "Remained";
    water1.style.display = "flex";
    waterText1.innerHTML = "12.5%";
    water1.style.height = "12.5%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "87.5%";

    miniWater1.style.background = "rgb(106, 179, 247)";
    miniWater1.style.transition = "background-color 0.25s";
    miniWaterText1.style.color = "white";
    miniWaterSpan1.style.color = "white";

    miniWater2.style.background = "rgb(237, 244, 253)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "rgb(20, 79, 198)";
    miniWaterSpan2.style.color = "rgb(20, 79, 198)";

    miniWater3.style.background = "rgb(237, 244, 253)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "rgb(20, 79, 198)";
    miniWaterSpan3.style.color = "rgb(20, 79, 198)";

    miniWater4.style.background = "rgb(237, 244, 253)";
    miniWater4.style.transition = "background-color 0.25s";
    miniWaterText4.style.color = "rgb(20, 79, 198)";
    miniWaterSpan4.style.color = "rgb(20, 79, 198)";

    miniWater5.style.background = "rgb(237, 244, 253)";
    miniWater5.style.transition = "background-color 0.25s";
    miniWaterText5.style.color = "rgb(20, 79, 198)";
    miniWaterSpan5.style.color = "rgb(20, 79, 198)";

    miniWater6.style.background = "rgb(237, 244, 253)";
    miniWater6.style.transition = "background-color 0.25s";
    miniWaterText6.style.color = "rgb(20, 79, 198)";
    miniWaterSpan6.style.color = "rgb(20, 79, 198)";

    miniWater7.style.background = "rgb(237, 244, 253)";
    miniWater7.style.transition = "background-color 0.25s";
    miniWaterText7.style.color = "rgb(20, 79, 198)";
    miniWaterSpan7.style.color = "rgb(20, 79, 198)";

    miniWater8.style.background = "rgb(237, 244, 253)";
    miniWater8.style.transition = "background-color 0.25s";
    miniWaterText8.style.color = "rgb(20, 79, 198)";
    miniWaterSpan8.style.color = "rgb(20, 79, 198)";
  }

  if (x == 2) {
    bottle(1);

    numBottle2Clicked++;

    remainingWaterText.innerHTML = "1.5L";
    water1.style.display = "flex";
    water1.style.height = "25%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "75%";
    waterText1.innerHTML = "25%";

    miniWater2.style.background = "rgb(106, 179, 247)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "white";
    miniWaterSpan2.style.color = "white";
  }

  if (x == 3) {
    bottle(2);

    remainingWaterText.innerHTML = "1.25L";
    water1.style.display = "flex";
    water1.style.height = "37.5%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "62.5%";
    waterText1.innerHTML = "37.5%";

    miniWater3.style.background = "rgb(106, 179, 247)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "white";
    miniWaterSpan3.style.color = "white";
  }

  if (x == 4) {
    bottle(3);

    remainingWaterText.innerHTML = "1L";
    water1.style.display = "flex";
    water1.style.height = "50%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "50%";
    waterText1.innerHTML = "50%";

    miniWater4.style.background = "rgb(106, 179, 247)";
    miniWater4.style.transition = "background-color 0.25s";
    miniWaterText4.style.color = "white";
    miniWaterSpan4.style.color = "white";
  }

  if (x == 5) {
    bottle(4);

    remainingWaterText.innerHTML = "0.75L";
    water1.style.display = "flex";
    water1.style.height = "62.5%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "37.5%";
    waterText1.innerHTML = "62.5%";

    miniWater5.style.background = "rgb(106, 179, 247)";
    miniWater5.style.transition = "background-color 0.25s";
    miniWaterText5.style.color = "white";
    miniWaterSpan5.style.color = "white";
  }

  if (x == 6) {
    bottle(5);

    remainingWaterText.innerHTML = "0.5L";
    water1.style.display = "flex";
    water1.style.height = "75%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "25%";
    waterText1.innerHTML = "75%";

    miniWater6.style.background = "rgb(106, 179, 247)";
    miniWater6.style.transition = "background-color 0.25s";
    miniWaterText6.style.color = "white";
    miniWaterSpan6.style.color = "white";
  }

  if (x == 7) {
    bottle(6);

    remainingWaterText.innerHTML = "0.25L";
    water1.style.display = "flex";
    water1.style.height = "87.5%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "12.5%";
    waterText1.innerHTML = "87.5%";

    miniWater7.style.background = "rgb(106, 179, 247)";
    miniWater7.style.transition = "background-color 0.25s";
    miniWaterText7.style.color = "white";
    miniWaterSpan7.style.color = "white";
  }

  if (x == 8) {
    bottle(7);

    firstSpan.innerHTML = "";
    remainingWaterText.innerHTML = "";

    //remainingWaterText.innerHTML = "0L";

    water1.style.display = "flex";
    water1.style.height = "100%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "0%";
    waterText1.innerHTML = "100%";

    miniWater8.style.background = "rgb(106, 179, 247)";
    miniWater8.style.transition = "background-color 0.25s";
    miniWaterText8.style.color = "white";
    miniWaterSpan8.style.color = "white";
  }
}

/*function bottle1() {
  if (bottlePressed1 == true) {
    bottlePressed1 = false;

    remainingWaterText.innerHTML = "1.75L";
    water1.style.display = "flex";
    waterText1.innerHTML = "12.5%";
    water1.style.height = "12.5%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "100% - 12.5%";

    miniWater1.style.background = "rgb(106, 179, 247)";
    miniWater1.style.transition = "background-color 0.25s";
    miniWaterText1.style.color = "white";
    miniWaterSpan1.style.color = "white";
  } else if (bottlePressed1 == false) {
    if (bottlePressed2 == false) {
      bottle2((bottlePressed2 = false));
      bottlePressed1 = false;
      bottlePressed2 = true;
      bottlePressed4 = true;
      bottlePressed5 = true;

      remainingWaterText.innerHTML = "1.75L";
      water1.style.display = "flex";
      waterText1.innerHTML = "12.5%";
      water1.style.height = "12.5%";
      water1.style.transition = "height 0.25s";
      textContainer.style.height = "100% - 12.5%";

      miniWater2.style.background = "rgb(237, 244, 253)";
      miniWater2.style.transition = "background-color 0.25s";
      miniWaterText2.style.color = "rgb(20, 79, 198)";
      miniWaterSpan2.style.color = "rgb(20, 79, 198)";

      miniWater4.style.background = "rgb(237, 244, 253)";
      miniWater4.style.transition = "background-color 0.25s";
      miniWaterText4.style.color = "rgb(20, 79, 198)";
      miniWaterSpan4.style.color = "rgb(20, 79, 198)";

      miniWater5.style.background = "rgb(237, 244, 253)";
      miniWater5.style.transition = "background-color 0.25s";
      miniWaterText5.style.color = "rgb(20, 79, 198)";
      miniWaterSpan5.style.color = "rgb(20, 79, 198)";
    } else {
      remainingWaterText.innerHTML = "2L";
      water1.style.display = "flex";
      water1.style.height = "0%";
      textContainer.style.height = "100%";

      miniWater1.style.background = "rgb(237, 244, 253)";
      miniWater1.style.transition = "background-color 0.25s";
      miniWaterText1.style.color = "rgb(20, 79, 198)";
      miniWaterSpan1.style.color = "rgb(20, 79, 198)";

      miniWater2.style.background = "rgb(237, 244, 253)";
      miniWater2.style.transition = "background-color 0.25s";
      miniWaterText2.style.color = "rgb(20, 79, 198)";
      miniWaterSpan2.style.color = "rgb(20, 79, 198)";

      bottlePressed1 = true;
    }
  }
}

function bottle2() {
  if (bottlePressed2 == true) {
    bottlePressed2 = false;
    bottle1((bottlePressed1 = true));

    remainingWaterText.innerHTML = "1.5L";
    water1.style.display = "flex";
    water1.style.height = "25%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "100% - 25%";
    waterText1.innerHTML = "25%";

    miniWater2.style.background = "rgb(106, 179, 247)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "white";
    miniWaterSpan2.style.color = "white";
  } else if (bottlePressed2 == false) {
    if (bottlePressed3 == false) {
      bottle3((bottlePressed3 = false));
      bottle4((bottlePressed4 = false));
      bottle5((bottlePressed5 = false));
      bottlePressed2 = false;
      bottlePressed3 = true;

      miniWater3.style.background = "rgb(237, 244, 253)";
      miniWater3.style.transition = "background-color 0.25s";
      miniWaterText3.style.color = "rgb(20, 79, 198)";
      miniWaterSpan3.style.color = "rgb(20, 79, 198)";
    } else {
      remainingWaterText.innerHTML = "1.75L";
      water1.style.display = "flex";
      water1.style.height = "12.5%";
      waterText1.innerHTML = "12.5%";
      textContainer.style.height = "87.5%";

      miniWater2.style.background = "rgb(237, 244, 253)";
      miniWater2.style.transition = "background-color 0.25s";
      miniWaterText2.style.color = "rgb(20, 79, 198)";
      miniWaterSpan2.style.color = "rgb(20, 79, 198)";

      miniWater3.style.background = "rgb(237, 244, 253)";
      miniWater3.style.transition = "background-color 0.25s";
      miniWaterText3.style.color = "rgb(20, 79, 198)";
      miniWaterSpan3.style.color = "rgb(20, 79, 198)";

      bottlePressed2 = true;
    }
  }
}

function bottle3() {
  if (bottlePressed3 == true) {
    bottlePressed3 = false;

    bottle2((bottlePressed2 = true));
    remainingWaterText.innerHTML = "1.25L";
    water1.style.display = "flex";
    water1.style.height = "37.5%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "100% - 37.5%";
    waterText1.innerHTML = "37.5%";

    miniWater3.style.background = "rgb(106, 179, 247)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "white";
    miniWaterSpan3.style.color = "white";
  } else if (bottlePressed3 == false) {
    if (bottlePressed4 == false) {
      bottle4((bottlePressed4 = false));
      bottle5((bottlePressed5 = false));
      //bottle4(false);
      bottlePressed3 = false;
      bottlePressed4 = true;

      miniWater4.style.background = "rgb(237, 244, 253)";
      miniWater4.style.transition = "background-color 0.25s";
      miniWaterText4.style.color = "rgb(20, 79, 198)";
      miniWaterSpan4.style.color = "rgb(20, 79, 198)";
    } else {
      bottlePressed3 = true;
      bottle4((bottlePressed4 = false));

      remainingWaterText.innerHTML = "1.5L";
      water1.style.display = "flex";
      water1.style.height = "25%";
      textContainer.style.height = "75%";
      waterText1.innerHTML = "25%";

      miniWater3.style.background = "rgb(237, 244, 253)";
      miniWater3.style.transition = "background-color 0.25s";
      miniWaterText3.style.color = "rgb(20, 79, 198)";
      miniWaterSpan3.style.color = "rgb(20, 79, 198)";
    }
  }
}

function bottle4() {
  if (bottlePressed4 == true) {
    bottlePressed4 = false;
    bottle3((bottlePressed3 = true));
    remainingWaterText.innerHTML = "1L";
    water1.style.display = "flex";
    water1.style.height = "50%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "50%";
    waterText1.innerHTML = "50%";

    miniWater4.style.background = "rgb(106, 179, 247)";
    miniWater4.style.transition = "background-color 0.25s";
    miniWaterText4.style.color = "white";
    miniWaterSpan4.style.color = "white";
  } else if (bottlePressed4 == false) {
    if (bottlePressed4 == false) {
      //bottle4((bottlePressed4 = false));
      bottle5((bottlePressed5 = false));
      //bottle4(false);
      //bottlePressed3 = false;
    } else {
      bottlePressed4 = true;

      remainingWaterText.innerHTML = "1.25L";
      water1.style.display = "flex";
      water1.style.height = "37.5%";
      textContainer.style.height = "100%-37.5";
      waterText1.innerHTML = "37.5%";

      miniWater4.style.background = "rgb(237, 244, 253)";
      miniWater4.style.transition = "background-color 0.25s";
      miniWaterText4.style.color = "rgb(20, 79, 198)";
      miniWaterSpan4.style.color = "rgb(20, 79, 198)";
    }
  }
}

function bottle5() {
  if (bottlePressed5 == true) {
    bottlePressed5 = false;
    bottlePressed3 = false;

    bottle4((bottlePressed3 = true));
    remainingWaterText.innerHTML = "0.75L";
    water1.style.display = "flex";
    water1.style.height = "62.5%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "37.5%";
    waterText1.innerHTML = "62.5%";

    miniWater3.style.background = "rgb(106, 179, 247)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "white";
    miniWaterSpan3.style.color = "white";

    miniWater4.style.background = "rgb(106, 179, 247)";
    miniWater4.style.transition = "background-color 0.25s";
    miniWaterText4.style.color = "white";
    miniWaterSpan4.style.color = "white";

    miniWater5.style.background = "rgb(106, 179, 247)";
    miniWater5.style.transition = "background-color 0.25s";
    miniWaterText5.style.color = "white";
    miniWaterSpan5.style.color = "white";
  } else if (bottlePressed5 == false) {
    bottlePressed5 = true;

    remainingWaterText.innerHTML = "1L";
    water1.style.display = "flex";
    water1.style.height = "50%";
    textContainer.style.height = "50%";
    waterText1.innerHTML = "50%";

    miniWater5.style.background = "rgb(237, 244, 253)";
    miniWater5.style.transition = "background-color 0.25s";
    miniWaterText5.style.color = "rgb(20, 79, 198)";
    miniWaterSpan5.style.color = "rgb(20, 79, 198)";
  }
}

/*if (bottlePressed2 == false) {
    remainingWaterText.innerHTML = "1.5L";
    water1.style.display = "flex";
    water1.style.height = "25%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "75%";
    waterText1.innerHTML = "25%";

    miniWater2.style.background = "rgb(106, 179, 247)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "white";
    miniWaterSpan2.style.color = "white";

    miniWater1.style.background = "rgb(106, 179, 247)";
    miniWater1.style.transition = "background-color 0.25s";
    miniWaterText1.style.color = "white";
    miniWaterSpan1.style.color = "white";
  }
  if (bottlePressed2 == true) {
    bottlePressed2 = false;

    remainingWaterText.innerHTML = "1.75L";
    water1.style.display = "flex";
    water1.style.height = "12.5%";
    textContainer.style.height = "87.5%";
    waterText1.innerHTML = "12.5%";
    miniWater2.style.background = "rgb(237, 244, 253)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "rgb(20, 79, 198)";
    miniWaterSpan2.style.color = "rgb(20, 79, 198)";*/

/*if (bottlePressed4 == true) {
    bottlePressed4 = false;

    waterText1.innerHTML = "12.5%";

    miniWater4.style.background = "rgb(237, 244, 253)";
    miniWater4.style.transition = "background-color 0.25s";
    miniWaterText4.style.color = "rgb(20, 79, 198)";
    miniWaterSpan4.style.color = "rgb(20, 79, 198)";

    miniWater2.style.background = "rgb(237, 244, 253)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "rgb(20, 79, 198)";
    miniWaterSpan2.style.color = "rgb(20, 79, 198)";

    miniWater3.style.background = "rgb(237, 244, 253)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "rgb(20, 79, 198)";
    miniWaterSpan3.style.color = "rgb(20, 79, 198)";
  }*/

/*if (bottlePressed3 == true) {
    bottlePressed3 = false;

    waterText1.innerHTML = "12.5%";

    miniWater2.style.background = "rgb(237, 244, 253)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "rgb(20, 79, 198)";
    miniWaterSpan2.style.color = "rgb(20, 79, 198)";

    miniWater3.style.background = "rgb(237, 244, 253)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "rgb(20, 79, 198)";
    miniWaterSpan3.style.color = "rgb(20, 79, 198)";
  }*/

/*if (bottlePressed2 == true && bottlePressed1 == false) {
    bottlePressed2 = false;

    remainingWaterText.innerHTML = "1.75L";
    water1.style.display = "flex";
    water1.style.height = "12.5%";
    textContainer.style.height = "87.5%";
    waterText1.innerHTML = "12.5%";

    miniWater2.style.background = "rgb(237, 244, 253)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "rgb(20, 79, 198)";
    miniWaterSpan2.style.color = "rgb(20, 79, 198)";
  }*/
/*

let miniWater2 = document.getElementById("miniWater2");

let miniWaterText2 = document.getElementById("miniWaterText2");
let miniWaterSpan2 = document.getElementById("miniWaterSpan2");

miniWater2.addEventListener("click", bottle2);

let bottlePressed2 = false;

function bottle2() {
  /*if (bottlePressed3 == true) {
    remainingWaterText.innerHTML = "1.5L";
    water1.style.display = "flex";
    water1.style.height = "25%";
    textContainer.style.height = "75%";
    waterText1.innerHTML = "25%";

    miniWater3.style.background = "rgb(237, 244, 253)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "rgb(20, 79, 198)";
    miniWaterSpan3.style.color = "rgb(20, 79, 198)";
  }*/

/*if (bottlePressed2 == false) {
    bottlePressed2 = true;
    bottle3((bottlePressed3 = true));

    remainingWaterText.innerHTML = "1.5L";
    water1.style.display = "flex";
    water1.style.height = "25%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "75%";
    waterText1.innerHTML = "25%";

    miniWater2.style.background = "rgb(106, 179, 247)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "white";
    miniWaterSpan2.style.color = "white";

    miniWater1.style.background = "rgb(106, 179, 247)";
    miniWater1.style.transition = "background-color 0.25s";
    miniWaterText1.style.color = "white";
    miniWaterSpan1.style.color = "white";
  } else if (bottlePressed2 == true) {
    bottlePressed2 = false;
    bottle3((bottlePressed3 = true));
    remainingWaterText.innerHTML = "1.75L";
    water1.style.display = "flex";
    water1.style.height = "12.5%";
    textContainer.style.height = "87.5%";
    waterText1.innerHTML = "12.5%";

    /* miniWater4.style.background = "rgb(237, 244, 253)";
    miniWater4.style.transition = "background-color 0.25s";
    miniWaterText4.style.color = "rgb(20, 79, 198)";
    miniWaterSpan4.style.color = "rgb(20, 79, 198)";

    miniWater3.style.background = "rgb(237, 244, 253)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "rgb(20, 79, 198)";
    miniWaterSpan3.style.color = "rgb(20, 79, 198)";*/

/* miniWater2.style.background = "rgb(237, 244, 253)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "rgb(20, 79, 198)";
    miniWaterSpan2.style.color = "rgb(20, 79, 198)";
    //bottleCount1 = 1;
  }
}

let miniWater3 = document.getElementById("miniWater3");
let miniWaterText3 = document.getElementById("miniWaterText3");
let miniWaterSpan3 = document.getElementById("miniWaterSpan3");

miniWater3.addEventListener("click", bottle3);

let bottlePressed3 = false;

function bottle3() {
  /*if (bottlePressed4 == true) {
    bottlePressed4 = false;
    miniWater4.style.background = "rgb(237, 244, 253)";
    miniWater4.style.transition = "background-color 0.25s";
    miniWaterText4.style.color = "rgb(20, 79, 198)";
    miniWaterSpan4.style.color = "rgb(20, 79, 198)";
  }*/

/*bottle1((bottlePressed1 = true));
  bottle2((bottlePressed2 = true));

  if (bottlePressed3 == false) {
    remainingWaterText.innerHTML = "1.25L";
    water1.style.display = "flex";
    water1.style.height = "37.5%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "62.5%";
    waterText1.innerHTML = "37.5%";

    miniWater3.style.background = "rgb(106, 179, 247)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "white";
    miniWaterSpan3.style.color = "white";

    miniWater2.style.background = "rgb(106, 179, 247)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "white";
    miniWaterSpan2.style.color = "white";

    miniWater1.style.background = "rgb(106, 179, 247)";
    miniWater1.style.transition = "background-color 0.25s";
    miniWaterText1.style.color = "white";
    miniWaterSpan1.style.color = "white";
  } else if (bottlePressed3 == true) {
    remainingWaterText.innerHTML = "1.5L";
    water1.style.display = "flex";
    water1.style.height = "25%";
    textContainer.style.height = "75%";
    waterText1.innerHTML = "25%";

    miniWater3.style.background = "rgb(237, 244, 253)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "rgb(20, 79, 198)";
    miniWaterSpan3.style.color = "rgb(20, 79, 198)";
  }
}

/*

let miniWater4 = document.getElementById("miniWater4");
let miniWaterText4 = document.getElementById("miniWaterText4");
let miniWaterSpan4 = document.getElementById("miniWaterSpan4");

miniWater4.addEventListener("click", bottle4);

let bottlePressed4 = false;

function bottle4() {
  if (bottlePressed4 == false) {
    bottlePressed4 = true;
    bottlePressed1 = false;
    bottlePressed3 = false;
    bottlePressed2 = true;

    remainingWaterText.innerHTML = "1L";
    water1.style.display = "flex";
    water1.style.height = "50%";
    water1.style.transition = "height 0.25s";
    textContainer.style.height = "50%";
    waterText1.innerHTML = "50%";

    miniWater4.style.background = "rgb(106, 179, 247)";
    miniWater4.style.transition = "background-color 0.25s";
    miniWaterText4.style.color = "white";
    miniWaterSpan4.style.color = "white";

    miniWater3.style.background = "rgb(106, 179, 247)";
    miniWater3.style.transition = "background-color 0.25s";
    miniWaterText3.style.color = "white";
    miniWaterSpan3.style.color = "white";

    miniWater2.style.background = "rgb(106, 179, 247)";
    miniWater2.style.transition = "background-color 0.25s";
    miniWaterText2.style.color = "white";
    miniWaterSpan2.style.color = "white";

    miniWater1.style.background = "rgb(106, 179, 247)";
    miniWater1.style.transition = "background-color 0.25s";
    miniWaterText1.style.color = "white";
    miniWaterSpan1.style.color = "white";
  } else if (bottlePressed4 == true) {
    bottlePressed4 = false;

    remainingWaterText.innerHTML = "1.25L";
    water1.style.display = "flex";
    water1.style.height = "37.5%";
    textContainer.style.height = "62.5%";
    waterText1.innerHTML = "37.5%";

    miniWater4.style.background = "rgb(237, 244, 253)";
    miniWater4.style.transition = "background-color 0.25s";
    miniWaterText4.style.color = "rgb(20, 79, 198)";
    miniWaterSpan4.style.color = "rgb(20, 79, 198)";
  }
}*/
