import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import '../../../styles/style.css';
import { getAuthenticatedUser } from '../config/ConfigIdentity';

function Navigator() {
    const [user, setUser] = useState('');
    useEffect(() => {
        async function getUser() {
            const user = await getAuthenticatedUser();
            setUser(user);
        }
        getUser();
    }, []);


        const style0 ={
              fontFamily: 'JetBrains Mono, monospace',
               backgroundColor: '#0d2738',
               color:'#26afa3'
            }
            const style1 = {
                color:'white',
                fontFamily: 'JetBrains Mono, monospace'
            }
            const style2 = {
                color:'#8edc9f',
            }
             const style3 = {
                color:'#26afa3 !important',
                  important: {
    color: '#26afa3',
    fontWeight: 'bold'
  }
            }

            
    return (
        <Fragment>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid my-2 mx-3">
                        <Link to="/" className="logo no-margin centrar-texto link-offset-2 link-underline link-underline-opacity-0 navbar-brand" style={style1}>
                            
                            <h1 className="logo__nombre no-margin fs-2 mx-2" style={style3.important}>
                               Cundi<span className="fw-bold" style={style2}>Code</span>
                            </h1>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={style3.important}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                     <Link className="nav-link active" aria-current="page" to="/editor"  style={style3.important}>Editor</Link>
                                </li>
                                <li className="nav-item">
                                   <Link className="nav-link" to="/"  style={style3.important}>Conceptos</Link>
                                </li>
                                <li className="nav-item">
                                </li>
                              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={style3.important}>
            Ejercicios
          </Link>
          <ul className="dropdown-menu"  style={style3.important}>
            <li><Link className="dropdown-item" to="/exercises">Lista de Ejercicios</Link></li>
            <li><Link className="dropdown-item" to="#">Nuestro Sistema</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">FAQ</Link></li>
          </ul>
        </li>
                            </ul>
                        
                            {user ? (
                                <Fragment>
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropstart ps-2 pe-2 ms-2 bg-success rounded">
                                            <a className="text-light nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {user.profile.name}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li>
                                                    <Link className="dropdown-item" to="/profile">Profile</Link>
                                                </li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li>
                                                    <Link className="dropdown-item" to="/logout">Logout</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </Fragment>
                            ) : (
                                <Fragment>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/login">Ingresa</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/signup">Registrate</Link>
                                        </li>
                                    </ul>
                                </Fragment>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    );
}
export default Navigator;