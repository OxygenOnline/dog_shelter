'use client'

import { useRouter } from "next/navigation";
import { FormEventHandler, useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Modal from "./Modal";
import { Dog } from "../types/dogs"
import { deleteDog, editDog, getAllShelters } from "../api"
import { Shelter } from "../types/shelters";


type DogDataProps = {
    dog: Dog;
};

export const DogRow: React.FC<DogDataProps> = ({ dog }) => {

    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [dogId] = useState(dog.dogId);
    const [dogName, setDogName] = useState(dog.dogName);
    const [breed, setBreed] = useState<string | undefined | null>(dog.breed);
    const [gender, setGender] = useState<string | undefined | null>(dog.gender);
    const [birthYear, setBirthYear] = useState<number | undefined | null>(dog.birthYear);
    const [shelterId, setShelterId] = useState<number | undefined | null>(dog.shelterId);

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

    const handleDeleteDog = async (id: number) => {
        await deleteDog(id);
        setOpenModalDeleted(false);
        router.refresh();
    };

    const handleSubmitEditDog: FormEventHandler<HTMLFormElement> = async () => {
        const editedDog = {
            dogId,
            dogName,
            breed,
            gender,
            birthYear,
            shelterId
        }
        await editDog(editedDog);
        setOpenModalEdit(false);
        router.refresh();
    };

    return (
        <tr key={dog.dogId} className="hover:dark:bg-yellow-700 border-orange-300">
            <td className="py-2">{dog.dogId}</td>
            <td>{dog.dogName}</td>
            <td>{dog.breed}</td>
            <td>{dog.birthYear}</td>
            <td>{dog.gender}</td>
            <td>{dog.shelterId ? `[${dog.shelterId}] ${dog.shelterName}` : ''}</td>
            <td className="px-2">
                <FiEdit
                    onClick={() => setOpenModalEdit(true)}
                    size={24}
                    cursor='pointer'
                    className="hover:text-slate-700" />
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditDog}>
                        <h3 className='font-bold text-lg'>Edit Dog</h3>
                        <div className='modal-action flex flex-col'>
                            <div className='mb-4'>
                                <label htmlFor='dogId' className='block text-sm font-medium text-gray-400'>
                                    Dog ID
                                </label>
                                <input
                                    id='dogId'
                                    value={dogId}
                                    readOnly
                                    className='input input-bordered w-full bg-gray-700 cursor-not-allowed'
                                />
                            </div>
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
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='breed' className='block text-sm font-medium text-gray-400'>
                                    Breed
                                </label>
                                <input
                                    id='breed'
                                    value={breed ?? ""}
                                    onChange={(e) => setBreed(e.target.value)}
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
                                    value={gender ?? ""}
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
            </td>
            <td className="px-2">
                <RiDeleteBin6Line
                    onClick={() => setOpenModalDeleted(true)}
                    size={24}
                    cursor='pointer'
                    className="hover:text-slate-700" />
                <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
                    <h3 className='text-lg'>
                        Remove this dog?
                    </h3>
                    <div className='modal-action justify-center'>
                        <button onClick={() => handleDeleteDog(dog.dogId)} className='btn'>
                            Yes
                        </button>
                    </div>
                </Modal>
            </td>
        </tr>
    )
};
