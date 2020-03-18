import React from 'react'
import md5 from 'md5'

function Gravatar(props) {
    const email = props.email;
    console.log(email);
    const hash = md5(email);

    return  (
        <img
            className={props.className}
            src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
            alt="Avatar"
            {...console.log(`https://www.gravatar.com/avatar/${hash}?d=identicon`)}
          />
    )
}   

export default Gravatar