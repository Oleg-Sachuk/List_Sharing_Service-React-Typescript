import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
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
            <div className="inpForm">
                <div>
                <Form
            onSubmit={formData => {
                const comparr: string[] = [''];
                list.forEach(item => {
                    if(item.completed) return comparr.push('%F0%9F%97%B9')
                    else return comparr.push('%F0%9F%97%B7')
                })
                setTimeout(() => {
                    window.location.href = ("mailto:" + formData.email + "?subject=" + formData.subject +
                    "&body=" + list.map(item => `%0D%0A${item.title}%09 completed: ${comparr[list.indexOf(item)+1]}`));
                }, 320);                
            }}
        >
            {({ handleSubmit, pristine, submitting }) => (
                <form onSubmit = {handleSubmit} >
                    <Row>
                        <Col>
                            <p><b>Email:</b></p>
                        </Col>
                        <Col>
                            <Field type={'email'} placeholder={'yourfreind@something.somthing'} name={'email'} component={'input'} />
                        </Col>
                        <Col>
                            <p><b>Subject:</b></p>
                        </Col>
                        <Col>
                            <Field type={'text'} placeholder={'Subject'} name={'subject'} component={'input'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button name={'btn'} disabled={submitting || pristine}>Send</button>
                        </Col>
                    </Row>
                </form>
            )}
        </Form>
                </div>
            </div>
            <div>
                <button onClick={() => history.push('/')}>Back to your list</button>
            </div>
        </>
    )
}

export default Share;