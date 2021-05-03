import React, { Fragment } from "react";
import LeftGrid from "./LeftGrid";

import RadioBtnTemp from "./RadioBtnTemp";

const ThirdPage = () => {
  return (
    <Fragment>
      <section class='new-container'>
        <LeftGrid />
        <div class='second-div'>
          <img
            class='center'
            src='https://ds055uzetaobb.cloudfront.net/brioche/uploads/TvY8JiPVvOPqN1nhUDFL6d-Course-Logic-Reillustrated-1571-95-OYBsYF.png?width=480'
            alt=''
          />

          <p>
            One of the women above is named Kaylee and the other is named Inara.
            They each make a statement about who they are as shown.
          </p>
          <p>
            We know that at least one of them is lying. What color is Inara's
            dress?
          </p>
        </div>
        <RadioBtnTemp />
      </section>
    </Fragment>
  );
};

export default ThirdPage;
