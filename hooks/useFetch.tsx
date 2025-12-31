import React from "react";

export default function useFetch<TResponse, TRequest = null>() {
  const [data, setData] = React.useState<TResponse | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const getMethod = async (url: string) => {};

  const postMethod = async (url: string, data: TRequest) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setData(null);
        setError(res.statusText);
        return;
      }
      const responseData = await res.json();
      if (!responseData) {
        setData(null);
        setError("No data received");
        return;
      }
      setData(responseData);
    } catch {
      setData(null);
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getMethod, postMethod };
}
