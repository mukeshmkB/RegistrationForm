import './index.css'
import {Component} from 'react'
class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errFirstName: false,
    errLastName: false,
    submit: false,
  }

  onClickSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({errFirstName: true})
    }
    if (lastName === '') {
      this.setState({errLastName: true})
    } else {
      this.setState({submit: true})
    }
  }
  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }
  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }
  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({errFirstName: true})
    } else {
      this.setState({errFirstName: false})
    }
  }
  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({errLastName: true})
    } else {
      this.setState({errLastName: false})
    }
  }
  render() {
    const {firstName, lastName, errFirstName, errLastName, submit} = this.state
    return (
      <>
        <div className="app-container">
          <div className="registration-container">
            <h1 className="form-heading">Registration</h1>
            {submit ? (
               <form className="form-container" onClick={this.onClickSubmitForm}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                  className="success-icon" alt = "success"
                />
                <p className="submit-msg">Submitted Successfully</p>
                <button type="submit" className="submit-btn-success">
                  Submit Another Response
                </button>
              </form>

            ) : (
              <form className="form-container" onClick={this.onClickSubmitForm}>
                <div className="input-container">
                  <label
                    className="input-label"
                    htmlFor="firstName"
                    className="input-label"
                  >
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="input-name"
                    placeholder="First name"
                    value={firstName}
                    onBlur={this.onBlurFirstName}
                    onChange={this.onChangeFirstName}
                  />
                  {errFirstName ? <p className="err-msg">Required*</p> : ''}
                </div>
                <div className="input-container">
                  <label
                    className="input-label"
                    htmlFor="lastName"
                    className="input-label"
                  >
                    Last NAME
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="input-name"
                    placeholder="Last name"
                    value={lastName}
                    onBlur={this.onBlurLastName}
                    onChange={this.onChangeLastName}
                  />
                  {errLastName ? <p className="err-msg">Required*</p> : ''}
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </>
    )
  }
}
export default RegistrationForm
