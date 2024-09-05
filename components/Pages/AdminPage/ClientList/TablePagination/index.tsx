import { Button } from "@components/ui/button";

const TablePagination: React.FC<any> = ({ table }) => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <div className="flex-1 text-lg text-muted-foreground">
        {table.getFilteredRowModel().rows.length} row(s)
      </div>
      <div className="space-x-2">
        <Button
          className="text-black"
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          className="text-black"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;
