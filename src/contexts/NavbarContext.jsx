import React, { createContext, useContext, useState } from 'react';

// Create the context
const NavbarContext = createContext();

// Export the context provider as a named export
export default function NavbarContextProvider({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0);

  function handleOpenSearch() {
    setIsSearchOpen(true);
  }

  function handleToggleMobMenu() {
    setIsMobMenuOpen((open) => !open);
    document.body.classList.toggle('overflow-hidden');
  }

  // Provide the context value to the children
  return (
    <NavbarContext.Provider
      value={{
        isSearchOpen,
        isMobMenuOpen,
        itemsInCart,

        setIsSearchOpen,
        setIsMobMenuOpen,
        setItemsInCart,

        handleOpenSearch,
        handleToggleMobMenu,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

// Export the custom hook for consuming the context
export function useNavbar() {
  return useContext(NavbarContext);
}
