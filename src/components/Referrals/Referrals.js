import React from 'react'
import './Referrals.css'
import SideBar from '../SideBar/SideBar'
import ReferralsBody from './ReferralsBody'
// import { images } from '../../constants'


function Referrals() {
  return (
    <div className='home'>
         <SideBar/>
        <ReferralsBody/>
        

    </div>
  )
}

export default Referrals