import React from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../api/peopleApi';

interface Props {
  person?: Person;
  children: string;
}

const PersonLink: React.FC<Props> = ({ person, children }) => {
  if (!person) {
    return <>{children}</>;
  }

  return <Link to={`/people/${person.slug}`}>{children}</Link>;
};

export default PersonLink;
