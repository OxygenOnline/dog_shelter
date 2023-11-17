import { Shelter } from "./types/shelters"


const api = process.env.NEXT_PUBLIC_API_ROOT;

export const getAllShelters = async () => {
    const res = await fetch(`${api}/shelters`);
    const data = await res.json();
    return data;
};

export const addShelter = async (shelter: Shelter) => {
    const res = await fetch(`${api}/shelters`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shelter)
    })
    const newShelter = await res.json();
    return newShelter;
};

export const editShelter = async (shelter: Shelter) => {
    const res = await fetch(`${api}/shelters/${shelter.shelterId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shelter)
    })
    const updatedShelter = await res.json();
    return updatedShelter;
};

export const deleteShelter = async (id: number) => {
    await fetch(api + "/shelters/" + id, {
        method: 'DELETE'
    });
};


