import React from "react";

export const within = (val: number, min: number, max: number) => {
  return val <= max && val >= min;
};

const LengthReadout: React.FC<{ len: number; maxLen: number }> = (props) => {
  // TODO users can have a bio with 0 length
  //      so, minLen should be passed in
  if (!within(props.len, 1, props.maxLen)) {
    return (
      <>
        <span style={{ color: "red" }}>{props.len}</span>/{props.maxLen}
      </>
    );
  } else {
    return (
      <>
        {props.len}/{props.maxLen}
      </>
    );
  }
};

export default LengthReadout;
