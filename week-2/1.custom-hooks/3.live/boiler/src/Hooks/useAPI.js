import React, { useEffect, useState } from "react";

// executes the API call, as soon as the components mounts.

const useAPI = (apiFn) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const execute = async () => {
    try {
      setLoading(true);
      let data = await apiFn();
      setData(data);
      setSuccess(true);
    } catch (e) {
      setError(e.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    execute();
  }, []);

  return { loading, error, success, data, setData, execute };
};

export default useAPI;
