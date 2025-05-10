import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  return (
    <div className="p-6">
      <Table className="w-full border border-gray-300">
        <TableCaption className="mb-4">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow className="border-b border-gray-300">
            <TableHead className="w-[100px] border-r border-gray-300">
              User:Id
            </TableHead>
            <TableHead className="border-r border-gray-300">Status</TableHead>
            <TableHead className="border-r border-gray-300">Method</TableHead>
            <TableHead className="text-right">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b border-gray-200">
            <TableCell className="font-medium border-r border-gray-200">
              INV001
            </TableCell>
            <TableCell className="border-r border-gray-200">Paid</TableCell>
            <TableCell className="border-r border-gray-200">
              Credit Card
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
