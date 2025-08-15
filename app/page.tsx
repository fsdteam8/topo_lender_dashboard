import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const cu = await auth();
  const isLoggedIn = !!cu?.user;

  if (!isLoggedIn) {
    redirect("/sign-in"); // ✅ Redirect to sign-in page
  } else {
    redirect("/dashboard"); // ✅ Redirect to dashboard
  }
}
