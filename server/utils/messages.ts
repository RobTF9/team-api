const errorMessage = (message: string) => ({
  type: 'error',
  message,
  visible: true,
})

const succesMessage = (message: string) => ({
  type: 'success',
  message,
  visible: true,
})

export const SUCCESS_MESSAGE = {
  RESOURCE_CREATED: (resource: string) => succesMessage(`${resource} created`),
  RESOURCE_UPDATED: (resource: string) => succesMessage(`${resource} updated`),
  RESOURCE_DELETED: (resource: string) => succesMessage(`${resource} deleted`),
  SUCCESSFUL_SIGN_IN: succesMessage('Successfully signed in'),
  SUCCESSFUL_SIGN_UP: succesMessage('Successfully signed up'),
  SUCCESSFUL_SIGN_OUT: succesMessage('Successfully signed out'),
  AUTHORIZED: errorMessage('Authorized'),
}

export const ERROR_MESSAGE = {
  INTERNAL_SERVER: errorMessage('Internal server error'),
  NO_EMAIL_OR_PASSWORD: errorMessage('Provide an email and password'),
  NO_EMAIL_OR_USERNAME_OR_PASSWORD: errorMessage('Provide an email, username and password'),
  INVALID_EMAIL_OR_PASSWORD: errorMessage('Invalild email and password '),
  EMAIL_IN_USE: errorMessage('Email address is already in use'),
  USERNAME_IN_USE: errorMessage('Username is already in use'),
  NOT_AUTHORIZED: errorMessage('Not authorized'),
  RESOURCE_NOT_FOUND: (resource: string) => succesMessage(`${resource} deleted`),
}
