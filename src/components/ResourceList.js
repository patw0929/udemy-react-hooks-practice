import React from 'react';
import useResources from '../hooks/useResources';

export default ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      {resources.map(record => {
        return <li key={record.id}>{record.title}</li>;
      })}
    </div>
  );
}
