import React from "react";

const RadioBtnCom = () => {
  return (
    <div class='radio-element'>
      <div class='radio-component'>
        <input type='radio' class='radio' />
        <span>Black</span>
      </div>
      <div class='radio-component'>
        <input type='radio' /> <span> white</span>
      </div>
      <div class='radio-component'>
        <input type='radio' />{" "}
        <span> There isn't enough information to be certain.</span>
      </div>
      <br />
      <div class='d-grid gap-3 col-10 mx-auto'>
        <button class='btn btn-dark' type='button'>
          Submit
        </button>

        <button class='btn btn-outline-dark' type='button'>
          Show explanation
        </button>
      </div>
    </div>
  );
};

export default RadioBtnCom;
