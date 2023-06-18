import React from "react";

interface Props {
  image: string;
  key: any;
}

const Responses = ({ image }: Props) => {
  return (
    <div>
      <img src={image} alt="" className="inline-flex" />
    </div>
  );
};

export default Responses;
