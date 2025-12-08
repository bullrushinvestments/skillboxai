import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface Requirement {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface GatherRequirementsFormProps {
  onSubmit: (requirements: Requirement[]) => void;
}

const GatherRequirements: React.FC<GatherRequirementsFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Requirement[]>();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleFormSubmit = (data: Requirement[]) => {
    if (!onSubmit) return;
    setLoading(true);

    setTimeout(() => {
      try {
        onSubmit(data);
        reset();
        toast({
          title: 'Requirements gathered successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error('Error gathering requirements:', error);
        toast({
          title: 'Failed to gather requirements',
          description: (error as Error).message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
      setLoading(false);
    }, 1000); // Simulate API call delay
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {errors && Object.keys(errors).length > 0 ? (
        <div role="alert" aria-live="polite">
          Please correct the errors below.
        </div>
      ) : null}
      
      <label htmlFor="name">Name</label>
      <input type="text" id="name" {...register('name', { required: true })} />
      {errors.name && (
        <p role="alert" aria-live="polite">
          Name is required
        </p>
      )}

      <label htmlFor="description">Description</label>
      <textarea id="description" {...register('description')} />

      <label htmlFor="priority">Priority</label>
      <select id="priority" {...register('priority', { required: true })}>
        <option value="">Select priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      {errors.priority && (
        <p role="alert" aria-live="polite">
          Priority is required
        </p>
      )}

      <button type="submit" disabled={loading}>
        {loading ? 'Gathering...' : 'Gather Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface Requirement {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface GatherRequirementsFormProps {
  onSubmit: (requirements: Requirement[]) => void;
}

const GatherRequirements: React.FC<GatherRequirementsFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Requirement[]>();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleFormSubmit = (data: Requirement[]) => {
    if (!onSubmit) return;
    setLoading(true);

    setTimeout(() => {
      try {
        onSubmit(data);
        reset();
        toast({
          title: 'Requirements gathered successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error('Error gathering requirements:', error);
        toast({
          title: 'Failed to gather requirements',
          description: (error as Error).message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
      setLoading(false);
    }, 1000); // Simulate API call delay
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {errors && Object.keys(errors).length > 0 ? (
        <div role="alert" aria-live="polite">
          Please correct the errors below.
        </div>
      ) : null}
      
      <label htmlFor="name">Name</label>
      <input type="text" id="name" {...register('name', { required: true })} />
      {errors.name && (
        <p role="alert" aria-live="polite">
          Name is required
        </p>
      )}

      <label htmlFor="description">Description</label>
      <textarea id="description" {...register('description')} />

      <label htmlFor="priority">Priority</label>
      <select id="priority" {...register('priority', { required: true })}>
        <option value="">Select priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      {errors.priority && (
        <p role="alert" aria-live="polite">
          Priority is required
        </p>
      )}

      <button type="submit" disabled={loading}>
        {loading ? 'Gathering...' : 'Gather Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;