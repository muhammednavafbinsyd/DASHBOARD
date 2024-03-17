import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Paginations() {
    const Pages = 10;
  return (
    <div className="d-flex justify-content-center align-items-center my-3">
    <Stack spacing={2}>
      <Pagination count={Pages}  />
    </Stack>
  </div>
  )
}

export default Paginations