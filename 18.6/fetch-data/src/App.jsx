import React, { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-center mt-5'>Check the console for fetched data</h1>
    </div>
  )
}

export default App