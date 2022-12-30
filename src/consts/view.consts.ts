import { Currencies, TransferCount } from './enums.consts'

export const currencies = [
	Currencies.RUB,
	Currencies.USD,
	Currencies.EUR
]

export const transferCountCheckboxes = [
	{
		label: 'Все',
		value: TransferCount.ALL,
		checked: false
	},
	{
		label: 'Без пересадок',
		value: TransferCount.NONE,
		checked: false
	},
	{
		label: '1 пересадка',
		value: TransferCount.ONE_TRANSFER,
		checked: false
	},
	{
		label: '2 пересадки',
		value: TransferCount.TWO_TRANSFER,
		checked: false
	},
	{
		label: '3 пересадка',
		value: TransferCount.THREE_TRANSFER,
		checked: false
	},
]
