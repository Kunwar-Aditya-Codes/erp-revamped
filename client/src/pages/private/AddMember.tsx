import { newUserSchema } from '@/validation/newUserValidation';
import { FC, useState } from 'react';
import { z } from 'zod';

type NewUser = z.infer<typeof newUserSchema>;

const AddMember: FC = ({}) => {
  const [newUser, setNewUser] = useState<NewUser>({
    age: 0,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    role: '',
    urn: '',
  });


  
  return <div>AddMember</div>;
};

export default AddMember;
