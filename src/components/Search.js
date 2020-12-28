
import { TextField } from "@material-ui/core"
import { useStateValue } from "../state"
import SortByAlphaAdornment from './SortByAlphaAdornment';

const Search = () => {
  const [{ filter }, dispatch] = useStateValue()
  const handleChange = event => dispatch({
     type: 'SET_FILTER', data: event.target.value
    })
  return (
    <TextField 
      label="Search for name"
      value={filter}
      onChange={handleChange}
      InputProps={{
        endAdornment: <SortByAlphaAdornment />
      }}
    />
  )
}

export default Search