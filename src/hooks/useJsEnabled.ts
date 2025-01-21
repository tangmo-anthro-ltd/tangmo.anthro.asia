import * as React from 'react';

export const useJsEnabled = () => {
    const [jsEnabled, setJsEnabled] = React.useState(false);
    React.useEffect(() => {
        setJsEnabled(true);
    }, []);
    return jsEnabled;
};
