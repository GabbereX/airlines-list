import { TransferCount } from '../../../consts/enums.consts'

export type THandleChangeCheckbox = (value: TransferCount, isChecked: boolean, isOnly?: boolean) => void
