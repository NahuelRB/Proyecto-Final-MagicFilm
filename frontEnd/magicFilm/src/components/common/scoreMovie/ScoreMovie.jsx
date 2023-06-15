import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography'


const ScoreMovie = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <StarIcon fontSize="string" sx={{color:'#ffd700', fontSize: '70px'}}></StarIcon>

        <Typography variant="h4" color="initial" sx={{marginLeft: "10px"}} >4.5</Typography>
 
    </div>
  )
}

export default ScoreMovie