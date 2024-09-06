import React, { useState, useEffect } from 'react';

// Utility function to create a counter effect
const createCounterEffect = (start, end, duration, callback) => {
    const range = Math.abs(end - start);
    const increment = end > start ? 1 : -1;
    const step = Math.max(Math.floor(duration / range), 1); // Ensure step is at least 1 ms
    let current = start;

    const timer = setInterval(() => {
        if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
            current += increment;
            callback(current);
        } else {
            callback(end); // Ensure we end exactly at the target value
            clearInterval(timer);
        }
    }, step);

    return timer;
};

export default function CounterCard() {
    const [counters, setCounters] = useState([
        { id: 'count0', value: 0, end: 1500, duration: 100 },
        { id: 'count1', value: 0, end: 200, duration: 100 },
        { id: 'count2', value: 0, end: 20, duration: 100 },
        { id: 'count3', value: 0, end: 24, duration: 100 }
    ]);

    useEffect(() => {
        // Set up counters
        const timers = counters.map(counter => {
            const { id, end, duration } = counter;
            return createCounterEffect(
                counter.value,
                end,
                duration,
                newValue => {
                    setCounters(prevCounters =>
                        prevCounters.map(c =>
                            c.id === id ? { ...c, value: newValue } : c
                        )
                    );
                }
            );
        });

        // Clean up timers on unmount
        return () => {
            timers.forEach(timer => clearInterval(timer));
        };
    }, [counters]);

    const [cardStyles] = useState({
        BookCard: 'white',
        ComputerCard: 'white',
        Establishment: 'white',
        BookCardText: 'black',
        ComputerCardText: 'black',
        EstablishmentText: 'black'
    });

    const cards = [
        { id: 'counter1', countId: 'count0', background: 'var(--BooksBgCard)', title: 'Students enrolled' },
        { id: 'counter2', countId: 'count1', background: 'var(--computerBgCard)', title: 'Books in Library' },
        { id: 'counter3', countId: 'count2', background: 'var(--EstablishmentBgCard)', title: 'Establishment (in year): 20+Year' },
        { id: 'counter4', countId: 'count3', background: 'var(--BooksBgCard)', title: 'Computers' }
    ];

    return (
        <div className="card-group py-4 text-center rounded-0">
            {cards.map((card, index) => {
                const counter = counters.find(c => c.id === card.countId);
                const counterValue = counter ? counter.value : 0;

                return (
                    <div
                        key={card.id}
                        className="card myshadow rounded rounded-0 mx-1"
                        style={{ color: cardStyles[`${card.id}Text`] || 'black' }}
                        data-aos="fade-up"
                        data-aos-duration={`${(index + 1) * 300}`}
                        id={card.id}
                    >
                        <div className="card-body">
                            <h1
                                className="w-100 m-auto mt-1 py-5 fw-bolder text-white counter"
                                style={{ background: card.background }}
                            >
                                <b>{counterValue}</b>
                            </h1>
                            <h5 className="card-title">{card.title}</h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
