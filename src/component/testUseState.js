import React, { useState } from "react";z

export default function Component () {
  const getInitialState = () => true
const [visible, setVisibility] = useState(getInitialState(false))
  const handleCLick = () => {
    setVisibility((currentValue) => !currentValue)
  }
  return (
    <div className="container">
      <h1>What is React?</h1>

      <Button variant="primary" onClick={handleCLick}>Show</Button>
      {visible && <Card>
          <Card.Body>A JavaScript library with virtual DOM</Card.Body>
        </Card>
      }
    </div>
  )
}
