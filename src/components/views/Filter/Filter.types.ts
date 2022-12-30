import { TransferCount } from '../../../consts/enums.consts'
import { IData } from '../../../types/data.types'

export type THandleChangeCheckbox = (value: TransferCount, isChecked: boolean, isOnly?: boolean) => void

export interface IFilterProps {
	initialData: IData[]
	setData: (data: IData[]) => void
}
