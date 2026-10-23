import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css"

const Auth = () => {
        const navigate = useNavigate();
        const[email , setEmail] = useState('');
        const[password , setPassword] = useState('');
        const[isSugnedUp, setIsSignedUp] = useState(false)
        const[name, setName] = useState('')
        const[age, setAge] = useState('')

        async function handleSubmit(e){
            e.preventDefault();
            let userdata = {
              email,
              password,
            };
            console.log('signing in')
            try{
                let response = await fetch('http://localhost:5000/signin', 
                    {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userdata)
                }
                );
                let the_data = await response.json();
                console.log(the_data);
                navigate('/Admin');
            } catch(err){
            console.log(err); 
        }
        console.log(document.cookie)
    }

    async function handleSignup(e){
            e.preventDefault();
            let userdata = {
                email,
                password,
                name,
                age
            };

            console.log('signing up')
            try{
                let response = await fetch('http://localhost:5000/signin', 
                    {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userdata)
                }
                );
                let the_data = await response.json();
                console.log(the_data);
                navigate('/Admin');
            } catch(err){
            console.log(err); 
        }
    }

    
  return (
    <div>
      <div className={`sign signup ${isSugnedUp? 'hide':''}`}>
         <h1>Register</h1>
         <form onSubmit={handleSignup}>
            <div>
              <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="your name" />
            </div>
            <div>
              <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="your age" />
            </div>
            <div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" />
            </div>
            <div>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="your password" />
            </div>
         
            <button type="submit">Signup</button>
            <span onClick={()=> setIsSignedUp(true)}>Already Signed Up?</span>
         </form>       
      </div>   

      <div className={`sign signin ${isSugnedUp? '':'hide'}`}>
         <h1>Login</h1>
         <form onSubmit={handleSubmit}>
            <div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" />
            </div>
            <div>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="your password" />
            </div>
            <button type="submit">Login</button>
            <span onClick={()=> setIsSignedUp(false)}>Not Signed Up?</span>
         </form>       
      </div>  

    </div>
  );
};

export default Auth;