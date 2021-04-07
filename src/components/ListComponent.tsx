import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { IntForList } from './../interface';

type ToDoListProps = {
    list: IntForList[],
    pressCheck(id: number): void,
    pressDel(id: number): void
}

const List: React.FC<ToDoListProps> = ({ list, pressCheck, pressDel }) => {
    return (
        <ul>
            {list.map(item => {
                const classes = ['item'];
                if(item.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={item.id}>
                        <label>
                            <input type="checkbox" checked={item.completed} onChange={() => pressCheck(item.id)} />
                            <span>{item.title}</span>
                            <FontAwesomeIcon onClick={() => pressDel(item.id)} icon={faTrash} />
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;