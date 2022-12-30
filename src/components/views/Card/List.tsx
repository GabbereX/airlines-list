import React, { FC } from 'react'

import { Item } from './Item'

import { IListProps } from './Card.types'

export const List: FC<IListProps> = ({ dataList }) => {
	return (
    <ul className='full-width'>
	    {
		    dataList.map(dataItem =>
			    <Item
				    key={ dataItem.id }
				    dataItem={ dataItem }
			    />)
	    }

    </ul>
	)
}
