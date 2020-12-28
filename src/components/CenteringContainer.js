import { Container, Grid } from '@material-ui/core'
import React from 'react'

const CenteringContainer = ({children}) => {
  return (
    <Container >
      <Grid container direction='column'  alignItems='stretch'>
        {children}
      </Grid>
    </Container>
  )
}

export default CenteringContainer
