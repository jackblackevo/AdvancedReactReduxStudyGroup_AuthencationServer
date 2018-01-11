export default function loggerMiddleware ({dispatch, getState}) {
  return next => action => {
    console.log('action logger :', action)
    return next(action)
  }
}
