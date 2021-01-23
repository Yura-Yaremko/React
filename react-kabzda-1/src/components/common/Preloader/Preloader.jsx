import React from 'react'
import preloader from '../../../assets/images/preloader(2).svg'


let Preloader = (props) => {
    // return <div style={{ backgroundColor: 'green' }}>
    return <div>
        <img src={preloader} style={{ width: '125px', height: '125px' }} />
    </div>
}

export default Preloader