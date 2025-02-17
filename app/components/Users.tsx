"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <>
      <div className="mb-5">
        <Link
          className="p-2 bg-green-600 text-white rounded-lg"
          href="/users/form"
        >
          Add User
        </Link>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 uppercase font-bold">username</div>
        <div className="flex-1 uppercase font-bold">email</div>
      </div>
      <div className="flex flex-col gap-2">
        {users.map(({ id, username, email }) => (
          <div className="flex gap-2" key={id}>
            <div className="flex-1 p-2">{username}</div>
            <div className="flex-1 p-2">{email}</div>
          </div>
        ))}
      </div>
    </>
  );
}
