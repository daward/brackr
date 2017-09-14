import { connect } from 'react-redux'
import LoginComponent from '../components/login'

const mapStateToProps = (state) => {
  return {
    id: state.currentUser.id,
    name: state.currentUser.name
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: ({ name, id, loginType }) => {
      dispatch({ type: "LOGIN", name, id, loginType });
    },
    logout: () => {
      dispatch({ type: "LOGOUT" })
    }
  }
}


const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default Login

