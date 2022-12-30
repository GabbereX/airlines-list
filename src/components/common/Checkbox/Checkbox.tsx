import React, { FC } from 'react'

import { ICheckboxProps } from './Checkbox.types'

import styles from './Checkbox.module.scss'
import { TransferCount } from '../../../consts/enums.consts'

export const Checkbox: FC<ICheckboxProps> = ({ label, checked, value, onChange }) => {
	return (
		<li className={ styles.checkbox }>
			<label className='d-flex flex-align-center cursor-pointer'>
				<input
					type='checkbox'
					className='mr-12 cursor-pointer'
					checked={ checked }
					onChange={ () => onChange(value, checked) }
				/>
				<span className='option-text'>
					{ label }
				</span>
			</label>
			{
				value !== TransferCount.ALL &&
					<button
						className={ styles.checkbox_button }
						onClick={ () => onChange(value, checked, true) }
					>
						Только
					</button>
			}

    </li>
	)
}
