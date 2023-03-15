import React, { Fragment } from "react";


const TestFrag = () => {
  return(
    <div>
        <p>frag test1</p>
        <p>frag test2</p>
        <Column />
    </div>
  )
}


const Column = () => {
    return(
        <Fragment>
            <p>frag test3</p>
            <p>frag test4</p>
        </Fragment>
    )
}

export default TestFrag;