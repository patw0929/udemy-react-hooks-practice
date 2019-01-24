import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

      setResources(response.data);
    })(resource);
  }, [resource]);

  return (
    <div>
      {resources.map(record => {
        return <li key={record.id}>{record.title}</li>;
      })}
    </div>
  );
}
