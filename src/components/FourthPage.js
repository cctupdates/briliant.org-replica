import React from "react";
import LeftGrid from "./LeftGrid";
import ThirdDiv from "./ThirdDiv";

const FourthPage = () => {
  return (
    <div>
      <section class='new-container'>
        <LeftGrid />
        <div class='second-div'>
          <img
            class='center'
            src='https://ds055uzetaobb.cloudfront.net/brioche/uploads/TvY8JiPVvOPqN1nhUDFL6d-Course-Logic-Reillustrated-1172-21754-irYAOI.png?width=400'
            alt=''
          />

          <p>
            The next three problems gradually increase in difficulty, and all of
            them are more challenging than the warm-ups you just solved.
          </p>
          <p>
            It's worth the effort. The most effective learning experiences are
            often those times when you get a problem wrong, and then challenge
            yourself to read, understand, and learn from the solution.
          </p>
        </div>
        <ThirdDiv showbtn={true} />
      </section>
    </div>
  );
};

export default FourthPage;
