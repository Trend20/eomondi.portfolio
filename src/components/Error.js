import React, { useState } from 'react';

function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);

    // const componentDidCatch = (error, errorInfo) => {
    //     console.error('Error caught by ErrorBoundary:', error, errorInfo);
    //     setHasError(true);
    // };

    if (hasError) {
        return <div>Something went wrong.</div>;
    }

    return children;
}

export default ErrorBoundary;