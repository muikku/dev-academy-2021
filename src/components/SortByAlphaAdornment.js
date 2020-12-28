import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import { InputAdornment, Typography, Button } from "@material-ui/core"
import { useStateValue } from "../state"
import { green, grey } from '@material-ui/core/colors';
import { ALPHA } from '../utils/static';

const SortByAlphaAdornment = () => {
  const [{ sort }, dispatch] = useStateValue()
  const isSortedByAlphabet = sort === ALPHA

  const handleClick = () => isSortedByAlphabet ? setSort(null) : setSort(ALPHA)
  const setSort = newSortValue => dispatch({ type: 'SET_SORT', data: newSortValue})

  const sortedByText = isSortedByAlphabet ? 'sorted by alphabet' : 'sorted by amount'
  const style = isSortedByAlphabet ? { color: green[500]} : { color: grey[500]}

  return (
    <InputAdornment position="end">
      <Button 
        onClick={handleClick} 
        endIcon={<SortByAlphaIcon style={style}/>}
      >
        <Typography variant='caption' style={style}>{sortedByText}</Typography>
      </Button>
    </InputAdornment>
  )
}

export default SortByAlphaAdornment
