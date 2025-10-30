import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({children,disabled,to,type ='primary'}) {
    const className = `
     disabled:curser-not-allowed focus:ring focus:ring-yellow-300
     focus:ring-offset-2 focus:outline-none 
     inline-block bg-yellow-400 px-4 py-3 font-semibold 
     uppercase text-stone-800 hover:bg-yellow-300 rounded-xl transition-colors
     duration-300 sm:px-6 sm:py-4`
     const base = `
     disabled:curser-not-allowed focus:ring focus:ring-yellow-300
     focus:ring-offset-2 focus:outline-none 
     inline-block bg-yellow-400  font-semibold 
     uppercase text-stone-800 hover:bg-yellow-300 rounded-xl transition-colors
     duration-300 `

     const styles ={
      primary:base + ` px-4 py-3 md:px-6 md:py-4`,
      small:base + ` text-sm px-4 py-2 md:px-5 md:py-2.5`,
     
      secondary: `
     disabled:curser-not-allowed focus:ring focus:ring-stone-200
     focus:ring-offset-2 focus:outline-none 
     inline-block border-2 border-stone-300  font-semibold hover:text-stone-600
     uppercase text-stone-800 hover:bg-stone-300 rounded-xl transition-colors
     duration-300 px-4 py-2.5 md:px-6 md:py-3.5 `
     }
    if(to){
        return<Link className={styles[type]} to={to}>{children}</Link>
    }
 else return (
    <button disabled ={disabled} className={styles[type]}>{children}</button>
  )
}
