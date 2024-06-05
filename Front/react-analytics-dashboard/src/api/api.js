import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './__mocks__';
import {USE_MOCK_DATA }from '../config';

 // Set this to false to fetch data from the URL



export async function getUser(userId){

  if(USE_MOCK_DATA) {
    console.log("Main data",USER_MAIN_DATA,"userid",userId)
    const user= USER_MAIN_DATA.find(user => user.id === Number(userId));
    console.log("Mock User:", user)
    return user;
  }
  
  const response=await fetch(`http://localhost:3000/user/${userId}`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const user = await response.json();

  console.log('API Fetching user:', user.data); 

  return user.data;

}



export async function getUserActivity(userId){
  if(USE_MOCK_DATA) {
    const useractivity= USER_ACTIVITY.find(useractivity => useractivity.userId === Number(userId));
    console.log ("Mock activity",useractivity)
    return useractivity.sessions;
  }
  const response=await fetch(`http://localhost:3000/user/${userId}/activity`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const useractivity = await response.json();

  console.log('API Fetching activity:', useractivity.data.sessions); 

  return useractivity.data.sessions;

}


export async function getUserPerformance(userId){
  if(USE_MOCK_DATA) {
    
    const userperformance=USER_PERFORMANCE.find(userperformance => userperformance.userId === Number(userId));
    console.log("Mock performance",userperformance);
    return userperformance;
  }
  const response=await fetch(`http://localhost:3000/user/${userId}/performance`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const userperformance = await response.json();

  console.log('API Fetching performance:', userperformance.data); 

  return userperformance.data;  


}



export async function getUserAverageSessions(userId){

  if(USE_MOCK_DATA) {
    const useravsessions= USER_AVERAGE_SESSIONS.find(useravsessions => useravsessions.userId === Number(userId));
    console.log("Mock Average sessions:",useravsessions);
    return useravsessions;

  }
  const response=await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const useravsessions = await response.json();

  console.log('API Fetching sessions:', useravsessions); // Add this line

  return useravsessions.data;

}



