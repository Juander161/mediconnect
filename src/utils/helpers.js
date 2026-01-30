// Funciones auxiliares para la aplicación

export const showNotification = (setToastMessage, setShowToast, message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
};

export const navigateWithLoading = (setIsLoading, setCurrentScreen, screen, callback) => {
    setIsLoading(true);
    setTimeout(() => {
        if (callback) callback();
        setCurrentScreen(screen);
        setIsLoading(false);
    }, 500);
};
