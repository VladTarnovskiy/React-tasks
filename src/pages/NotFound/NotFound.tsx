import './notFound.scss';

function NotFound() {
  return (
    <div className="error_wrapper">
      <div className="error_code">404</div>
      <div className="error_descript">The page you are looking for not avaible!</div>
      <div className="error_animation" />
    </div>
  );
}

export default NotFound;
