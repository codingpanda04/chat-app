import React, { useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'

const ProfileUpdate = () => {

   const [image,setImage] = useState(false);

  return (
    <div className='profile'>
        <div className="profile-container">
          <form>
            <h3>Profile Details</h3>
            <label htmlFor="avatar">
              <input onChange={(e)=>setImage(e.target.files[0])} type="file" accept='.png, .jpg, .jpeg' id='avatar' hidden/>
              <img src={image? URL.createObjectURL(image) : assets.avatar_icon} alt=""/>
              upload profile photo
            </label>
            <input type="text" placeholder='Your name' required/>
            <textarea placeholder='Write your profile bio...' required></textarea>
            <button type="submit">Save</button>
          </form>
          <img src={image? URL.createObjectURL(image) : assets.logo_icon} alt="" className='profile-pic'/>
        </div>
    </div>
  )
}

export default ProfileUpdate