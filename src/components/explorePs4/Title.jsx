import React from "react";

const Title = ({ data }) => {
  return (
    <div className="text-center pt-9">
      <h2 className="font-light text-[2.55rem]">{data.title}</h2>
      {data.content ? (
        <p className="text-[1.35rem] opacity-70 mt-2">{data.content}</p>
      ) : null}
    </div>
  );
};

export default Title;
