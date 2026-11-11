import {
  createContext,
  useContext,
  useState,
} from "react";

const NotificationContext =
  createContext();

export const NotificationProvider = ({
  children,
}) => {
  const [notifications,
    setNotifications,
  ] = useState([]);

  const addNotification = (
    message
  ) => {
    const newNotification = {
      id: Date.now(),
      message,
      read: false,
    };

    setNotifications((prev) => [
      newNotification,
      ...prev,
    ]);
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications =
  () => useContext(NotificationContext);