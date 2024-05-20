import { useState } from 'react';
import { Field, UserIcon, Input } from './FieldChangeName.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';

export const FieldChangeName = ({ setName }) => {
  const { user } = useSelector(selectAuth);
  const [value, setValue] = useState(user.name || '');

  return (
    <Field>
      <UserIcon />
      <Input
        value={value}
        name="name"
        type="text"
        minlength="2"
        maxlength="30"
        required
        onChange={e => {
          setValue(e.target.value);
          setName(e.target.value);
        }}
      />
    </Field>
  );
};
