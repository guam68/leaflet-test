import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <div className="nav-container">
        <nav className="nav-wrap">
          <div className="nav-contents">
            <h1 className="header">
              TSTT
            </h1>
            <ul className="link-list">
              <li>
                <a className="page-link" href="/">
                  Home
                </a>
              </li>
              {!!keycloak.authenticated && (
                <li>
                  <a className="page-link" href="/map">
                    Map
                  </a>
                </li>
              )}
            </ul>
            <div className="login-wrap">
              {!keycloak.authenticated && (
                <button
                  type="button"
                  onClick={() => keycloak.login()}
                >
                  Login
                </button>
              )}

              {!!keycloak.authenticated && (
                <button
                  type="button"
                  onClick={() => keycloak.logout()}
                >
                  Logout ({keycloak.tokenParsed.preferred_username})
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav