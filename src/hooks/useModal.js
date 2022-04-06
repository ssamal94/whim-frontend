import { useState } from "react";

const useModal = () => {
  //Alert description variable
  const [alertDescription, setAlertDescription] = useState("");
  //Alert status variable
  const [alertStatus, setAlertStatus] = useState(false);

  return { alertDescription, setAlertDescription, alertStatus, setAlertStatus };
};
export default useModal;
