import { FC } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MdDelete } from 'react-icons/md';

interface TableListProps {
  data: {
    _id: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    urn: string;
  }[];
}

const TableList: FC<TableListProps> = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className=''>Name</TableHead>
          <TableHead className='text-center'>Email</TableHead>
          <TableHead className='text-center'>Age</TableHead>
          <TableHead className='text-center'>Urn</TableHead>
          <TableHead className='text-right'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((user) => (
          <TableRow key={user._id}>
            <TableCell className=''>
              {user.firstName} {user.lastName}
            </TableCell>
            <TableCell className='text-center'>{user.email}</TableCell>
            <TableCell className='text-center'>{user.age}</TableCell>
            <TableCell className='text-center'>{user.urn}</TableCell>
            <TableCell className='flex items-center justify-end'>
              <MdDelete className='w-6 h-6 bg-white/10 shadow-md p-1  rounded-md cursor-pointer' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
