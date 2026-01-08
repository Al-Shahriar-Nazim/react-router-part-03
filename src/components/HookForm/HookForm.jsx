import React from 'react';
import UseInputFeild from '../../Hooks/UseInputFeild';

const HookForm = () => {
    const [name,nameOnChange] = UseInputFeild('');
    const [email,emailOnChange] = UseInputFeild('');
    const [password,passwordOnChange] = UseInputFeild('');
    
    const handleHookForm = e =>{
        e.preventDefault();
        console.log(email,name,"password :",password);
        
    }
    return (
        <div>
            <form onSubmit={handleHookForm}>
                <input placeholder='name' type="text" defaultValue={name} onChange={nameOnChange}/>
                <br />
                <input placeholder='email' type="email" defaultValue={email} onChange={emailOnChange} />
                <br />
                <input type="password" placeholder='password' defaultValue={password} onChange={passwordOnChange}/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;