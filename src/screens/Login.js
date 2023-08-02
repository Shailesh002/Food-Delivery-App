import React,{useState} from 'react'
import { Link , Navigate, useNavigate} from 'react-router-dom'


export default function Login() {
  const [credentials, setcredentials] = useState({ email:"", password:""});

  let navigate=useNavigate();

  const handleSubmit = async (e) => {
      //Q. What is a synthetic event :preventDefault
      e.preventDefault();
      const response = await fetch("http://localhost:3001/api/loginuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: credentials.email, password: credentials.password })
      });

      const json = await response.json();
      console.log(json);


      if (!json.success) {
          alert("Enter Valid Credentials");
      }

      else {
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
  }


  const onChange = (event) => {
      setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }


  return (
    <div>
      <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
                </div>

                <button type="submit" className="m-3 btn btn-primary">Submit</button>
                <Link to="../createuser" className='m-3 btn btn-danger'> Not a User?</Link>
            </form>
        </div>
    </div>
  )
}
