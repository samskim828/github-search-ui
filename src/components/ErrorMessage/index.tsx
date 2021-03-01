import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react"

interface ErrorAlertProps {
  description: string;
}

const ErrorMessage: React.FC<ErrorAlertProps> = ({ description }) => {

  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Uh oh!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        {description}
      </AlertDescription>
    </Alert>
  )
}

export default ErrorMessage;