import * as React from 'react';

export const NumericDateTime = ({ date }: { date: Date }) => (
    <time dateTime={date.toISOString()}>
        {date.toLocaleString('en-ZA', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
        })}
    </time>
);
