// "use client";
// import React from "react";

// type Props = {
//   page: number;
//   totalPages: number;
//   onPageChange?: (newPage: number) => void;
// };

// export default function PaginationControls({
//   page,
//   totalPages,
//   onPageChange,
// }: Props) {
//   const prev = () => {
//     if (page > 1) onPageChange?.(page - 1);
//   };
//   const next = () => {
//     if (page < totalPages) onPageChange?.(page + 1);
//   };

//   if (totalPages <= 1) return null;
//   console.log(totalPages);

//   return (
//     <div className="flex items-center justify-between gap-2 p-2">
//       <button
//         onClick={prev}
//         disabled={page === 1}
//         className="px-3 py-1 rounded border disabled:opacity-50"
//       >
//         Prev
//       </button>
//       <div className="text-sm">
//         Page {page} of {totalPages}
//       </div>
//       <button
//         onClick={next}
//         disabled={page === totalPages}
//         className="px-3 py-1 rounded border disabled:opacity-50"
//       >
//         Next
//       </button>
//     </div>
//   );
// }















"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./button";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  meta: {
    limit: number;
    page: number;
    total: number;
    totalPages: number;
  };
}

export default function PaginationControls({ meta }: PaginationControlsProps) {
  const { limit: pageSize, page: currentPage, total, totalPages } = meta;

  const searchParams = useSearchParams();
  const router = useRouter();

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    // router.push("/dashboard/create-blogs"); // Example
    console.log(params);
  };

  //* Showing 1 to 10 of 21 -> page 1
  //* Showing 11 to 20 of 21 -> page 2

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, total);

  return (
    <div className="flex items-center justify-between px-2 py-4 border-t mt-4">
      <div className="text-sm text-muted-foreground">
        Showing {start} to {end} of {total} results
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigateToPage(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => navigateToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => navigateToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => navigateToPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}