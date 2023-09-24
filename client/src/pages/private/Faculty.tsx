import { FC } from 'react';
import TableList from '../../components/TableList';
import { useQuery } from '@tanstack/react-query';
import usePrivateAxios from '@/hooks/usePrivateAxios';
import { BiLoaderCircle } from 'react-icons/bi';

interface FacultyProps {}

const Faculty: FC<FacultyProps> = ({}) => {
  const axiosPrivate = usePrivateAxios();

  const {
    data: allFaculty,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['faculties'],
    queryFn: async () => {
      const response = await axiosPrivate.get('admin/all_faculty');
      return response.data;
    },
    staleTime: Infinity,
  });

  return <div>{isLoading ? <BiLoaderCircle /> : <TableList />}</div>;
};

export default Faculty;
