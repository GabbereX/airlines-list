import cn from 'classnames'
import React, { FC, useEffect, useState } from 'react'

import { currencies, transferCountCheckboxes } from '../../../consts/view.consts'

import { Button } from '../../common/Button'

import { Currencies, TransferCount } from '../../../consts/enums.consts'

import styles from './Filter.module.scss'
import { Checkbox } from '../../common/Checkbox/Checkbox'
import { ICheckbox } from '../../common/Checkbox/Checkbox.types'
import { IFilterProps, THandleChangeCheckbox } from './Filter.types'

export const Filter: FC<IFilterProps> = ({ initialData, setData }) => {
	const [currency, setCurrency] = useState<string>(Currencies.RUB)
	const [checkboxes, setCheckboxes] = useState<ICheckbox[]>(transferCountCheckboxes)

	const handleChangeCheckbox: THandleChangeCheckbox = (value, isChecked, isOnly) => {
		const checkboxesOptions: ICheckbox[] = checkboxes.map(option => {
			!isOnly && (value === TransferCount.ALL || value === option.value)
				&& (option.checked = !isChecked)

			isOnly && (option.checked = value === option.value)

			return option
		})

		const checkedCheckboxes: ICheckbox[] =
			checkboxesOptions.slice(1).filter(checkbox => checkbox.checked)

		checkboxesOptions[0].checked =
			checkedCheckboxes.length === checkboxesOptions.length - 1

		setCheckboxes(checkboxesOptions)
	}

	useEffect(() => {
		const isCheckedAll = checkboxes[0].checked

	  if (!isCheckedAll) {
			const checkedCheckboxes = checkboxes.slice(1)
				.reduce((acc: number[], item: ICheckbox) => {
					return item.checked ? [...acc, item.value] : acc
				}, [])

		  const filteredData = initialData.filter(item =>
			  checkedCheckboxes.includes(item.stops))

		  !checkedCheckboxes.length ? setData(initialData) : setData(filteredData)
	  } else setData(initialData)
	}, [checkboxes])

	return (
    <div className={ cn(styles.filter, 'bg-white shadow-container border-radius') }>
      <div>
	      <h3 className='title-3'>
		      Валюта
	      </h3>
	      <div className={ cn(styles.filter_currency, 'd-flex flex-justify-space-between pt-12 pb-30') }>
		      {
			      currencies.map(buttonText =>
				      <Button
					      key={ buttonText }
					      buttonText={ buttonText }
					      currency={ currency }
					      onClick={ setCurrency }
				      />
			      )
		      }
	      </div>
      </div>

	    <div>
		    <h3 className='title-3'>
			    Количество пересадок
		    </h3>
		    <ul className='pt-12'>
			    {
				    checkboxes.map(option =>
				      <Checkbox
					      key={ option.value }
					      label={ option.label }
					      value={ option.value }
					      checked={ option.checked }
					      onChange={ handleChangeCheckbox }
				      />
				    )
			    }
		    </ul>
	    </div>
    </div>
	)
}
