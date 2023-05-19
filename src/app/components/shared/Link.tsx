import React from "react";

type Props = {
  text: string;
};

const Link = ({ text }: Props) => {
  return (
    <a href="/" className="hover:text-spotBlue">
      {text}
    </a>
  );
};

export default Link;
