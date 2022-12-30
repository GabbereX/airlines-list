import React, { FC } from 'react'

import { Logo } from '../../svg'
import { Content } from '../Content'

import styles from './Container.module.scss'

export const Container: FC = () => {
	return (
		<section className={ styles.container }>
			<div className={ styles.header }>
				<a href='/' className='d-flex flex-justify-center'>
					<Logo />
				</a>
			</div>
			<Content />
    </section>
	)
}
