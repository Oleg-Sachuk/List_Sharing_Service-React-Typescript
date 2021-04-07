import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IntForList } from './../interface';

const Share: React.FC = () => {
    const history = useHistory();
    const saved = useRef<IntForList[]>([]);
    const [list, setList] = useState<IntForList[]>([]);

    useEffect(() => {
        saved.current = JSON.parse(localStorage.getItem('list') || '[]') as IntForList[]
        setList(saved.current)
    }, [])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return (
        <>
            <div className="mainTitle">
                <h1>Share your ToDo list</h1>
            </div>
            <div>
                <ul>
                    {list.map(item => {
                        return (
                            <li>
                                {!item.completed
                                    ? <p>{item.title}</p>
                                    : <p style={{ textDecoration: 'line-through' }}>{item.title}</p>
                                }
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <button onClick={() => history.push('/')}>Back to your list</button>
            </div>
        </>
    )
}

export default Share;