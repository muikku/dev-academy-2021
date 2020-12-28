const { useEffect } = require("react")
const { useStateValue } = require("../state")
const staticNamesListInJSON = require("../names.json")

// I guess I did this hook because normally we would need to make an async
// request from backend to get names data. 

const useNames = () => {
  const [state, dispatch] = useStateValue()
  
  useEffect(() => {
    dispatch({
      type: 'SET_NAMES',
      data: staticNamesListInJSON.names
    })
  }, [dispatch])
}

export default useNames