import mockData from './__mocks__.json';

const USE_MOCK_DATA = false; // Set this to false to fetch data from the URL


export async function getUser(userId){

  if(USE_MOCK_DATA) {
    return mockData.USER_MAIN_DATA.find(user => user.id === userId)
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
    return mockData.USER_ACTIVITY.find(useractivity => useractivity.data.userId === userId)
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
    return mockData.USER_PERFORMANCE.find(userperformance => userperformance.data.userId === userId)
  }
  const response=await fetch(`http://localhost:3000/user/${userId}/performance`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const userperformance = await response.json();

  console.log('Fetched activity:', userperformance); // Add this line

  return userperformance;  


}



export async function getUserAverageSessions(userId){

  if(USE_MOCK_DATA) {
    return mockData.USER_AVERAGE_SESSIONS.find(useravsessions => useravsessions.data.userId === userId)
  }
  const response=await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const useravsessions = await response.json();

  console.log('Fetched activity:', useravsessions); // Add this line

  return useravsessions;

}



