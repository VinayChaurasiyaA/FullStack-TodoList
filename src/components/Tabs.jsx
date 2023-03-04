
import React from 'react'
import { useDispatch } from 'react-redux'

import { toogleTabs } from '../redux/actions'
import { TABS } from '../redux/actions/type'
const Tabs = ({currentTabs}) => {
    const dispatch = useDispatch();
  return (
    TABS.map((tab , index) => (
        <button className={tab === currentTabs ? 'button selected' : 'button'} 
        key={index} onClick= {() => dispatch(toogleTabs(tab))}>{tab}</button>
    ))
  )
}

export default Tabs
