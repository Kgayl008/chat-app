import React from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Input = () => {
  return (
    <div className=' flex bg-base-300 absolute bottom-0 w-full p-3 '>
      <input type="text" placeholder="Send a message..." className="border-none w-full bg-base-300"/>
        <label htmlFor="file-input" className="icon">
        <AttachFileIcon fontSize="large"/>
      </label>
      <input
        id="file-input"
        type="file"
        style={{ display: 'none' }}
      />
      <button className="btn btn-secondary">Send</button>
    </div>
  )
}

export default Input