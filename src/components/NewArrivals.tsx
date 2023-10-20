
import { useState, useEffect } from 'react';
import { Car } from './types';


export default function NewArrivals() {
    const [cars, setCars] = useState<Car[]>([])

    useEffect(() => {
        async function getCars() {
            try {
                const res = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
                if (res.ok) {
                    const data: Car[] = await res.json()
                    setCars(data)
                } else {
                    console.error('Bad Request')
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        getCars()
    }, [])

    return (
        <div className="arrivals-container">
            <h1 className="arrivals-heading">New Arrivals</h1>
            <ul className="list">
                {cars.map((car) => (
                    <li key={car.id}>
                        <h2>{car.name}</h2>
                        <p>Year: {car.year}</p>
                        <p>Selling Price: {car.selling_price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}