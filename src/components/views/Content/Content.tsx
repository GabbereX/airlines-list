import React, { FC, useState } from 'react'

import api from '../../../api/tickets.json'

import { Filter } from '../Filter'
import { List } from '../Card'

import { IData } from '../../../types/data.types'
import { generateId } from './Content.utils'

export const Content: FC = () => {
	const initialData = api.tickets.map(item => { return { ...item, id: generateId() }})
	const [data, setData] = useState<IData[]>(initialData)

	console.log(data)

	return (
    <div className='d-flex'>
      <Filter initialData={ initialData } setData={ setData } />
      <List dataList={ data } />
    </div>
	)
}
