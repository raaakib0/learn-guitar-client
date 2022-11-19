import React, { useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import './RightSideNav.css';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

//////////////////////////////////////////////////////////////////////
// import React from "react";
// import './Activities.css';


// function Activities(props) {
//     const { name, img, time, body } = props.activiti;
//     return (
//         <div className="Activities-container">
//             <div>
//                 <img src={img} alt="" />
//                 <h2>{name}</h2>
//                 <p>{body} </p>
//                 <p> Rent Per Day : {time} Taka</p>
//             </div>
//             <button onClick={() => props.buttonFunction(props.activiti)} className="add-button">Add to list</button>
//         </div>
//     );
// }

// export default Activities;
    ////////////////////////////////////////////////////////////////////

function RightSideNav(props) {
    const { WorkOutDetails } = props;
    // console.log(WorkOutDetails)
    let totalTime = 0;
    for (const activities of WorkOutDetails) {
        totalTime = totalTime + activities.time;
    }

    const breakTime = (brtime) => {
        const a = document.getElementById('breakTimeValue');
        a.innerText = brtime;
        localStorage.setItem("Break-Time", brtime);
    }

    useEffect(() => {
        const storedTime = localStorage.getItem('Break-Time');
        if (storedTime) {
            const a = document.getElementById('breakTimeValue');
            a.innerText = storedTime;
        }
    }, []);


    const successfull = () => {
        alert('successfull');
    }

    // const notify = () => toast("Wow so easy!");

    return (

        <div className="WorkOut-container">
            {/* <button onClick={notify}>Notify!</button>
            <ToastContainer /> */}
            {/* user information */}
            <h3 className="h3">Select Driver  </h3>
            <div className="user-info">
                <img src="My Photo.jpg" alt="" />
                <div className="user-text">
                    <h2>Md. Rakibul Islam</h2>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className="user-info background">
                <div className="user-text">
                    <h2>60 <small>kg</small> </h2>
                    <p>Weight</p>
                </div>
                <div className="user-text">
                    <h2>5.7"<small>ft</small> </h2>
                    <p>Height</p>
                </div>
                <div className="user-text">
                    <h2>25 <small>yr</small> </h2>
                    <p>Age</p>
                </div>
            </div>

            {/* braeak time */}


            <h3>Select Days</h3>
            <div className="user-info background">
                <button onClick={() => breakTime('1 Day')}>1 d</button>
                <button onClick={() => breakTime('2 Days')}>2 d</button>
                <button onClick={() => breakTime('3 Days')}>3 d</button>
                <button onClick={() => breakTime('4 Days')}>4 d</button>
                <button onClick={() => breakTime('5 Days')}>5 d</button>

            </div>

            {/* Exercise details */}

            <h3>Cart Details</h3>

            <div className="exercise-details background">
                <p>Total Amount :</p>
                <p>{totalTime} Taka</p>
            </div>
            <div className="exercise-details background">
                <p>Total :</p>
                <p id="breakTimeValue">0 Day</p>
            </div>

           
            <button onClick={() => successfull()} className="background activity-completed" > <h3>Make Payment</h3> </button>
            
        </div>
    );
}

export default RightSideNav;