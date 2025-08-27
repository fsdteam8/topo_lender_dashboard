"use client";
import EmptyContainer from "@/components/ui/custom/EmptyContainer";
import ErrorContainer from "@/components/ui/custom/ErrorContainer";
import { DataTable } from "@/components/ui/data-table";
import { PaginationControls } from "@/components/ui/pagination-controls";
import useDebounce from "@/hooks/useDebounc";
import { Listing } from "@/types/listings/index";
import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Loader2 } from "lucide-react";
import { useListingFilterStrate } from "../searchbar/listing-searchbar-state";
import { listingColumn } from "./listing-column";

interface Props {
  token: string;
}

interface APiProps {
  status: boolean;
  message: string;
  data: Listing[];
}

// ?page=1&limit=5&search=zara&condition=Worn&status=available&pickupOption=Local&size=L
const ListingTableContainer = ({ token }: Props) => {
  const { page, setPage, searchTerm, statusFilter } = useListingFilterStrate();

  const searchvalue = useDebounce(searchTerm);

  const { data, isLoading, isError, error } = useQuery<APiProps>({
    queryKey: ["lender-all-listing", page, searchvalue, statusFilter],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/lender?page=${page}&limit=5&search=${searchvalue}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res) => res.json()),
  });

  const table = useReactTable({
    data: data?.data ?? [],
    columns: listingColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        <Loader2 className="animate-spin text-primary" />
      </div>
    );
  } else if (isError) {
    content = <ErrorContainer message={error.message} />;
  } else if (data && data.data.length === 0) {
    content = <EmptyContainer message="" />;
  } else if (data && data.data && data.data.length > 0) {
    content = (
      <>
        <div className="bg-white">
          <DataTable table={table} columns={listingColumn} />
        </div>
        {2 > 1 && (
          <div className="mt-4 w-full  flex justify-end">
            <div>
              <PaginationControls
                currentPage={page}
                onPageChange={(page) => setPage(page)}
                totalPages={5}
              />
            </div>
          </div>
        )}
      </>
    );
  }
  return <div>{content}</div>;
};

export default ListingTableContainer;
