import React from 'react'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import {orange500, blue500} from 'material-ui/styles/colors'
console.log('within signUP')
export default class SignUp extends React.Component {

  constructor (props) {
    super(props)
  }

  submitSignupForm () {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value

    let signup = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }

    axios.post('/api/auth', signup)
      .then((response) => {
        console.log('Successful AUTH reponse: ', response.data)
        document.querySelector('#email').value = ''
        document.querySelector('#password').value = ''
        document.querySelector('#confirmPassword').value = ''
      })
      .catch((error) => {
        console.log('Error in axios hotspot from POST: ', error)
      })
  }

  render () {
    const styles = {
      errorStyle: {
        color: orange500
      },
      underlineStyle: {
        borderColor: orange500
      },
      floatingLabelStyle: {
        color: orange500
      },
      floatingLabelFocusStyle: {
        color: blue500
      }
    }
    return (
      <div>

       <input placeholder='Email' id='email' />
        <input placeholder='Password' id='password' />
        <input placeholder='Please confirm password' id='confirmPassword' />

        <button onClick={this.submitSignUpForm}>Submit Form</button>
      </div>
    )
  }
}

