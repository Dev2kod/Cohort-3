import { useState } from "react";

// the component isnt re-rendering
// because we havent used a state variable

const ToggleMsg = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  console.log("re-render");
  function increment() {
    setNotificationCount(notificationCount + 1);
  }

  return (
      <div>
          <button onClick={increment}>
              Increase count
          </button>
          {notificationCount}
      </div>
  );
};

export default ToggleMsg