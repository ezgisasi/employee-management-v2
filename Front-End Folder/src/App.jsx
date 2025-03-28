import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
import PrivateRoute from './Components/PrivateRoute'
import Project from './Components/Project'
import AddProject from './Components/AddProject'
import EditProject from './Components/EditProject'
import AddTask from './Components/AddTask'
import EditTask from './Components/EditTask'
import Tasks from './Components/Tasks'
import EmployeeTaskDetail from './Components/EmployeeTaskDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/employee_login' element={<EmployeeLogin />}></Route>
        <Route path='/employee_detail/:employeeId' element={<EmployeeDetail />}></Route>
        <Route path='/dashboard' element={
          <PrivateRoute >
            <Dashboard />
          </PrivateRoute>
        }>
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/employee' element={<Employee />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/project' element={<Project />}></Route>
          <Route path='/dashboard/employee-task-detail/:userId' element={<EmployeeTaskDetail />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
          <Route path='/dashboard/add_employee/:userId?' element={<AddEmployee />}></Route>
          <Route path='/dashboard/add_project/:projectId?' element={<AddProject />}></Route>
          <Route path='/dashboard/task' element={<Tasks />}></Route>
          <Route path='/dashboard/add_task/:taskId?' element={<AddTask />}></Route>
          <Route path='/dashboard/edit_project/:projectId' element={<EditProject />}></Route>
          <Route path='/dashboard/edit_task/:taskId' element={<EditTask />}></Route>
          <Route path='/dashboard/edit_employee/:emplyeeId' element={<EditEmployee />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
