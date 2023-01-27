import React from 'react';
import './style.css'
const logo = require('../../assets/logo.png')
const plus = require('../../assets/plus.png')
const user = require('../../assets/user.png')
const report = require('../../assets/report.png')
const setting = require('../../assets/setting.png')
const upload = require('../../assets/upload.png')
const folder = require('../../assets/folder.png')
const logout = require('../../assets/logout.png')
export default function componentName() {
    return (
        <>
            <div className="logo-container">
                <img
                    src={logo}
                    alt={"logo"}
                    width={'100%'}
                />
            </div>
            <a href="#" className='col'>
                <img
                    src={plus}
                    alt={"plus"}
                    width={16}
                    height={16}
                    className="imgStyle"
                />
                <span className='text-heading'>NEW</span>
            </a>
            <a href="#" className='col'>
                <img
                    src={user}
                    alt={"plus"}
                    width={16}
                    height={16}
                    className="imgStyle"
                />
                <span className='text-heading'>PATIENT</span>
            </a>
            <a href="#" className='col'>
                <img
                    src={folder}
                    alt={"plus"}
                    width={16}
                    height={16}
                    className="imgStyle"
                />
                <span className='text-heading'>FOLDER</span>
            </a>
            <a href="#" className='col'>
                <img
                    src={upload}
                    alt={"plus"}
                    width={16}
                    height={16}
                    className="imgStyle"
                />
                <span className='text-heading'>UPLOAD</span>
            </a>
            <a href="#" className='col'>
                <img
                    src={report}
                    alt={"plus"}
                    width={16}
                    height={16}
                    className="imgStyle"
                />
                <span className='text-heading'>REPORT</span>
            </a>
            <a href="#" className='col'>
                <img
                    src={setting}
                    alt={"plus"}
                    width={16}
                    height={16}
                    className="imgStyle"
                />
                <span className='text-heading'>SETTING</span>
            </a>
            <a href="#" className='col'>
                <img
                    src={logout}
                    alt={"plus"}
                    width={16}
                    height={16}
                    className="imgStyle"
                />
                <span className='text-heading'>LOGOUT</span>
            </a>
        </>
    );
}
