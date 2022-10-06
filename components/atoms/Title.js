import React from "react";

export const Title = ({ classname, content, h1 }) => {
  return (
    <>
      {h1 ? (
        <h1 className={classname}>{content}</h1>
      ) : (
        <h2 className={classname}>{content}</h2>
      )}
    </>
  );
};
