'use client'

import ShelterTable from '../components/ShelterTable';
import DogButton from '../components/DogButton';
import { getAllShelters } from "../api"
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react'


const ShelterPage = () => {

  const [shelters, setShelters] = useState([]);

  const fetchShelters = async () => {
    try {
      const data = await getAllShelters();
      if (data.length > 0) {
        setShelters(data);
      }
    }
    catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchShelters();
  }, [shelters]);

  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between p-24">

      <Navbar />

      <h1 className="mb-3 text-6xl font-bold">Shelters</h1>

      <ShelterTable shelters={shelters}/>
      <DogButton />

    </main>
  );
};

export default ShelterPage;