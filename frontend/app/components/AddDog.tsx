"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState, useEffect } from "react";
import { addDog, getAllShelters } from "../api";
import { useRouter } from "next/navigation";
import { Shelter } from "../types/shelters";


const AddDog = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [dogName, setDogName] = useState("");
    const [breed, setBreed] = useState<string | undefined | null>(null);
    const [gender, setGender] = useState<string | undefined | null>(null);
    const [birthYear, setBirthYear] = useState<number | undefined | null>(null);
    const [shelterId, setShelterId] = useState<number | undefined | null>(null);

    const [shelters, setShelters] = useState<Shelter[]>([]);

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
    }, []);
    
    const handleSubmitNewDog: FormEventHandler<HTMLFormElement> = async () => {
        await addDog({
            dogId: 1,
            dogName,
            breed,
            gender,
            birthYear,
            shelterId
        });
        setModalOpen(false);
        router.refresh();
    };

    return (
        <div className="pb-6">
            <button
                onClick={() => setModalOpen(true)}
                className='btn rounded-lg text-gray-300 w-full bg-opacity-0 border-transparent shadow-none hover:border-orange-300 hover:bg-opacity-0'
            >
                Add New Dog <AiOutlinePlus className='ml-2' size={18} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewDog}>
                    <h3 className='font-bold text-lg'>Add New Dog</h3>
                    <div className='modal-action flex flex-col'>
                        <div className='mb-4'>
                            <label htmlFor='dogName' className='block text-sm font-medium text-gray-400'>
                                Dog Name
                            </label>
                            <input
                                id='dogName'
                                value={dogName}
                                onChange={(e) => setDogName(e.target.value)}
                                type='text'
                                placeholder='Enter Dog Name'
                                className='input input-bordered w-full'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='breed' className='block text-sm font-medium text-gray-400'>
                                Breed
                            </label>
                            <input
                                id='breed'
                                value={breed ?? ""}
                                onChange={(e) => setBreed(e.target.value === '' ? null : e.target.value)}
                                type='text'
                                placeholder='Enter Breed'
                                className='input input-bordered w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='gender' className='block text-sm font-medium text-gray-400'>
                                Gender
                            </label>
                            <select
                                id='gender'
                                value={gender ?? ''}
                                onChange={(e) => setGender(e.target.value === '' ? null : e.target.value)}
                                className='input input-bordered w-full'>
                                <option value=''>Select Gender</option>
                                <option value='MALE'>Male</option>
                                <option value='FEMALE'>Female</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='birthYear' className='block text-sm font-medium text-gray-400'>
                                Birth Year
                            </label>
                            <input
                                id='birthYear'
                                value={birthYear ?? ""}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    setBirthYear(inputValue === '' ? null : Number(inputValue));
                                }}
                                type='number'
                                placeholder='Enter Birth Year'
                                className='input input-bordered w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='shelterId' className='block text-sm font-medium text-gray-400'>
                                Shelter
                            </label>
                            <select
                                className='input input-bordered w-full'
                                value={shelterId ?? ''}
                                onChange={(e) => setShelterId(e.target.value === '' ? null : Number(e.target.value))}
                            >
                                <option value=''>Select Shelter</option>
                                {shelters.map((shelter) => (
                                    <option key={shelter.shelterId} value={shelter.shelterId}>
                                        {`[${shelter.shelterId}] ${shelter.shelterName}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type='submit' className='btn'>
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div >
    );
};

export default AddDog;
