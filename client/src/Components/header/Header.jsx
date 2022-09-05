import React from 'react'
import './header.style.css'
import Lunch from '../../assets/Lunch.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='left'>
                <div className='content'>
                    <h1>
                        Find the Best <span className='up'>Hamburguers </span> <br />in the city, come visit us!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam natus saepe, dolorum mollitia aliquam molestiae voluptate nostrum magni, dolore repudiandae velit, exercitationem voluptatem nemo adipisci recusandae soluta explicabo dolor! Non?
                    </p>
                </div>
                </div>

                <div className='right'>
                    <img src={Lunch} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Header
