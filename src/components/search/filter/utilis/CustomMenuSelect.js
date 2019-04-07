import React from 'react'
import { connectMenu } from 'react-instantsearch-dom'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import detectingMobileDevice from '../../../register/utilis/detectingMobileDevice'

const MenuSelect = ({ items, currentRefinement, refine }) => {
if (detectingMobileDevice) {
  return (
    <FormControl style={{width: '90%', marginBottom: 30, marginTop: 20 }}>
      <InputLabel>Région</InputLabel>
      <NativeSelect
        value={currentRefinement || ''}
        onChange={event => refine(event.target.value)}>
        <option value="">--</option>
        {
          items.map((item, index) => {
            return <option key={index} value={item.isRefined ? currentRefinement : item.value}>
              {item.label}
            </option>
          })
        }
      </NativeSelect>
    </FormControl>
  )
} else {
  return (
    <FormControl style={{width: '90%', marginBottom: 30, marginTop: 20 }}>
      <InputLabel>Région</InputLabel>
      <Select value={currentRefinement || ''}
              onChange={event => refine(event.target.value)}>
        <MenuItem value="">--</MenuItem>
        {
          items.map((item, index) => {
            return <MenuItem key={index} value={item.isRefined ? currentRefinement : item.value}>
              {item.label}
            </MenuItem>
          })
        }
      </Select>
    </FormControl>
    )
  }


// return  <select
//     value={currentRefinement || ''}
//     onChange={event => console.log(event.currentTarget.value)}
//   >
//     <option value="">See all options</option>
//     {items.map(item => (
//       <option
//         key={item.label}
//         value={item.isRefined ? currentRefinement : item.value}
//       >
//         {item.label}
//       </option>
//     ))}
//   </select>




}

const CustomMenuSelect = connectMenu(MenuSelect)

export default CustomMenuSelect
