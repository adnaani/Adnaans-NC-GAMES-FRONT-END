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
      setVoteInc((currVotes) => {
        return currVotes + 0;
      });
    });
  };

  return (
    <section className="votes">
      <BiIcons.BiUpvote
        className="vote-btn"
        onClick={() => handleClick(+1)}
        disabled={voteInc > 0}
      />
      <p>{votes + voteInc}</p>
      <BiIcons.BiDownvote
        className="vote-btn"
        onClick={() => handleClick(-1)}
        disabled={voteInc > 0}
      />
    </section>
  );
};

export default Votes;
