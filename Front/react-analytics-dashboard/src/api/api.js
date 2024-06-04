import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './__mocks__';

const USE_MOCK_DATA = false; // Set this to false to fetch data from the URL



export async function getUser(userId){

  if(USE_MOCK_DATA) {
    const user= USER_MAIN_DATA.find(user => user.id === userId);
    console.log("User:", user)
    return user;
  }
  const response=await fetch(`http://localhost:3000/user/${userId}`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const user = await response.json();

  console.log('Fetched user:', user); // Add this line

  return user;

}


export async function getUserActivity(userId){
  if(USE_MOCK_DATA) {
    const useractivity= USER_ACTIVITY.find(useractivity => useractivity.userId === userId);
    return useractivity;
  }
  const response=await fetch(`http://localhost:3000/user/${userId}/activity`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const useractivity = await response.json();

  console.log('Fetched activity:', useractivity); // Add this line

  return useractivity;

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

  console.log('Fetched activity:', userperformance); 

  return userperformance;  


}



export async function getUserAverageSessions(userId){

  if(USE_MOCK_DATA) {
    const useravsessions= USER_AVERAGE_SESSIONS.find(useravsessions => useravsessions.userId === userId)[0];
    console.log(useravsessions);
    return useravsessions;

  }
  const response=await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const useravsessions = await response.json();

  console.log('Fetched activity:', useravsessions); // Add this line

  return useravsessions;

}



