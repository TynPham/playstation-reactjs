import React from "react";

const Title = ({ data }) => {
  return (
    <div className="text-center pt-9 flex flex-col items-center">
      <h2 className="font-light text-[2.55rem]">{data.title}</h2>
      {data.content ? (
        <p className="text-[1.35rem] opacity-70 mt-2 max-w-[80%]">
          {data.content}
        </p>
      ) : null}
    </div>
  );
};

export default Title;
