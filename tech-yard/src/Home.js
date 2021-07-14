import React ,{useState} from 'react'
import { selectUser } from './features/userSlice';
import {  useSelector } from 'react-redux' ;
import {Link} from 'react-router-dom'
import "./Home.css";
import './bootstrap.css';
import { auth } from './firebase';
import Avatar from '@material-ui/core/Avatar';
import logo from './tech_yard_logo.jpeg' ;
import Books from './Books';

function Home() {
    const user=useSelector(selectUser) ;
    const [searchCourse,setSearchCourse] = useState('') ;
    const [course,setCourse] = useState('tech') ;
    
    const search=()=>{
        setCourse(searchCourse);
    }
    
    const signOut=()=>{
        auth.signOut();
    }

    return (
        <div class="fluid-container">

            <div class="header bg-secondary text-white ">
        
                <div class="row">
                    <div class="col-sm-3 offset-sm-1 ">
                        <img src={logo} className="img img-fluid logo" alt="" />
                    </div>
                    <div class="col offset-sm-2 offset-5"> 
                        <div class="row ">
                             <div class="col-sm-2 header-items test">
                                 <a href="http://localhost:1111/test/vikant" class="link">TEST</a>
                             </div>
                             <div class="col-sm-2 header-items">
                                 <Link to="/" className="link">Home</Link>
                             </div>
                             <div class="col-sm-3 header-items">
                                 <Link to="/Contact" className="link">Contact</Link>
                             </div>
                             <div class="col-sm-3 header-items">
                                 <Link to="/About" className="link">About</Link>
                             </div>
                             <div class="col-sm-2 header-items">
                                 <Link  ><Avatar onClick={signOut} className="avatar" src={user.photo} /></Link>
                             </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class=" row mt-5 mt-5">
                <div class=" col-sm-6 offset-sm-2 mt-2">
                     <input type="email" value={searchCourse} onChange={e=>setSearchCourse(e.target.value)} id="email" className="form-control bg-light-gray" placeholder="Search Course..." required/>
                </div>
                <div class=" col-sm-3 mt-2">
                     <button onClick={search} className='btn btn-primary form-control btnc'>Search Course</button>
                </div>
            </div>

            <div className="row">
                 <div className="col">
                      <Books searchCourse={course}/>
                 </div>
            </div>


        </div>
    )
}

export default Home
