import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './__mocks__';
import { USE_MOCK_DATA } from '../config';



async function fetchData(url, customErrorMessage) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(customErrorMessage);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};


function normalizeUserData(user) {
  return {
    id: user.id?.id || null ,
    firstName: user.userInfos?.firstName || 'anonyme',
    lastName: user.userInfos?.lastName || 'anonyme',
    age: user.userInfos?.age || 0,
    score: user.score || user.todayScore,
    keyData: user.keyData? {
      calorieCount: user.keyData?.calorieCount,
      proteinCount: user.keyData.proteinCount,
      carbohydrateCount: user.keyData.carbohydrateCount,
      lipidCount: user.keyData.lipidCount,
    }:null
  };
};


export async function getUser(userId) {

try {  if (USE_MOCK_DATA) {
    console.log("Main data", USER_MAIN_DATA, "userid", userId)
    const user = USER_MAIN_DATA.find(user => user.id === Number(userId));
    console.log("Mock User:", user)
    return normalizeUserData(user);
  }
  const user = await fetchData(`http://localhost:3000/user/${userId}`, "Error retrieveing user")
  // console.log('API Fetching user:', user.data);

  return normalizeUserData(user.data);}

  catch (error){
    console.log(error.message)
  }

}



export async function getUserActivity(userId) {
try {  if (USE_MOCK_DATA) {
    const useractivity = USER_ACTIVITY.find(useractivity => useractivity.userId === Number(userId));
    console.log("Mock activity", useractivity)
    return useractivity.sessions;
  }
  const useractivity = await fetchData(`http://localhost:3000/user/${userId}/activity`, "error retrieving user activity")

  // console.log('API Fetching activity:', useractivity.data.sessions);

  return useractivity.data.sessions;}

  catch (error){
    console.log(error.message)
  }

}


export async function getUserPerformance(userId) {
try {  if (USE_MOCK_DATA) {

    const userperformance = USER_PERFORMANCE.find(userperformance => userperformance.userId === Number(userId));
    // console.log("Mock performance", userperformance);
    return userperformance;
  }

  const userperformance = await fetchData(`http://localhost:3000/user/${userId}/performance`, "error retrieving user perfomance")

  return userperformance.data;}

  catch (error){
    console.log(error.message)
  }


}



export async function getUserAverageSessions(userId) {

try {  if (USE_MOCK_DATA) {
    const useravsessions = USER_AVERAGE_SESSIONS.find(useravsessions => useravsessions.userId === Number(userId));
    // console.log("Mock Average sessions:", useravsessions);
    return useravsessions;

  }

  const useravsessions = await fetchData(`http://localhost:3000/user/${userId}/average-sessions`, "error fetching user average sessions")

  // console.log('API Fetching sessions:', useravsessions); // Add this line

  return useravsessions.data;}

  catch (error){
    console.log(error.message)
  }

}


