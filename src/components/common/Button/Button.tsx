import cn from 'classnames'
import React, { FC } from 'react'

import { IButtonProps } from './Button.types'

import styles from './Button.module.scss'

export const Button: FC<IButtonProps> = ({ buttonText, currency, onClick }) => {
	const buttonClasses = cn(
		styles.button_blue,
		'd-flex full-width flex-justify-center',
		currency === buttonText && styles.active_blue
	)

	return (
    <button
	    className={ buttonClasses }
	    onClick={ () => onClick(buttonText) }
    >
      <span className='button-text'>
        { buttonText }
      </span>
    </button>
	)
}
