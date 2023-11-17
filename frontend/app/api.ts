import { Shelter } from "./types/shelters"
import { Dog } from "./types/dogs"


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

export const getAllDogs = async () => {
    const res = await fetch(`${api}/dogs`);
    const data = await res.json();
    return data;
};

export const addDog = async (dog: Dog) => {
    const res = await fetch(`${api}/dogs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dog)
    })
    const newDog = await res.json();
    return newDog;
};

export const editDog = async (dog: Dog) => {
    const res = await fetch(`${api}/dogs/${dog.dogId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dog)
    })
    const updatedDog = await res.json();
    return updatedDog;
};

export const deleteDog = async (id: number) => {
    await fetch(api + "/dogs/" + id, {
        method: 'DELETE'
    });
};