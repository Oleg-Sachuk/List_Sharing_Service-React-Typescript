import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { IntForList } from './../interface';

type ToDoListProps = {
    list: IntForList[]
}

const List: React.FC<ToDoListProps> = ({ list }) => {
    return (
        <ul>
            {list.map(item => {
                const classes = ['item'];
                if(item.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={item.id}>
                        <label htmlFor="">
                            <input type="checkbox" checked={item.completed} />
                            <span>{item.title}</span>
                            <FontAwesomeIcon icon={faTrash} />
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;