import React, { useState } from 'react'
import './LoginModal.css'
export const LoginModal = ({setShowLogin}) => {
  const [currState,setCurrState]=useState('Login');
  return (
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="loginModalLabel">{currState}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          {currState==="Sign Up"?
               <input type="text" class="form-control mb-3" id="fname" placeholder='Full Name'/>
              : <></>}
            <input type="email" class="form-control mb-3" id="email" placeholder='Email'/>
            <input type="password" class="form-control mb-3" id="password" placeholder='Password'/>
          <p><input type='checkbox'/> By continuing, i agree to terms of use & privacy policy.</p>
        </form>
      </div>
      <div class="modal-footer">
              {currState==="Login"?
               <p>Create a new account? <span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>
              : <p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login here</span></p>}
               <button type="button" class="btn btn-sm btn-primary">{currState=='Sign Up'?"Create Account":"Login"}</button>
      </div>
    </div>
  </div>
</div>
  )
}
export default LoginModal