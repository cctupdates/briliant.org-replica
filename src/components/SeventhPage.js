import React from "react";
import LeftGrid from "./LeftGrid";
import ThirdDiv from "./ThirdDiv";

const SeventhPage = () => {
  return (
    <div>
      <section className='new-container'>
        <LeftGrid />
        <div class='second-div'>
          <p>Five friends competed in a race.</p>
          <div class='sixth-page-inner-div'>
            <ol>
              <li>There is exactly 1 false statement in this list.</li>
              <li>There are exactly 2 false statements in this list.</li>
              <li>There are exactly 3 false statements in this list.</li>
            </ol>
          </div>
          <p>How many false statements are there in the list above?</p>
        </div>
        <ThirdDiv showData={true} />
      </section>
    </div>
  );
};

export default SeventhPage;
