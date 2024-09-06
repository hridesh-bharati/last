// usePreventShortcuts.js
import { useEffect } from 'react';

const usePreventShortcuts = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Prevent Ctrl + U, Ctrl + I, Ctrl + S, Ctrl + Shift + I, Ctrl + Shift + J, F12
      if (
        (event.ctrlKey && ['u', 'i', 's'].includes(event.key.toLowerCase())) ||
        (event.ctrlKey && event.shiftKey && ['i', 'j'].includes(event.key.toLowerCase())) ||
        event.key === 'F12'
      ) {
        event.preventDefault();
        alert('😂😂LOL😂😂');
      }
    };

    const handleContextMenu = (event) => {
      event.preventDefault();
      alert('😂😂LOL😂😂');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
};

export default usePreventShortcuts;
