'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Shelter } from "../types/shelters"
import Modal from "./Modal";
import { deleteShelter } from "../api"


interface ShelterProps {
    shelter: Shelter;
}

export const ShelterRow: React.FC<ShelterProps> = ({ shelter }) => {
    const router = useRouter();
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);

    const handleDeleteShelter = async (id: number) => {
        await deleteShelter(id);
        setOpenModalDeleted(false);
        router.refresh();
    }

    return (
        <tr key={shelter.shelterId}
            className="hover:dark:bg-yellow-700 border-orange-300">
            <td className="py-2">{shelter.shelterId}</td>
            <td>{shelter.shelterName}</td>
            <td>{shelter.location}</td>
            <td>{shelter.email}</td>
            <td className="px-2">
                <FiEdit
                    size={24}
                    cursor='pointer'
                    className="hover:text-slate-700" />
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
