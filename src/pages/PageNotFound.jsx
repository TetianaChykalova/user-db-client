import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <Link to={'/users'}>Back to userList</Link>
      </div>
    );
  }
  
  export default NotFoundPage;