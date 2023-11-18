'use client'

import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Shelter } from "../types/shelters"
import Modal from "./Modal";
import { deleteShelter, editShelter } from "../api"


interface ShelterProps {
    shelter: Shelter;
}

export const ShelterRow: React.FC<ShelterProps> = ({ shelter }) => {
    
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [shelterId] = useState(shelter.shelterId);
    const [shelterName, setShelterName] = useState(shelter.shelterName);
    const [location, setLocation] = useState(shelter.location);
    const [email, setEmail] = useState<string | null | undefined>(shelter.email);

    const handleDeleteShelter = async (id: number) => {
        await deleteShelter(id);
        setOpenModalDeleted(false);
        router.refresh();
    }

    const handleSubmitEditShelter: FormEventHandler<HTMLFormElement> = async () => {
        const editedShelter = {
            shelterId,
            shelterName,
            location,
            email
        }
        await editShelter(editedShelter);
        setOpenModalEdit(false);
        router.refresh();
    };

    return (
        <tr key={shelter.shelterId}
            className="hover:dark:bg-yellow-700 border-orange-300">
            <td className="py-2">{shelter.shelterId}</td>
            <td>{shelter.shelterName}</td>
            <td>{shelter.location}</td>
            <td>{shelter.email}</td>
            <td className="px-2">
                <FiEdit
                    onClick={() => setOpenModalEdit(true)}
                    size={24}
                    cursor='pointer'
                    className="hover:text-slate-700" />
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditShelter}>
                        <h3 className='font-bold text-lg'>Edit Shelter</h3>
                        <div className='modal-action flex flex-col'>
                            <div className='mb-4'>
                                <label htmlFor='shelterId' className='block text-sm font-medium text-gray-400'>
                                    Shelter ID
                                </label>
                                <input
                                    id='shelterId'
                                    value={shelter.shelterId}
                                    readOnly
                                    className='input input-bordered w-full bg-gray-700 cursor-not-allowed'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='shelterName' className='block text-sm font-medium text-gray-400'>
                                    Shelter Name
                                </label>
                                <input
                                    id='shelterName'
                                    value={shelterName}
                                    onChange={(e) => setShelterName(e.target.value)}
                                    type='text'
                                    placeholder='Enter Shelter Name'
                                    className='input input-bordered w-full'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='location' className='block text-sm font-medium text-gray-400'>
                                    Location
                                </label>
                                <input
                                    id='location'
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    type='text'
                                    placeholder='Enter Location'
                                    className='input input-bordered w-full'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-400'>
                                    Email
                                </label>
                                <input
                                    id='email'
                                    value={email ?? ""}
                                    onChange={(e) => setEmail(e.target.value === '' ? null : e.target.value)}
                                    type='email'
                                    placeholder='Enter Email'
                                    className='input input-bordered w-full'
                                />
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
                    className="hover:text-slate-700"
                />
                <Modal modalOpen={openModalDeleted}
                    setModalOpen={setOpenModalDeleted}>
                    <h3 className='text-lg'>
                        Delete this shelter?
                    </h3>
                    <div className='modal-action justify-center'>
                        <button onClick={() => handleDeleteShelter(shelter.shelterId)}
                            className='btn'>
                            Yes
                        </button>
                    </div>
                </Modal>
            </td>
        </tr>
    )
};
