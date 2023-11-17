'use client'

import DogTable from '../components/DogTable';
import ShelterButton from '../components/ShelterButton';
import { getAllDogs } from "../api"
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react'


const api = process.env.NEXT_PUBLIC_API_ROOT;

const DogPage = () => {

  const [dogs, setDogs] = useState([]);

  const fetchDogs = async (url: string) => {
    try {
      const data = await getAllDogs();
      if (data.length > 0) {
        setDogs(data);
      }
    }
    catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchDogs(api + "/dogs");
  }, [dogs])

  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between p-24">

      <Navbar />

      <h1 className="mb-3 text-6xl font-bold">Dogs</h1>

      <DogTable dogs={dogs} />
      <ShelterButton />

    </main>
  );
};

export default DogPage;
