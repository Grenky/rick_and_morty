import React, { useState } from "react";

function Error() {
    const [error, setError] = useState(false);

    if(error) {
        throw Error('wow Error!!!');
    } return(
        <button onClick={() => setError(true)}>call error</button>
    )
}

export default Error;