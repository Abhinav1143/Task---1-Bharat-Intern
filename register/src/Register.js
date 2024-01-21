import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
const Register = () => {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [cpassword,setcpassword] = useState('')

    const submitHandle =(e) =>{
       e.preventDefault();

       axios.post('http://localhost:8000/register',{
         name:name,
         email:email,
         password:password,
         cpassword:cpassword
       }).then((res) =>{
            console.log(res.data)
            if(res.data=="Registration is successfull")
            {
                alert("Registration Successfull");
            }
            if(res.data== "already existing user")
            {
                alert('already existing user')
            }
            setname('')
            setpassword('')
            setemail('')
            setcpassword('')
       }).catch((err)=>{
        console.log(err)
       })
    }
  return (
    <div>
    <section className="vh-100">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-4">
              <div className="card rounded-3 bg-light">
                <div className="card-body p-4">
                  <h2 className="text-uppercase text-center mb-4">Register</h2>
  
                  <form>
  
                    <div className="mb-3">
                     
                      <input type="text" id="name" className="form-control form-control-lg" placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
                    </div>
  
                    <div className="mb-3">
                  
                      <input type="email" id="email" className="form-control form-control-lg" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
  
                    <div className="mb-3">
                      
                      <input type="password" id="password" className="form-control form-control-lg" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
  
                    <div className="mb-3">
                      
                      <input type="password" id="cpassword" className="form-control form-control-lg" placeholder="Confirm Password" value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
                    </div>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="" id="termsCheck" />
                      <label className="form-check-label" htmlFor="termsCheck">
                        I agree to all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>
  
                    <div className="d-grid">
                      <button type="button" className="btn btn-primary btn-lg text-light" onClick={submitHandle}>Register</button>
                    </div>
  
                    <p className="text-center text-muted mt-3 mb-0">Already have an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
  
                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  
  )
}

export default Register
