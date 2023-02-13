import React, { useEffect, useState } from 'react'
import useMouse from '@react-hook/mouse-position'

const movementStrength = 23

export function MainBackground({ children }) {
  const ref = React.useRef(null)
  const mouse = useMouse(document.body, {
    enterDelay: 100,
    leaveDelay: 100,
  })
  const [newPosition, setNewPosition] = useState()

  useEffect(() => {
    const height = movementStrength / document.body.clientHeight
    const width = movementStrength / document.body.clientWidth
    const pageX = mouse.pageX - document.body.clientWidth / 2
    const pageY = mouse.pageY - document.body.clientHeight / 2
    const newvalueX = width * pageX * -1
    const newvalueY = height * pageY * -1
    const newPosition = 'calc( 50% + ' + newvalueX + 'px ) calc( 50% + ' + newvalueY + 'px )'
    setNewPosition(newPosition)
  }, [mouse])

  return (
    <div ref={ref} style={{ backgroundPosition: newPosition }} className="animated-bg bg-main-bg">
      {children}
    </div>
  )
}
