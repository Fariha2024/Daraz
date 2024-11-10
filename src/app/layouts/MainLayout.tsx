// src/app/layouts/MainLayout.tsx
import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <header>
                {/* Your header content here */}
            </header>
            <main>{children}</main>
            <footer>
                {/* Your footer content here */}
            </footer>
        </div>
    );
};

export default MainLayout;
