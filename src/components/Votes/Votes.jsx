import React, { useState } from "react";
import { updateVotes } from "../../utils/api";
import * as BiIcons from "react-icons/bi";
import "./Votes.css";

const Votes = ({ review_id, votes }) => {
  const [voteInc, setVoteInc] = useState(0);

  const handleClick = (click) => {
    setVoteInc((curVotes) => {
      if (1 === click) {
        return curVotes + 1;
      } else {
        return curVotes - 1;
      }
    });
    updateVotes(review_id, click).catch((err) => {
      if (1 === click) {
        setVoteInc((currVotes) => currVotes - 1);
      } else {
        setVoteInc((currVotes) => currVotes + 1);
      }
    });
  };

  return (
    <section className="votes">
      <button
        className="vote-btn"
        onClick={() => handleClick(+1)}
        disabled={voteInc > 0}
      >
        <BiIcons.BiUpvote />
      </button>

      <p>{votes + voteInc}</p>
      <button
        className="vote-btn"
        onClick={() => handleClick(-1)}
        disabled={voteInc < 0}
      >
        <BiIcons.BiDownvote />
      </button>
    </section>
  );
};

export default Votes;
