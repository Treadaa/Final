import React, { useState } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'
import './index.css'
import data from './data'
import styles from './styles.module.css'

export default function App() {
  const [open, set] = useState(false)

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '30%', background: 'hotpink' },
    to: {
      size: open ? '100%' : '30%',
      background: open ? 'white' : 'hotpink',
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 800 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi] , [
    0,
    open ? 0.1 : 0.6,
  ])
  const a=data[7]
  console.log(a)
  return (
   
    <div className={styles.wrapper}>
    
      
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set(open => !open)}>          
        {transition((style,a) => (
          <animated.div
            className={styles.a}
            style={{ ...style, background: a.css }}
            
          ></animated.div>
        ))}
        
      </animated.div>
     
    </div>
  )
}
