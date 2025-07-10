import { auth } from "@/auth";

export default async function Page() {
  const cu = await auth();

  console.log(cu);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      <p className="ml-4 text-lg">Redirecting to dashboard...</p>
    </div>
  );
}
