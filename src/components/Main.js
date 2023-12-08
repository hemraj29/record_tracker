import React from 'react'
import './Main.css'
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import PieChart from './PieChart';
import { useState,useEffect } from 'react';


const Main = () => {

  const { user } = useContext(UserContext);
console.log("good",user)
  // Extracting gender and employment data from user context
  
 const [male , setMale] = useState(null);
 const [female , setfemale] = useState(null);
 const [other, setOthers] = useState(null);
    

  const employmentData = {
    labels: ['male', 'female', 'others'],
    datasets: [
      {
        data: [50, 30, 20], // Replace with actual data
        backgroundColor: ['#FFCE56', '#4BC0C0', '#FF6384'],
        hoverBackgroundColor: ['#FFCE56', '#4BC0C0', '#FF6384'],
      },
    ],
  };



  
  const [genderData, setGenderData] = useState(null);

  useEffect(() => {
    // Calculate gender percentage when user data changes
    if (user) {
      const maleCount = user.filter((u) => u.gender === 'male').length;
      const femaleCount = user.filter((u) => u.gender === 'female').length;
      const othersCount = user.length - maleCount - femaleCount;
      setMale(maleCount);
      setfemale(femaleCount);
      setOthers(othersCount);
  
      const genderData = {
        labels: ['Male', 'Female', 'Others'],
        datasets: [
          {
            data: [maleCount, femaleCount, othersCount],
            backgroundColor: ['#FFCE56', '#4BC0C0', '#FF6384'],
            hoverBackgroundColor: ['#FFCE56', '#4BC0C0', '#FF6384'],
          },
        ],
      };

      setGenderData(genderData);
    }
  }, [user]);










const chartData = {employmentData,genderData}




  return (
    <div className='container'>


    
    <div className='SideBar'>
      <h3>DASHBOARD</h3>
    </div>

       <div className='pie-container'>


       <PieChart data={chartData} />

       <div className='details'> 
        <span> <p>Total Male Candidate: {male}</p></span>

        <span> <p>Total Female Candidate: {female}</p></span>
        <span> <p>Total Others Candidate: {other}</p></span>
       </div>
    
       </div> 

    </div>
  )
}

export default Main;

// import React, { useContext, useEffect, useState } from 'react';
// import UserContext from '../context/UserContext';
// import PieChart from './PieChart';

// const Main = () => {
//   const { user } = useContext(UserContext);
//   const [genderData, setGenderData] = useState(null);

//   useEffect(() => {
//     // Calculate gender percentage when user data changes
//     if (user) {
//       const maleCount = user.filter((u) => u.gender === 'male').length;
//       const femaleCount = user.filter((u) => u.gender === 'female').length;
//       const othersCount = user.length - maleCount - femaleCount;
//    alert(maleCount)
//       const genderData = {
//         labels: ['Male', 'Female', 'Others'],
//         datasets: [
//           {
//             data: [maleCount, femaleCount, othersCount],
//             backgroundColor: ['#FFCE56', '#4BC0C0', '#FF6384'],
//             hoverBackgroundColor: ['#FFCE56', '#4BC0C0', '#FF6384'],
//           },
//         ],
//       };

//       setGenderData(genderData);
//     }
//   }, [user]);

//   return (
//     <div className='container'>
//       <div className='SideBar'>
//         <h3>DASHBOARD</h3>
//       </div>

//       <div className='pie-container'>
//         {genderData && <PieChart data={genderData} />}
//       </div>
//     </div>
//   );
// };

// export default Main;
