import React, { useState } from 'react'

const ShortCirEval = () => {
  const [demo, setDemo] = useState("");
  return (
    <div>
        <h1 className='h1style'>{demo || "technical"}</h1>
        <h1 className='h1style'>{demo && "vinod"}</h1>
    </div>
  )
}

export default ShortCirEval
