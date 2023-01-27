import React from 'react';
import './style.css'
export default function InputBox({ onChange, label, style }) {
    return (
        <div className='input-box'>
            <label className='label'>{label}</label>
            <input
                type="text"
                onChange={onChange}
                className={'input'}
            />
        </div>
    );
}
