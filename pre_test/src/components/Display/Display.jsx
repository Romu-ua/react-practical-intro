import React from 'react'
import styles from './Display.module.css'

export default function ({children}) {
  return (
	<div className={styles.display}>
		{children}
	</div>
  )
}