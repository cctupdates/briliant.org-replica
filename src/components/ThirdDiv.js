import React, { Fragment, useState } from "react";
import DropDown from "./DropDown";
import Slider from "./Slider";

const ThirdDiv = ({ showbtn, showData }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      {hidden ? (
        <Fragment>
          <div className='third-div'>
            <button
              className='btn btn-light'
              onClick={() => setHidden(!hidden)}
            >
              Lesson 1 <i className='fas fa-caret-down'></i>
            </button>
            <h1>WARMUP PUZZLES</h1>

            <Slider />

            {showbtn === true ? (
              <div class='d-grid gap-3 col-6 mx-auto'>
                <button class='btn btn-dark' type='button'>
                  Continue
                </button>
              </div>
            ) : null}

            {showData ? (
              <Fragment>
                <div class='radio-element'>
                  <div class='radio-component'>
                    <input type='radio' class='radio' />
                    <span>1</span>
                  </div>
                  <div class='radio-component'>
                    <input type='radio' />
                    <span>2</span>
                  </div>
                  <div class='radio-component'>
                    <input type='radio' />
                    <span>3</span>
                  </div>
                  <div class='radio-component'>
                    <input type='radio' />
                    <span>4</span>
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
              </Fragment>
            ) : null}
          </div>
        </Fragment>
      ) : (
        <DropDown />
      )}
    </div>
  );
};
ThirdDiv.defaultProps = {
  showbtn: false,
  showData: false,
};

export default ThirdDiv;
