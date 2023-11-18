"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addShelter } from "../api";
import { useRouter } from "next/navigation";

const AddShelter = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [shelterName, setShelterName] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState<string | null | undefined>(null);

    const handleSubmitNewShelter: FormEventHandler<HTMLFormElement> = async () => {
        await addShelter({
            shelterId: 1,
            shelterName,
            location,
            email
        });
        setModalOpen(false);
        router.refresh();
    };

    return (
        <div>
            <button
                onClick={() => setModalOpen(true)}
                className='btn rounded-lg text-gray-300 w-full bg-opacity-0 border-transparent shadow-none hover:border-orange-300 hover:bg-opacity-0'
            >
                Add New Shelter <AiOutlinePlus className='ml-2' size={18} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewShelter}>
                    <h3 className='font-bold text-lg'>Add New Shelter</h3>
                    <div className='modal-action flex flex-col'>
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
        </div >
    );
};

export default AddShelter;
