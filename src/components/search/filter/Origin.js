import React from 'react'
import CustomMenuSelect from './utilis/CustomMenuSelect'
import { originsBinding } from '../../utilis/bindingValue'

const Origin = () => {
  return (
    <div>
      <CustomMenuSelect attribute="origin" label="Origine" binding={originsBinding}/>
    </div>
  )
}

export default Origin
