import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResources = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

    setResources(response.data);
  };

  useEffect(() => {
    fetchResources();
  }, [resource]);

  return (
    <div>
      {resources.length}
    </div>
  );
}
