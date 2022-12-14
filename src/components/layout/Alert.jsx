import React, { useContext } from 'react'
import {useState} from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
    const {alert} = useContext(AlertContext)
  return (
    alert !== null &&(
        <p className="flex items-start mb-4 space-x-2">
            {alert.type === 'error' && (<svg>
                <circle cx='12' cy='12' r='12' fill='#FECDD3'></circle>
            </svg>)}
            <p className="flex-1 text-base font-smibold leading-7 text-black">
                <strong>{alert.msg}</strong>
            </p>
        </p>
    )
  )
}

export default Alert
