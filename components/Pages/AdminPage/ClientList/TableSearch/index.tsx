import { Input } from "@components/ui/input";

interface TableSearchProps {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
}

const TableSearch: React.FC<TableSearchProps> = ({
  globalFilter,
  setGlobalFilter,
}) => {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Search all fields..."
        value={globalFilter}
        onChange={(event) => setGlobalFilter(event.target.value)}
        className="max-w-sm text-black"
      />
    </div>
  );
};

export default TableSearch;
