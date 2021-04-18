import React, { Dispatch, SetStateAction } from 'react';

interface CounterProps {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
}

export function Counter({ count, setCount }: CounterProps) {
    return (
        <p>
            <button onClick={() => setCount((count: number) => count + 1)}>
                count is: {count}
            </button>
        </p>
    );
}
