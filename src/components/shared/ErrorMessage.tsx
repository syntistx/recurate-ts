/* eslint-disable react/destructuring-assignment */
import '../../stylesheets/errors.scss';

export const ErrorMessage = (error: {
  message: string
}) => (
  <>{error ? <p className="error-message">{error.message}</p> : null}</>
);
