import { useEffect, useState } from "react";

interface UsePersistHook {
  persist: boolean;
  setPersist: React.Dispatch<React.SetStateAction<boolean>>;
}

const usePersist = (): UsePersistHook => {
  const [persist, setPersist] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(persist));
  }, [persist]);

  return { persist, setPersist };
};

export default usePersist;