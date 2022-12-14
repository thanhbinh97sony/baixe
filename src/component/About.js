import React, { useEffect, useState } from 'react'
import './About.css';
import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    doc,
} from "firebase/firestore";

export const About = () => {

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "Slot");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.Slot})));
            console.log(users)
        };

        getUsers();
    }, []);

    return (
        <div className='pictureHD'>
            <div className='inputCar'>Vị trí xe 1</div>
            <div className='inputCar'>Vị trí xe 2</div>
            <div className='inputCar'>Vị trí xe 3</div>
            <div className='inputCar'>Vị trí xe 4</div>
            <div className='inputCar'>Vị trí xe 5</div>
            <div className='inputCar'>Vị trí xe 6</div>
        </div>

    )
}
