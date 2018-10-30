import React from 'react';

const Nav = ({navigate}) =>(
            <ul className='nav'>
                <li onClick={()=> navigate('signUp')}> SignUp </li>
                <li onClick={()=> navigate('login')}> Login </li>
            </ul>
        )

export default Nav;
