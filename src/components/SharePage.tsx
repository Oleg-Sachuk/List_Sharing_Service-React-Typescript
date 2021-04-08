import React, { useEffect, useRef, useState } from 'react';
import { Col, OverlayTrigger, Popover } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import { IntForList } from './../interface';
import moment from 'moment';

const Share: React.FC = () => {
    const history = useHistory();
    const saved = useRef<IntForList[]>([]);
    const time = useRef<string>('');
    const [list, setList] = useState<IntForList[]>([]);
    const [trig, setTrig] = useState<boolean>(false);

    useEffect(() => {
        saved.current = JSON.parse(localStorage.getItem('list') || '[]') as IntForList[]
        setList(saved.current)
    }, [])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    const SetDate = (): string => {
        setTrig(!trig)
        if(trig !== true) {
            let date = moment().format('lll')
            return time.current = `(${date})`    
        } else {
            return time.current = ''
        }
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Important note</Popover.Title>
            <Popover.Content>
                We never store your info and we use your mail client for safety purposes
            </Popover.Content>
        </Popover>
    );

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
                <Form
                    onSubmit={formData => {
                        const comparr: string[] = [''];
                        list.forEach(item => {
                            if (item.completed) return comparr.push('%F0%9F%97%B9')
                            else return comparr.push('%F0%9F%97%B7')
                        })
                        setTimeout(() => {
                            window.location.href = ("mailto:" + formData.email + "?subject=" + formData.subject + ` ${time.current}` +
                                "&body=" + list.map(item => `%0D%0A%E2%80%A7${item.title}%09 completed: ${comparr[list.indexOf(item) + 1]}`));
                        }, 320);
                    }}
                >
                    {({ handleSubmit, pristine, submitting }) => (
                        <form onSubmit={handleSubmit} >
                            <Col>
                                <div className="inpForm">
                                    <label htmlFor={'email'}><b>Email:</b></label>
                                    <Field type={'email'} placeholder={'yourfreind@something.somthing'} name={'email'} component={'input'} />
                                </div>
                                <div className="inpForm">
                                    <label htmlFor={'subject'}><b>Subject:</b></label>
                                    <Field type={'text'} placeholder={'Subject'} name={'subject'} component={'input'} />
                                </div>
                                <div className="checkInp">
                                    <label htmlFor={'date'}><b>Add timestamp:</b></label>
                                    <Field type={'checkbox'} onClick={SetDate} name={'date'} component={'input'} />
                                </div>
                            </Col>
                            <Col>
                                <div className="inpBtn">
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                                        <button name={'btn'} disabled={submitting || pristine}>Send</button>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                        </form>
                    )}
                </Form>
            </div>
            <div className="backBtn">
                <button onClick={() => history.push('/')}>Back to your list</button>
            </div>
        </>
    )
}

export default Share;