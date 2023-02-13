import React, {useCallback, useEffect, useState} from "react";
import './ApiFetcher.css';

const api = 'https://jsonplaceholder.typicode.com/users';

type User = {
  id: number,
  name: string,
  username: string,
  email: string
}

const ApiFetcher: React.FC = () => {
    const [randomUser, setRandomUser] = useState<User | undefined>(undefined);

    const fetchRandomUser = useCallback(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                const index = Math.round(Math.random() * data.length);
                const user: User = data[index];

                setRandomUser(user);
            })
    }, []);

    useEffect(() => fetchRandomUser(), []);

    return (
        <>
            <h3>Random User</h3>
            <p>This data came from <a href={api}>{api}</a>:</p>
            <div className='api-fetcher__data'>
              {randomUser && <>{randomUser.name} - {randomUser.email}</>}
            </div>
        </>
    );
}

export default ApiFetcher;
