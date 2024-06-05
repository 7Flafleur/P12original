import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './__mocks__';
import {USE_MOCK_DATA }from '../config';

 // Set this to false to fetch data from the URL



export async function getUser(userId){

  if(USE_MOCK_DATA) {
    const user= USER_MAIN_DATA.find(user => user.id === userId);
    console.log("Mock User:", user)
    return user;
  }
  
  const response=await fetch(`http://localhost:3000/user/${userId}`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const user = await response.json();

  console.log('Fetching user:', user); 

  return user;

}



export async function getUserActivity(userId){
  if(USE_MOCK_DATA) {
    const useractivity= USER_ACTIVITY.find(useractivity => useractivity.userId === userId);
    return useractivity.data.sessions;
  }
  const response=await fetch(`http://localhost:3000/user/${userId}/activity`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const useractivity = await response.json();

  console.log('Fetching activity:', useractivity.data.sessions); 

  return useractivity.data.sessions;

}


export async function getUserPerformance(userId){
  if(USE_MOCK_DATA) {
    const userperformance= USER_PERFORMANCE.find(userperformance => userperformance.userId === userId);
    console.log(userperformance);
    return userperformance;
  }
  const response=await fetch(`http://localhost:3000/user/${userId}/performance`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const userperformance = await response.json();

  console.log('Fetching performance:', userperformance.data); 

  return userperformance;  


}



export async function getUserAverageSessions(userId){

  if(USE_MOCK_DATA) {
    const useravsessions= USER_AVERAGE_SESSIONS.find(useravsessions => useravsessions.userId === userId)[0];
    console.log("Average sessions:",useravsessions);
    return useravsessions;

  }
  const response=await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const useravsessions = await response.json();

  console.log('Fetching sessions:', useravsessions); // Add this line

  return useravsessions;

}



