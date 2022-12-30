import { ButtonStyle } from '../../../consts/enums.consts'

export interface IButtonProps {
	buttonText: string
	currency?: string
	onClick: (value: string) => void
	buttonStyle?: ButtonStyle
}
