import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  featureName: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: 0,
    name: '',
    description: '',
    features: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSpecification();
  }, []);

  const fetchSpecification = async () => {
    try {
      setLoading(true);
      const response = await axios.get<BusinessSpecification>('https://api.example.com/business-specification');
      setSpecification(response.data);
    } catch (err) {
      setError('Failed to load business specification.');
    } finally {
      setLoading(false);
    }
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className={clsx('p-4', { 'text-center': isMobile })}>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <>
          <h1 className="mb-2">{specification.name}</h1>
          <p className="mb-4 text-gray-600">{specification.description}</p>
          <ul role="list" aria-label="Business Features">
            {specification.features.map((feature, index) => (
              <li key={index} className="mb-2">
                <strong>{feature.featureName}: </strong>
                <span dangerouslySetInnerHTML={{ __html: feature.details }} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  featureName: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: 0,
    name: '',
    description: '',
    features: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSpecification();
  }, []);

  const fetchSpecification = async () => {
    try {
      setLoading(true);
      const response = await axios.get<BusinessSpecification>('https://api.example.com/business-specification');
      setSpecification(response.data);
    } catch (err) {
      setError('Failed to load business specification.');
    } finally {
      setLoading(false);
    }
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className={clsx('p-4', { 'text-center': isMobile })}>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <>
          <h1 className="mb-2">{specification.name}</h1>
          <p className="mb-4 text-gray-600">{specification.description}</p>
          <ul role="list" aria-label="Business Features">
            {specification.features.map((feature, index) => (
              <li key={index} className="mb-2">
                <strong>{feature.featureName}: </strong>
                <span dangerouslySetInnerHTML={{ __html: feature.details }} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;