import React, { Fragment, useState } from "react";
import ThirdDiv from "./ThirdDiv";

const DropDown = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <Fragment>
      {hidden ? (
        <ThirdDiv />
      ) : (
        <Fragment>
          <div class='right-div' id='new-element'>
            <div id='drop-header'>
              <div>
                <h3>Introduction</h3>
                <p>Put your logic to the test with these warmups!</p>
              </div>
              <div onClick={() => setHidden(true)}>
                <span>
                  {" "}
                  <i class='fas fa-times'></i>
                </span>
              </div>
            </div>
            <div class='right-container'>
              <div class='card-new'>
                <div>
                  <img
                    src='https://ds055uzetaobb.cloudfront.net/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png'
                    alt=''
                  />
                </div>
                <div>
                  <h4>Warmup Puzzles</h4>
                  <p>Get started with some logic warmups.</p>
                </div>
              </div>
              <div class='card-new'>
                <div>
                  <img
                    src='https://ds055uzetaobb.cloudfront.net/chapter/Truth-Seeking-c83EPA.png'
                    alt=''
                  />
                </div>
                <div>
                  <h4>Truth-Seeking</h4>
                  <p>Who or what is telling the truth?</p>
                </div>
              </div>
              <div class='card-new'>
                <div>
                  <img
                    src='https://ds055uzetaobb.cloudfront.net/chapter/Machine_Logic_and_Strategy-jrTuIK-2FIeRk.png'
                    alt=''
                  />
                </div>

                <div>
                  <h4>Strategic Deductions</h4>
                  <p>
                    Stretch the information you're given as far as it can go!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default DropDown;
