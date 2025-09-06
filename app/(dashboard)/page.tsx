import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    return redirectToSignIn();
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-2 right-2">
        <UserButton afterSignOutUrl="/" />
      </div>

      <div className="p-4">
        <p>This is an authenticated route.</p>
      </div>
    </div>
  );
}
