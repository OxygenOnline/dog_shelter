'use client'

import DogData from '../components/DogData';
import ShelterButton from '../components/ShelterButton';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react'


const api = process.env.NEXT_PUBLIC_API_ROOT;

const DogPage = () => {

  const [dogs, setDogs] = useState([]);

  const fetchDogs = async (url: string) => {
    try {
      const res = await fetch(url);
      console.log("fetch start" + res)
      const data = await res.json();
      if (data.length > 0) {
        setDogs(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchDogs(api + "/dogs");
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between p-24">

      <Navbar />

      <h1 className="mb-3 text-6xl font-bold">Dogs</h1>

      <table className='table border-collapse mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center'>
        <thead className="font-semibold text-2xl">
          <tr>
            <th className="p-4">Id</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Birth Year</th>
            <th>Gender</th>
            <th>Shelter Id</th>
            <th>Shelter Name</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-orange-300">
          <DogData dogs={dogs} />
        </tbody>
      </table>

      <ShelterButton />
    </main>
  );
};

export default DogPage;
