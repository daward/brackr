import React, { Component } from 'react'
import { Button, Modal, Divider, Container, Dropdown } from 'semantic-ui-react'
import FacebookLogin from 'react-facebook-login'

class Login extends Component {

  responseFacebook = (response) => {
    this.props.login({
      name: response.name,
      id: response.id,
      loginType: "facebook"
    });
  }

  responseGuest = () => {
    this.props.login({
      loginType: "guest"
    });
  }

  render() {
    if (this.props.id) {
      return (<div>
        <Dropdown text={this.props.name} className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => this.props.logout()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <Button size="tiny" content={this.props.name} onClick={() => {
          this.props.logout();
        }} /> */}
      </div>)
    }
    return (
      <Modal
        open={true}
        size='small' >
        <Modal.Header>
          Login
    </Modal.Header>
        <Modal.Content>
          <Container textAlign="center">
            <FacebookLogin
              appId="485406948523518"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook} />
            <Divider horizontal>Or</Divider>
            <Button onClick={() => this.responseGuest()} content="Continue as Guest" />
          </Container>
        </Modal.Content>
      </Modal>)
  }
}

export default Login