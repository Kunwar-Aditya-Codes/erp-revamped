import { FC } from 'react';
import TableList from '@/components/TableList';
import { useQuery } from '@tanstack/react-query';
import usePrivateAxios from '@/hooks/usePrivateAxios';

interface StudentProps {}

const Student: FC<StudentProps> = ({}) => {
  const axiosPrivate = usePrivateAxios();

  const { data, isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      const response = await axiosPrivate.get('admin/all_students');
      return response.data;
    },
    staleTime: Infinity,
  });
  return (
    <div className=''>
      {isLoading ? <p>Loading...</p> : <TableList data={data?.allStudents} />}
    </div>
  );
};

export default Student;
