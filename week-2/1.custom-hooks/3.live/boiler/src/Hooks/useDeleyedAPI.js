import React, { useState } from "react";

// executes the API call, as soon as the components mounts.

const useDeleyedAPI = (apiFn, initialValue) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(initialValue);

  const execute = async (params) => {
    try {
      setLoading(true);
      let data = await apiFn(params);
      setData(data);
      setSuccess(true);
    } catch (e) {
      setError(e.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, data, setData, execute };
};

export default useDeleyedAPI;
