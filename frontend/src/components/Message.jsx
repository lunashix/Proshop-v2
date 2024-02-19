import { Alert }  from 'react-bootstrap'

const Message = ( { variant, children }) => {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  )
}
// Set default value for variant prop
Message.defaultProps = {
  variant: 'info',
}

export default Message