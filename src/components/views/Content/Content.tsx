import React, { FC } from 'react'

import { Filter } from '../Filter'
import { List } from '../Card'

export const Content: FC = () => {
	return (
    <div className='d-flex'>
      <Filter />
      <List />
    </div>
	)
}
