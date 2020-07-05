import React, { useState, useEffect } from "react";

const RowData = ({
  id,
  comments,
  points,
  title,
  url,
  storyUrl,
  author,
  created,
  storyTitle,
  text
}) => {
  const upvote = points || 0;
  const [hiddenId, setHiddenId] = useState([]);
  const [upvoteId, setUpvoteId] = useState([]);
  const link =storyUrl || url || "";
  const isIdStored = store => {
    let arr = localStorage.getItem(store);
    arr = arr ? arr.split(",") : [];
    return arr.includes(id);
  };
  useEffect(() => {
    setHiddenId(isIdStored("hiddenRowIds"));
    setUpvoteId(isIdStored("upvotedRowIds"));
  });

  const createdHour =
    created &&
    new Date().getHours() -
      new Date(created.substring(0, created.length - 1)).getHours();

  const setStorage = row => {
    let idArray = localStorage.getItem(row);
    idArray = idArray ? idArray.split(",") : [];
    idArray.push(id);
    localStorage.setItem(row, idArray.toString());
  };
  const hideRow = () => {
    setStorage("hiddenRowIds");
    setHiddenId(true);
  };
  const upvoteRow = () => {
    setStorage("upvotedRowIds");
    setUpvoteId(true);
  };
  return hiddenId ? (
    <></>
  ) : (
    <div className="rowcontainer">
      <div className="numbers">{comments || 0}</div>
      <div className="numbers">
        <span>{upvoteId ? upvote + upvoteId : upvote}</span>
        {!upvoteId ? (
          <img
            className="upvote cursor"
            src="/triangular.svg"
            alt="Upvote"
            onClick={upvoteRow}
          />
        ) : (
          <img
            className="upvote"
            src="/triangleVoted.svg"
            alt="Upvoted"
          />
        )}
      </div>
      <div className="titleContainer">
        <div>
          {title || storyTitle || text || ""}
          <span className="url">
            {link &&
              `(${link &&
                link
                  .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                  .split("/")[0]})`}
          </span>
        </div>

        <div className="author">{`by ${author}`}</div>
        <div className="url">{`${
          createdHour > 0 ? createdHour : 24 + createdHour
        } hours ago`}</div>
        <button className="hide" onClick={hideRow}>
          [ hide ]
        </button>
      </div>
    </div>
  );
};
export default RowData;
