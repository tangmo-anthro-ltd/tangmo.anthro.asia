import * as React from 'react';

// Create the ColorScheme context
const ColorSchemeContext = React.createContext({ colorScheme: 'dark', setColorScheme: _ => {} });

// Create a ColorScheme provider component
const ColorSchemeProvider = ({ children }) => {
    const [colorScheme, setColorScheme] = React.useState('dark');

    return (
        <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>{children}</ColorSchemeContext.Provider>
    );
};

const useColorSchemeContext = () => React.useContext(ColorSchemeContext);

export { useColorSchemeContext, ColorSchemeProvider };
