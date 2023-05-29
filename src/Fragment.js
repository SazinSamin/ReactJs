import React from "react";
import { Fragment } from "react";

const FragmentTest = () => {
  return (<>
    <h1>This is Fragment Example</h1>
  </>)
}

const FragmentTest2 = () => {
  return (<Fragment>
    <h1>Another style of writing fragment</h1>
  </Fragment>)
}

export {FragmentTest, FragmentTest2};