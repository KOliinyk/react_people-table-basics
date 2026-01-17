import React from 'react';
import { Person } from '../api/peopleApi';
import PersonLink from './PersonLink';

interface Props {
  people: Person[];
  selectedSlug?: string;
}

const PeopleTable: React.FC<Props> = ({ people, selectedSlug }) => (
  <table className="table is-striped is-hoverable is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Sex</th>
        <th>Born</th>
        <th>Died</th>
        <th>Mother</th>
        <th>Father</th>
      </tr>
    </thead>
    <tbody>
      {people.map(person => (
        <tr
          key={person.slug}
          className={
            person.slug === selectedSlug ? 'has-background-warning' : ''
          }
        >
          <td className={person.sex === 'f' ? 'has-text-danger' : ''}>
            <PersonLink person={person}>{person.name}</PersonLink>
          </td>
          <td>{person.sex}</td>
          <td>{person.born}</td>
          <td>{person.died}</td>
          <td>
            {person.motherName ? (
              <PersonLink
                person={people.find(p => p.name === person.motherName)}
              >
                {person.motherName}
              </PersonLink>
            ) : (
              '-'
            )}
          </td>
          <td>
            {person.fatherName ? (
              <PersonLink
                person={people.find(p => p.name === person.fatherName)}
              >
                {person.fatherName}
              </PersonLink>
            ) : (
              '-'
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PeopleTable;
