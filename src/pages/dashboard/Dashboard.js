import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
const Dashboard = () => {
  const data = [
    { name: "G1", value: 200 },
    { name: "G2", value: 900 },
  ]
  const Array = [
    {
      name: "python",
      student: 13,
      fees: "30$"
    },
    {
      name: "java",
      student: 20,
      fees: "50$"
    },
    {
      name: "javaScript",
      student: 10,
      fees: "20$"
    },
    {
      name: "java",
      student: 20,
      fees: "50$"
    },
    {
      name: "Mern",
      student: 10,
      fees: "20$"
    },
    {
      name: "python",
      student: 13,
      fees: "30$"
    },
  ]
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <div class="row d-flex flex-row-reverse">
            <div class=" col p-2 ">
              <div>
                <Link to={'/bank-details'} className='text-primary'>View As Employee</Link>
              </div>
            </div>
            <div class="p-2  col">
              <Link to={'/bank-details'} className='text-primary'>Take Break</Link>
            </div>
            <div class="p-2 col ">
              <Link to={'/bank-details'} className='text-primary'>Punch in/Punch Out</Link>
            </div>
          </div>
        </div>
      </div>
      <div class="card mt-1">
        <div class="card-body">
          <div className='container'>
            <div class="row gap-5">
              <div class="col-12 col-md-2 border d-flex gap-3 m-auto rounded">
                <div>
                  <i class="fa fa-users fa-3x mt-4"></i>
                </div>
                <div>
                  <div className='text-center --color-danger --text-md'>5000</div>
                  <div className='text-center --color-success'>Total Employess</div>
                </div>
              </div>
              <div class="col-12 col-md-2 border d-flex gap-3 m-auto rounded">
                <div>
                  <i class="fa fa-users fa-3x mt-4"></i>
                </div>
                <div>
                  <div className='text-center --color-danger --text-md'>150</div>
                  <div className='text-center --color-success'>Total Department</div>
                </div>
              </div>
              <div class="col-12 col-md-2 border d-flex gap-3 m-auto rounded">
                <div>
                  <i class="fa fa-users fa-3x mt-4"></i>
                </div>
                <div>
                  <div className='text-center --color-danger --text-md'>20</div>
                  <div className='text-center --color-success'>Leave <br />Status</div>
                </div>
              </div>
              <div class="col-12 col-md-2 border d-flex gap-3 m-auto rounded">
                <div>
                  <i class="fa fa-users fa-3x mt-4"></i>
                </div>
                <div>
                  <div className='text-center --color-danger --text-md'>10</div>
                  <div className='text-center --color-success'>On Leave Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='text-black'>Employee Statistics <Link className='text-primary'>by employement</Link> <Link className='text-primary'>by designation by department</Link></div>
      </div>
      <div class="card mt-1">
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-md-6 ">
              <BarChart data={Array} width={370} height={280}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey={'student'} fill='#90EE90' />
              </BarChart>
            </div>
            <div class="col-12 col-md-6">
              <div className='container-fluid'>
                <h5>Total Attendance Today- {'25'}</h5>
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-md-4 mt-5'>
                    <PieChart width={100} height={100}>
                      <Pie
                        dataKey={"value"}
                        isAnimationActive={false}
                        data={data}
                        labelLine={false}
                        cx="50%"
                        cy="50%"
                        outerRadius={50}
                        fill='#8884d8'
                      />
                    </PieChart>
                  </div>
                  <div className='col-12 col-md-8 mt-5'>
                    <div className='container'>
                      <ul className='mt-5'>
                        <li className='mb-2'><input type='checkbox' /><span className='mx-2'>Early</span></li>
                        <li className='mb-2'><input type='checkbox' /><span className='mx-2'>Regular</span></li>
                        <li className='mb-2'><input type='checkbox' /><span className='mx-2'>Late</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard