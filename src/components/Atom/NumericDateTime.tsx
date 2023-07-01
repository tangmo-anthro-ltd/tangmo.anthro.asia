import * as React from 'react';
import { useClientTimeZone } from '../../hooks/useClientTimeZone';

export const NumericDateTime = ({ date }: { date: Date }) => {
    const timeZone = useClientTimeZone();
    return (
        <time dateTime={date.toISOString()}>
            {date.toLocaleString('en-ZA', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone,
                timeZoneName: 'short',
            })}
        </time>
    );
};
