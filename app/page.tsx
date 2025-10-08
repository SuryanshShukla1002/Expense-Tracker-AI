import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";

export default async function page() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <div className="text-red-800">
      <h1>Home Page</h1>
    </div>
  );
}
