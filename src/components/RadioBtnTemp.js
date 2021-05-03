import React from "react";
import RadioBtnCom from "./RadioBtnCom";
import Slider from "./Slider";

const RadioBtnTemp = () => {
  return (
    <div class='third-div'>
      <button class='btn btn-light'>
        Lesson 1 <i class='fas fa-caret-down'></i>
      </button>
      <h1>WARMUP PUZZLES</h1>
      <Slider />
      <RadioBtnCom />
    </div>
  );
};

export default RadioBtnTemp;
