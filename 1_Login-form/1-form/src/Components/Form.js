import React, {useState} from 'react';
import './Form.css';


function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(""); 
    const [password, setPassword] = useState("");

    const handleSubmit = (e)  => {
        e.preventDefault();
        console.log(name, email, phone, password);

        fetch("http://localhost:5000/register", { 
            method: 'POST',
            crossDomain: true,
            body: JSON.stringify({
                name, 
                email,
                phone,
                password
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister");
        })
    }

    return (
        <div className='container'>
            <form className='content' onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Phone no.'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form