import { List, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../state'
import { returnCorrectSortFunction, totalAmount } from '../utils/functions'
import { ALPHA } from '../utils/static'
import NameListItem from './NameListItem'

const NameList = () => {
  const [{ filter, names, sort }] = useStateValue()
  const [filteredNames, setFilteredNames] = useState([])

  useEffect(() => {
    if(names){
        setFilteredNames(names.filter(name =>name.name.toLowerCase().includes(filter.toLowerCase())))
    }
  }, [filter, names])

  const isSortedByAlphabet = sort === ALPHA

  if(!names) return <Typography>loading names...</Typography>

  return (
    <div>
      <Typography>List below shows how popular a top name is at Solita. Showing a total of {filteredNames.length} names and that appear {totalAmount(filteredNames)} times at Solita.</Typography>
      <List>
        {filteredNames
        .sort(returnCorrectSortFunction(isSortedByAlphabet))
        .map(name => <NameListItem key={name.name} name={name}/>)}
      </List>
    </div>
  )
}

export default NameList