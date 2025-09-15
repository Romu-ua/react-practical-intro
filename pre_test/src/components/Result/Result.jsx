import React from 'react'
import styles from './Result.module.css'
import Confetti from 'react-confetti'

export default function Result({maxQuizLen, correctNumLen}) {
	return (
		<>
			<div className={styles.Result}>
				あなたの正解数は...
				<span className={styles.resultHighlight}>
					{`全${maxQuizLen}中 ${correctNumLen}問正解`}
				</span>
				でした！
			</div>
			<Confetti gravity={0.1} />
		</>
	)
}
