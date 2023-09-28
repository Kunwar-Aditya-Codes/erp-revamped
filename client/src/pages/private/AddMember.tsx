import { newUserSchema } from '@/validation/newUserValidation';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type NewUser = z.infer<typeof newUserSchema>;

const AddMember: FC = ({}) => {
  const { register, control } = useForm();

  const [newUser, setNewUser] = useState<NewUser>({
    age: 0,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    role: '',
    urn: '',
  });

  return (
    <div className=' h-full '>
      <form className=' h-full flex flex-col justify-evenly   max-w-5xl mx-auto'>
        <div className='flex flex-col space-y-5 md:flex-row md:space-y-0 md:items-center md:space-x-8'>
          <input
            type='text'
            placeholder='FirstName'
            className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
          />
          <input
            type='text'
            placeholder='LastName'
            className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
          />
        </div>
        <input
          type='text'
          placeholder='Email'
          className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
        />
        <div className='flex flex-col space-y-5 md:flex-row md:space-y-0 md:items-center md:space-x-8'>
          <input
            type='text'
            placeholder='Age'
            className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
          />
          <input
            type='text'
            placeholder='Role'
            className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
          />
        </div>
        <input
          type='text'
          placeholder='Urn'
          className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
        />
        <input
          type='text'
          placeholder='Password'
          className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
        />
        <button
          type='submit'
          className='md:text-lg hover:shadow-md tracking-widest uppercase bg-white text-black p-3  rounded-md disabled:cursor-not-allowed shadow-md outline-none active:scale-95 transition ease-out  disabled:text-zinc-400 '
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMember;
