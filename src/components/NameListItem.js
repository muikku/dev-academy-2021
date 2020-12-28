import { ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

const NameListItem = ({name}) => {
  return (
    <ListItem key={name.name}>
      <ListItemText>{name.name}, {name.amount}</ListItemText>
    </ListItem>
)
}
export default NameListItem