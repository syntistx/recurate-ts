import '../../stylesheets/auth.scss';

interface AuthPageProp {
  children: JSX.Element | JSX.Element[]
}

export const AuthPage = ({ children }: AuthPageProp) => (
  <div className="auth-page">
    <div className="auth-background">{children}</div>
  </div>
);
