import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import ListingSearchHeader from "./_components/searchbar/listing-search-header";
import ListingTableContainer from "./_components/table-container/listing-table-container";

export default async function ListingsPage() {
  const cu = await auth();

  if (!cu || !cu?.user.accessToken) redirect("/login");
  return (
    <>
      <div className="p-8 bg-[#fefaf6]">
        <div className="flex justify-end items-center mb-8">
          <div className="flex space-x-4">
            <div className="relative">
              <button className="px-4 py-2 bg-[#891d33] text-white rounded-md flex items-center">
                This Month
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
            <Link href="/listings/new">
              <button className="px-4 py-2 bg-[#891d33] text-white rounded-md flex items-center">
                <span className="mr-2">Add New Listing</span>{" "}
                <Plus className="mr-2 h-4 w-4 text-white" />
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="bg-[#891d33] ">
            <CardHeader>
              <CardTitle className="text-white/80 text-sm">
                Most Popular Listing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[20px] text-white   font-medium text-left">
                {"No listings"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-gray-600 text-sm">
                Total Listings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[25px] text-black  font-medium text-left">
                {50}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-gray-600 text-sm">
                Active Listings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[25px] text-black  font-medium text-left">
                {50}
              </p>
            </CardContent>
          </Card>
        </div>

        <ListingSearchHeader />

        <ListingTableContainer token={cu.user.accessToken} />
      </div>

      {/* Status Modal */}
      {/* <StatusModal
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        onConfirm={confirmStatusChange}
        dress={selectedDress}
        newStatus={newStatus}
      /> */}
    </>
  );
}
