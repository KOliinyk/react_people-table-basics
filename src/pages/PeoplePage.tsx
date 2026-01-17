import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPeople, Person } from '../api/peopleApi';
import PeopleTable from '../components/PeopleTable';
import Loader from '../components/Loader';

const PeoplePage: React.FC = () => {
  const { slug } = useParams();
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPeople()
      .then(setPeople)
      .catch(() => setError('Something went wrong'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <h1 className="title">People Page</h1>

      {loading && <Loader />}
      {error && <p className="has-text-danger">{error}</p>}

      {!loading && !error && (
        <PeopleTable people={people} selectedSlug={slug} />
      )}
    </div>
  );
};

export default PeoplePage;
