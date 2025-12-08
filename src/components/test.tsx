import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestTypes';
import { LoadingSpinner } from './components/LoadingSpinner';

interface WriteTestProps {
  onCreateSuccess?: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onCreateSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createTest] = useMutation(CREATE_TEST, {
    variables: { title, description },
    onCompleted: (data) => {
      if (onCreateSuccess) onCreateSuccess(data.createTest);
    },
    onError: (err) => {
      setError(err.message);
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createTest();
    } catch (err) {
      console.error('Failed to create test:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" disabled={loading} className={`w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md ${loading ? 'bg-gray-300' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'} text-white`}>
          {loading ? <LoadingSpinner size="sm" /> : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestTypes';
import { LoadingSpinner } from './components/LoadingSpinner';

interface WriteTestProps {
  onCreateSuccess?: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onCreateSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createTest] = useMutation(CREATE_TEST, {
    variables: { title, description },
    onCompleted: (data) => {
      if (onCreateSuccess) onCreateSuccess(data.createTest);
    },
    onError: (err) => {
      setError(err.message);
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createTest();
    } catch (err) {
      console.error('Failed to create test:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" disabled={loading} className={`w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md ${loading ? 'bg-gray-300' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'} text-white`}>
          {loading ? <LoadingSpinner size="sm" /> : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;