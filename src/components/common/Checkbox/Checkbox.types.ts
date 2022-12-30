import { TransferCount } from '../../../consts/enums.consts'
import { THandleChangeCheckbox } from '../../views/Filter/Filter.types'

export interface ICheckbox {
	label: string
	value: TransferCount
	checked: boolean
}

export interface ICheckboxProps extends ICheckbox{
	onChange: THandleChangeCheckbox
}
