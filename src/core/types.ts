export interface KeyVal {
  [key: string]: string
}

export interface Request {
  body?: object
  params?: KeyVal
  query?: any
}

export interface TokenContext {
  email: string
}

export interface UserContext {
  email: string
}

export interface Context extends Request {
  context: UserContext
}