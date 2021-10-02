let string = `
.head {
    margin-top: 150px;
    border-radius: 75px 75px 0 50px;
  
  }
  .face {
    border: 3px solid black;
    border-radius: 75px 75px 20px 50px;
    background-color: rgb(254, 216, 35);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .leftEar {
    left: 100px;
    bottom: 10px;
    transform: rotate(-70deg);
    border-radius: 50% 50% 50% 0;
    background-color: rgb(254, 216, 35);
  }
  .leftEar::before {
    bottom: 0px;
    left: 95px;
    transform: rotate(0deg);
    border-radius: 0 50% 50% 0;
    background-color: rgb(35, 24, 21);
  }
  .rightEar {
    right: 38px;
    transform: rotate(-20deg);
    border-radius: 50% 50% 50% 0;
    background-color: rgb(254, 216, 35);
  }
  .rightEar::before {
    bottom: 0px;
    left: 60px;
    border-radius: 0px 50% 50% 50px;
    background-color: rgb(35, 24, 21);
  }
  .rightBrow {
    border: 2px solid black;
    top: 50px;
    left: 140px;
    background-color: black;
    transform: rotate(30deg);
  }
  .leftBrow {
    border: 2px solid black;
    top: 55px;
    right: 170px;
    background-color: black;
    transform: rotate(-30deg);
  }
  .leftEye {
    top: 52px;
    left: 140px;
    border-radius: 50%;
    background-color: black;
    transform: rotate(10deg);
  }
  .leftEye::before {
    background-color: white;
    border-radius: 50%;
    top: 3px;
    left: 8px;
  }
  .rightEye {
    top: 57px;
    right: 168px;
    border-radius: 50%;
    background-color: black;
  }
  .rightEye::before {
    background-color: white;
    border-radius: 50%;
    top: 5px;
    left: 8px;
  }
  .nose {
    background-color: black;
    top: 82px;
    left: 165px;
    transform: rotate(60deg);
    border-radius: 50% 0 50% 0;
  }
  .mouth::before {
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    top: -6px;
    left: -1px;
    border-radius: 0px 0px 15px 0;
    transform: rotate(45deg);
  }
  .mouth::after {
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    top: -4px;
    right: 51px;
    border-radius: 0px 0px 25px 0;
    transform: rotate(65deg);
  }
  .leftFace {
    top: 80px;
    left: 120px;
    transform: rotate(-30deg);
    background-color: rgb(254, 216, 35);
    border-radius: 0 0 0 20px;
    border-left: 3px solid black;
  }
  .leftFace::before {
    border: 3px solid black;
    border-radius: 50%;
    transform: rotate(30deg);
    top: -5px;
    right: 12px;
    background-color: rgb(233, 78, 36);
  }
  .rightFace {
    border: 3px solid black;
    top: 90px;
    right: 150px;
    border-radius: 50%;
    background-color: rgb(233, 78, 36);
  }
  .belly {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    background-color: rgb(254, 216, 35);
    border-radius: 150px 200px 100px 100px;
  }
  .belly::before {
    transform: rotate(-9deg);
    top: 0;
    border-right: 2px solid black;
    right: 7px;
    border-radius: 0 50% 20px 50%;
    background-color: rgb(254, 216, 35);
  }
  .leftHand {
    border-bottom: 2px solid black;
    border-radius: 50% 50% 50% 40%;
    top: -5px;
    left: 170px;
    background-color: rgb(254, 216, 35);
  }
  .leftHand::before {
    border-top: 2px solid black;
    border-radius: 50% 50% 0 0;
    top: 15px;
    left: 20px;
    transform: rotate(20deg);
  }
  .rightHand {
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-radius: 60px 0 50% 40%;
    top: 0;
    right: 200px;
    background-color: rgb(254, 216, 35);
  }
  .tagTop {
    border: 2px solid black;
    border-radius: 8px 0 0 14px;
    top: 30px;
    right: 165px;
    transform: rotate(-12deg);
    background-color: rgb(199, 110, 41);
  }
  .tagBottom {
    border: 2px solid black;
    border-radius: 8px 0 0 14px;
    top: 79px;
    right: 156px;
    transform: rotate(-12deg);
    background-color: rgb(199, 110, 41);
  }
  .leftFoot {
    border: 2px solid black;
    top: -15px;
    left: 50px;
    border-radius: 50% 0 50% 50%;
    transform: rotate(-30deg);
    background-color: rgb(254, 216, 35);
  }
  .leftFoot::before {
    border-top: 2px solid black;
    border-radius: 50% 50% 0 0;
    width: 25px;
    height: 10px;
    top: 10px;
    left: -1px;
  }
  .leftFoot::after {
    border-top: 2px solid black;
    border-radius: 50% 50% 0 0;
    width: 25px;
    height: 10px;
    top: 15px;
    left: 0px;
  }
  .rightFoot {
    border: 2px solid black;
    top: -15px;
    right: 50px;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(30deg);
    background-color: rgb(254, 216, 35);
  }
  .rightFoot::before {
    border-top: 2px solid black;
    border-radius: 50% 50% 0 0;
    width: 25px;
    height: 10px;
    top: 15px;
    right: 1px;
  }
  .rightFoot::after {
    border-top: 2px solid black;
    border-radius: 50% 50% 0 0;
    width: 25px;
    height: 10px;
    top: 10px;
    right: -1px;
  }
  .tail1 {
    background-color: red;
    bottom: 0;
    left: 0;
  }
  .tail2 {
    background-color: red;
    bottom: 20px;
    left: 25px;
    transform: rotate(90deg);
  }
  .tail3 {
    background-color: rgb(254, 216, 35);
    bottom: 40px;
    left: 30px;
  }
  .tail4 {
    background-color: rgb(254, 216, 35);
    bottom: 65px;
    left: 70px;
    transform: rotate(90deg);
  }
  .tail5 {
    background-color: rgb(254, 216, 35);
    bottom: 60px;
    left: 92px;
    border-radius: 20px 0 0 20px;
    transform: rotate(45deg);
  }`
export default string