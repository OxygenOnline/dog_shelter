'use client'

import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Modal from "./Modal";
import { Dog } from "../types/dogs"
import { deleteDog, editDog } from "../api"

const api = process.env.NEXT_PUBLIC_API_ROOT;


type DogDataProps = {
    dog: Dog;
};

export const DogRow: React.FC<DogDataProps> = ({ dog }) => {

    const router = useRouter();
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);

    const handleDeleteDog = async (id: number) => {
        await deleteDog(id);
        setOpenModalDeleted(false);
        router.refresh();
    };

    return (
        <tr key={dog.dogId} className="hover:dark:bg-yellow-700 border-orange-300">
            <td className="py-2">{dog.dogId}</td>
            <td>{dog.dogName}</td>
            <td>{dog.breed}</td>
            <td>{dog.birthYear}</td>
            <td>{dog.gender}</td>
            <td>{dog.shelterId}</td>
            <td>{dog.shelterName}</td>
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
