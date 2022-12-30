import { Currencies } from '../../../consts/enums.consts'

export interface IButtonProps {
	buttonText: Currencies
	currency: Currencies
	onClick: (value: Currencies) => void
}
