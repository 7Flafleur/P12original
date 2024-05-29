import mockData from './__mocks__.json';

const USE_MOCK_DATA = false; // Set this to false to fetch data from the URL


export default async function getUser(userId){

  if(USE_MOCK_DATA) {
    return mockData.USER_MAIN_DATA.find(user => user.id === userId)
  }
  const response=await fetch(`http://localhost:3000/user/${userId}`)
  if (!response.ok){
    throw new Error(`Oups! Aucun utilisateur a cet id! Status: ${response.status}`);
  }

  const user = await response.json();
  return user;

}

