import React from 'react';

const Profile = () => {
    return (
        <div className="d-flex justify-content-center align-items-center container-fluid profile">
            <form>
                <h2>Iniciar Sesion</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Profile;
