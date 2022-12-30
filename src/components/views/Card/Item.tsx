import cn from 'classnames'

import React, { FC } from 'react'
import { IItemProps } from './Card.types'

import { ButtonStyle } from '../../../consts/enums.consts'
import { Button } from '../../common/Button'

import styles from './Card.module.scss'

export const Item: FC<IItemProps> = ({ dataItem }) => {
	const {
		carrier,
		price,
		departure_time,
		departure_date,
		arrival_time,
		arrival_date,
		stops,
		origin,
		origin_name,
		destination,
		destination_name
	} = dataItem

	const getStopsDeclension = (): string => {
		if (stops === 1) return 'ка'
	  if (stops > 1 || stops < 5) return 'ки'

		return 'ок'
	}

	const formattedDate = (initialDate: string) => {
		const date = new Date(initialDate)

		const day = date.getDate()
		const month = date.toLocaleString('ru', { month: 'short' }).replace('.', '')
		const year = date.getFullYear()
		const weekday = date.toLocaleString('ru', { weekday: 'short' })
		const formattedWeekday =  weekday[0].toUpperCase() + weekday.slice(1)


		return `${ day } ${ month } ${ year }, ${ formattedWeekday }`
	}

	console.log(formattedDate(departure_date))

	return (
		<li className={ cn(styles.card, 'd-flex bg-white shadow-container border-radius') }>
      <div className={ styles.card_left }>
	      <img
		      src={ require(`./assets/${ carrier.toLowerCase() }.png`) }
		      alt='Airline Image'
	      />
	      <Button
		      buttonText={ `Купить \n за ${ new Intl.NumberFormat().format(price) }₽` }
		      onClick={ () => undefined }
		      buttonStyle={ ButtonStyle.ORANGE }
	      />
      </div>

			<div className={ cn(styles.card_right, 'full-width') }>
				<div className={ cn(styles.card_right_top, 'd-flex flex-justify-space-between') }>
					<time>
						{ departure_time }
					</time>
					<div>
						{ `${ stops || 'Без' } Пересад${ getStopsDeclension() }` }
					</div>
					<time>
						{ arrival_time }
					</time>
				</div>
				<div className={ cn(styles.card_right_bottom, 'd-flex flex-justify-space-between') }>
					<div>
						<span>
							{ origin }
							{ `, ` }
							{ origin_name }
						</span>
						<time>
							{ formattedDate(departure_date) }
						</time>
					</div>
					<div>
						<span>
							{ destination }
							{ `, ` }
							{ destination_name }
						</span>
						<time>
							{ formattedDate(arrival_date) }
						</time>
					</div>
				</div>
			</div>
    </li>
	)
}
