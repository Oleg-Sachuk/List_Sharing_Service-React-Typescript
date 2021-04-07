import React, { useRef } from 'react';
import { Col } from 'react-bootstrap';

interface ToDoFormProps {
    onAdd(title: string): void
}

const ToDoForm: React.FC<ToDoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);

    const KeyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }

    return (
        <div className="inpForm">
            <Col>
                <label htmlFor="title" className="active">Enter your task:</label>
                <input ref={ref} onKeyPress={KeyPressHandler} type="text" name="title" id="title" placeholder="Enter your task"/>
            </Col>
        </div>
    )
}

export default ToDoForm;