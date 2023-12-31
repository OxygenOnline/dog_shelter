import { Shelter } from "./types/shelters"
import { Dog } from "./types/dogs"
import { NewUser } from "./types/newUsers";
import { User } from "./types/users";
import Cookies from "js-cookie"


const api = process.env.NEXT_PUBLIC_API_ROOT;
const storedToken = Cookies.get('token');

const unauthorized = async (status: number) => {
    if (status === 403) {
        alert("Please sign in")
        window.location.href = '/login';
        return;
    }
};

export const getAllShelters = async () => {
    const res = await fetch(`${api}/shelters`);
    const data = await res.json();
    return data;
};

export const addShelter = async (shelter: Shelter) => {
    const createdShelter = {
        ...shelter,
        shelterId: undefined
    }
    const res = await fetch(`${api}/shelters`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedToken}`
        },
        body: JSON.stringify(createdShelter)
    })
    unauthorized(res.status);
    const newShelter = await res.json();
    return newShelter;
};

export const editShelter = async (shelter: Shelter) => {
    const res = await fetch(`${api}/shelters/${shelter.shelterId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedToken}`
        },
        body: JSON.stringify(shelter)
    })
    unauthorized(res.status);
    const updatedShelter = await res.json();
    return updatedShelter;
};

export const deleteShelter = async (id: number) => {
    const res = await fetch(`${api}/shelters/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${storedToken}`
        }
    });
    unauthorized(res.status);
};

export const getAllDogs = async () => {
    const res = await fetch(`${api}/dogs`);
    const data = await res.json();
    return data;
};

export const addDog = async (dog: Dog) => {
    const createdDog = {
        ...dog,
        dogId: undefined
    }
    const res = await fetch(`${api}/dogs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedToken}`
        },
        body: JSON.stringify(createdDog)
    })
    unauthorized(res.status);
    const newDog = await res.json();
    return newDog;
};

export const editDog = async (dog: Dog) => {
    const res = await fetch(`${api}/dogs/${dog.dogId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedToken}`
        },
        body: JSON.stringify(dog)
    })
    unauthorized(res.status);
    const updatedDog = await res.json();
    return updatedDog;
};

export const deleteDog = async (id: number) => {
    const res = await fetch(`${api}/dogs/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${storedToken}`
        }
    });
    unauthorized(res.status);
};

export const register = async (user: NewUser) => {
    const res = await fetch(`${api}/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
};

export const login = async (user: User) => {
    const res = await fetch(`${api}/users/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const token = await res.json();
    return token;
};
