import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const users = [
  {
    id: 1,
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
];

export async function GET() {
  return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
  const { username, email }: { username: string; email: string } =
    await request.json();
  users.push({ id: users.length + 1, username, email: email.toLowerCase() });
  revalidatePath("/users");

  return NextResponse.json({ success: true, data: users });
}
