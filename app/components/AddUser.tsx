"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function AddUser() {
  const router = useRouter();

  const handleAddUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const body = {
      username: formData.get("username"),
      email: formData.get("email"),
    };

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (response.ok) router.push("/users");
  };

  return (
    <form className="space-y-4 mt-4" onSubmit={handleAddUser}>
      <input
        className="block p-1 rounded-md border-red-950 text-black"
        type="text"
        name="username"
        placeholder="Username"
        required
      />
      <input
        className="block p-1 rounded-md border-red-950 text-black"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <button className="p-2 bg-green-600 text-white rounded-lg">Save</button>
    </form>
  );
}
