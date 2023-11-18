'use client'

import DogTable from '../components/DogTable';
import ShelterButton from '../components/ShelterButton';
import AddDog from '../components/AddDog';
import { getAllDogs } from "../api"
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react'


const DogPage = () => {

  const [dogs, setDogs] = useState([]);

  const fetchDogs = async () => {
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
    fetchDogs();
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between  pt-12 pb-6">

      <Navbar />

      <h1 className="mb-3 pt-6 text-6xl font-bold">Dogs</h1>

      <div>
        <AddDog></AddDog>
        <DogTable dogs={dogs} />
      </div>
      <ShelterButton />

    </main>
  );
};

export default DogPage;
