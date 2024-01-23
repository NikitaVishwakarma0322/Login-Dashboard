import React from 'react'
const Login = () => {
    return (
        <div>
            <form id='form'>
                <div className="container border rounded mt-5 col-sm-5 p-3 shadow-sm">
                    <h2 className="text-primary text-center ">Login Dashboard</h2>
                    <div className="my-2">
                        <label className="form-label">Login as</label>
                        <div className='d-flex gap-3'>
                            <select className="form-select">
                                <option selected>Select Your Role</option>
                                <option value="1">App Admin</option>
                                <option value="2">Department</option>
                                <option value="3">Manager</option>
                                <option value="3">Employee</option>
                            </select>
                            <select className="form-select">
                                <option selected>Select Role</option>
                                <option value="1">App Admin</option>
                                <option value="2">Department</option>
                                <option value="3">Manager</option>
                                <option value="3">Employee</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-2">
                        <label htmlFor="email" className="form-label">Enter Email</label>
                        <input type="text" id="email" name="email" className="form-control" />
                    </div>
                    <div className="my-2">
                        <label htmlFor="password" className="form-label">Enter Password</label>
                        <input type="password" id="password" name="password" className="form-control" />
                    </div>
                    <div className="my-2 d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="checkbox" />
                            <label className="form-check-label" htmlFor="checkbox">Remember me</label>
                        </div>
                        <div>
                            <a href={'/forget'} className=''>Forget Password</a>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="btn btn-primary form-control">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;