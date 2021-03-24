import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './dashboard.css';
import Form from '../register/Form';
import userIcon from '../images/userIcon.png';

function Dashboard() {
    const [isUserLoggedin, setIsUserLoggedin] = useState(false);
    const [dashboardData, setDashboardData] = useState();
    const [isEditProfile, setIsEditProfile] = useState(false);
    const location = useLocation();
    useEffect(()=> {
        const userData = JSON.parse(localStorage.getItem('user'));
        setIsUserLoggedin(userData !== undefined && userData !== null);
        if(userData){
            axios.post("http://3.7.46.64:7003/user/get_user",{
                "access_token": userData?.data?.access_token
        }).then(function (response) {
            let data = response?.data?.data[0];
            if(data){
                Object.keys(data).map((key, index)=> {
                    data[key] = (data[key] === null ? '': data[key]);
                    return data[key];
                });
            }
            setDashboardData(data);
        })
        .catch(function (error) {
          console.log(error);
        });
        }
    },[location]);
    
    const handleCancelClick = (e) =>{
        setIsEditProfile(false);
    }
    return (
        <div className="content-inner">
            {
                !isUserLoggedin ?
                <div className="text-center">
                    <p className="align-middle h3">You need to sign in to access you account.</p>
                </div> :
                !isEditProfile ?
                    <div className="dashboad-data">
                        <div className="page-content page-container" id="page-content">
                            <div className="d-flex justify-content-center">
                                <div className="col-xl-6 col-md-12">
                                        <div className="card user-card-full">
                                                <div className="row m-l-0 m-r-0">
                                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                                        <div className="card-block text-center text-white">
                                                            <div className="m-b-25"> 
                                                            {
                                                                dashboardData?.photo ? <img width="100" src={dashboardData?.photo} className="img-radius" alt="User-Profile" /> :
                                                                <img src={userIcon} className="img-radius" alt="User-Profile" /> 
                                                            } 
                                                            </div>
                                                            <h6 className="f-w-600">{dashboardData?.firstname} {dashboardData?.lastname}</h6>
                                                            <p>{dashboardData?.description}</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                    <div className="card-block">
                                                        <button className="float-right p-0 btn btn-link" onClick={(e)=> { setIsEditProfile(true)}}>Edit</button>
                                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information </h6>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Email/Username</p>
                                                                <h6 className="text-muted f-w-400">{dashboardData?.email}</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                {/* <p className="m-b-10 f-w-600">Phone</p>
                                                                <h6 className="text-muted f-w-400">98979989898</h6> */}
                                                            </div>
                                                        </div>
                                                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Social</h6>
                                                        <div className="row">
                                                            <div className="col">
                                                                <p className="m-b-10 f-w-600">GitHub</p>
                                                                <h6 className="text-muted f-w-400"><a href={dashboardData?.github} >{dashboardData?.github}</a></h6>
                                                            </div>
                                                        </div> 
                                                        <div className="row">
                                                            <div className="col">
                                                                <p className="m-b-10 f-w-600">Stack Overflow</p>
                                                                <h6 className="text-muted f-w-400"><a href={dashboardData?.stackoverflow}>{dashboardData?.stackoverflow}</a></h6>
                                                            </div>
                                                        </div>                                                             
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                :
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title login-heading">Edit Profile</h3>
                                <Form isSignUp={false} formData={dashboardData} handleCancelClick={handleCancelClick} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
export default Dashboard;