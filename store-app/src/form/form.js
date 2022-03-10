import React from 'react';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'

export const Form = () => (
  <>
    <h1>Create product</h1>

    <form>
      <TextField label="name" id="name" />

      <TextField label="size" id="size" />

      <InputLabel htmlFor="type">Type</InputLabel>

      <Select
        native
        value=""
        inputProps={{
          name: 'type',
          id: 'type',
        }}
      >
        <option aria-label="None" value="" />
        <option value="electronic">Electronic</option>
        <option value="furniture">Furniture</option>
        <option value="clothing">Clothing</option>
      </Select>
    </form>
  </>
)

export default Form;
