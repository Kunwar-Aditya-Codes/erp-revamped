import { newUserSchema } from '@/validation/newUserValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm, SubmitHandler, useController } from 'react-hook-form';
import { z } from 'zod';

type NewUser = z.infer<typeof newUserSchema>;

const AddMember: FC = ({}) => {
  const form = useForm<NewUser>({
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      age: 0,
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      role: '',
      urn: '',
    },
  });
  const { field } = useController({ name: 'role', control: form.control });

  const addMember: SubmitHandler<NewUser> = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className=' h-full '>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(addMember)}
          className='h-full flex flex-col justify-evenly max-w-5xl mx-auto'
        >
          <div className='flex flex-col space-y-5 md:flex-row md:space-y-0 md:items-center md:space-x-8'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className=' w-full'>
                  <FormControl className=' '>
                    <Input
                      placeholder='FirstName'
                      className='w-full '
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className=' w-full'>
                  <FormControl>
                    <Input placeholder='LastName' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Email' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className='flex flex-col space-y-5 md:flex-row md:space-y-0 md:items-center md:space-x-8'>
            <FormField
              control={form.control}
              name='age'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input placeholder='Age' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select role' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='student'>Student</SelectItem>
                      <SelectItem value='faculty'>Faculty</SelectItem>
                      <SelectItem value='admin'>Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className=''>
                <FormControl>
                  <Input placeholder='Password' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* <div className='flex flex-col space-y-5 md:flex-row md:space-y-0 md:items-center md:space-x-8'>
            <input
              type='text'
              placeholder='FirstName'
              {...form.register('firstName')}
              className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
            />
            <input
              type='text'
              placeholder='LastName'
              {...register('lastName')}
              className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
            />
          </div>
          <input
            type='text'
            placeholder='Email'
            {...register('email')}
            className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
          />
          <div className='flex flex-col space-y-5 md:flex-row md:space-y-0 md:items-center md:space-x-8'>
            <input
              type='text'
              placeholder='Age'
              {...register('age')}
              className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
            />
            <select
              placeholder='Role'
              {...register('role')}
              className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
            >
              <option value='student'>Student</option>
              <option value='faculty'>Faculty</option>
              <option value='admin'>Admin</option>
            </select>
          </div>
          <input
            type='text'
            placeholder='Urn'
            {...register('urn')}
            className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
          />
          <input
            type='text'
            placeholder='Password'
            {...register('password')}
            className='p-4 rounded-md bg-transparent border border-white/40  focus:border-white/80 w-full outline-none '
          /> */}
          <button
            type='submit'
            className='md:text-lg hover:shadow-md tracking-widest uppercase bg-white text-black p-3  rounded-md disabled:cursor-not-allowed shadow-md outline-none active:scale-95 transition ease-out  disabled:text-zinc-400 '
          >
            Add
          </button>
        </form>
      </Form>
    </div>
  );
};

export default AddMember;
