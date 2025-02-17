"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function CurrentTimeFromAPI() {
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      fetch("/api/currentTime")
        .then((res) => res.json())
        .then((data) => {
          setApiResponse(data.message);
          setLoading(false);
        });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-3">
          <p>
            The message from the API is: <strong>{apiResponse}</strong>
          </p>
          <div>
            <button
              className="bg-blue-500 px-3 py-2 rounded-lg text-white"
              onClick={() => router.refresh()}
            >
              Reload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
