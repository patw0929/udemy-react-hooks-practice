import React from 'react';
import useResources from '../hooks/useResources';

export default () => {
  const users = useResources('users');

  return (
    <ul>
      {users.map(user => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}
