import cn from 'classnames'
import React, { FC } from 'react'

import { IButtonProps } from './Button.types'

import styles from './Button.module.scss'
import { ButtonStyle } from '../../../consts/enums.consts'

export const Button: FC<IButtonProps> = (props) => {
	const {
		buttonText,
		currency,
		onClick,
		buttonStyle = ButtonStyle.BLUE
	} = props

	const buttonClasses = cn(
		styles[`button_${ buttonStyle }`],
		'd-flex full-width flex-justify-center',
		currency === buttonText && styles.active_blue
	)

	return (
    <button
	    className={ buttonClasses }
	    onClick={ () => onClick(buttonText) }
    >
      <span className={ buttonStyle === ButtonStyle.BLUE ? 'button-text' : 'option-text' }>
        { buttonText }
      </span>
    </button>
	)
}
