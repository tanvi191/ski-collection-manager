import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SkiResort } from '../types/SkiResort';
import { skiResortService } from "../services/SkiResortService";

const SkiResortDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [resort, setResort] = useState<SkiResort | null>(null);

    useEffect(() => {
        if (id) {
            const resortData = skiResortService.getSkiResortById(Number(id));
            setResort(resortData || null);
        }
    }, [id]);

    if (!resort) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ski-resort-detail">
            <h1>{resort.Resort}</h1>
            <p>Country: {resort.Country}</p>
            <p>Highest Point: {resort.HighestPoint} m</p>
            <p>Lowest Point: {resort.LowestPoint} m</p>
            <p>Day Pass Price (Adult): ${resort.DayPassPriceAdult}</p>
            <p>Total Slope: {resort.TotalSlope} km</p>
            <p>Beginner Slope: {resort.BeginnerSlope} km</p>
            <p>Intermediate Slope: {resort.IntermediateSlope} km</p>
            <p>Difficult Slope: {resort.DifficultSlope} km</p>
            <p>SnowParks: {resort.SnowParks ? 'Yes' : 'No'}</p>
            <p>NightSki: {resort.NightSki ? 'Yes' : 'No'}</p>
            <p>Total Lifts: {resort.TotalLifts}</p>
            <p>Lift Capacity: {resort.LiftCapacity} persons/hour</p>
            <p>Snow Cannons: {resort.SnowCannons}</p>
            <Link to={`/dashboard/${resort.id}`}>View Dashboard</Link>
        </div>
    );

};

export default SkiResortDetail;