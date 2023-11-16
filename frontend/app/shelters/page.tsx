'use client'

import ShelterData from '../components/ShelterData';
import DogButton from '../components/DogButton';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react'


const api = process.env.NEXT_PUBLIC_API_ROOT;

const ShelterPage = () => {

  const [shelters, setShelters] = useState([]);

  const fetchShelters = async (url: string) => {
    try {
      const res = await fetch(url);
      console.log("fetch start" + res)
      const data = await res.json();
      if (data.length > 0) {
        setShelters(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchShelters(api + "/shelters");
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between p-24">

      <Navbar />

      <h1 className="mb-3 text-6xl font-bold">Shelters</h1>
      
      <table className="table border-collapse mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
        <thead className="font-semibold text-2xl">
          <tr>
            <th className="p-4">Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-orange-300">
          <ShelterData shelters={shelters} />
        </tbody>
      </table>
      
      <DogButton />
      
    </main>
  );
};

export default ShelterPage;
