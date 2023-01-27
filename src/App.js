import React from 'react';
import './App.css'
import SideNav from './components/SideNav/sideNav'
import InputBox from './components/InputBox/InputBox'
const awatar = require('./assets/awatar.png')
const doc = require('./assets/doc.png')

export default function componentName() {
  return (
    <div className='main'>
      <div className="side-nav">
        <SideNav />
      </div>
      <div className="prifileAndDoc">
        <div className="prifileAndDoc profile">
          <img
            src={awatar}
            alt={"awatar"}
            className="awatar"
          />
          <label className='user-text-heading'>
            Diane Cooper
          </label>
          <label className='user-text-description'>
            diane.cooper@example.com
          </label>
          <div className="user-otherDetails">
            <div className="event ">
              <label className='number-text'>
                15
              </label>
              <label className='user-text-description'>
                Past
              </label>
            </div>
            <div className="line"></div>
            <div className="event ">
              <label className='number-text'>
                15
              </label>
              <label className='user-text-description'>
                Past
              </label>
            </div>
          </div>
        </div>
        <button className='button' >
          Submit
        </button>
        <p className='user-text-description-bold'>Files / Documents</p>
        <div className="doc-container">
          <div className="doc v-space">
            <img src={doc} width={10} height={10} />
            <div className="h-space"></div>
            <label className='small-font-text'>Check Up Results.pdf</label>
          </div>
          <div className="doc v-space">
            <img src={doc} width={10} height={10} />
            <div className="h-space"></div>
            <label className='small-font-text'>Medical Prescription.pdf</label>
          </div>
          <div className="doc v-space">
            <img src={doc} width={10} height={10} />
            <div className="h-space"></div>
            <label className='small-font-text'>Dental X-Ray Result.pdf</label>
          </div>
        </div>
      </div>
      <div className="otherSection">
        <div className="inputSecton">
          <InputBox
            label={'Gender'}
            onChange={() => { }}
          />
          <div className="h-space"></div>
          <InputBox
            label={'Birthday'}
            onChange={() => { }}
          />
          <div className="h-space"></div>
          <InputBox
            label={'Phone Number'}
            onChange={() => { }}
          />
          <div className="h-space"></div>
          <InputBox
            label={'Registered Date'}
            onChange={() => { }}
          />
          <div className="h-space"></div>
          <InputBox
            label={'Street Address'}
            onChange={() => { }}
          />
          <div className="h-space"></div>
          <InputBox
            label={'City'}
            onChange={() => { }}
          />
          <div className="h-space"></div>
          <InputBox
            label={'Zip Code'}
            onChange={() => { }}
          />
          <div className="h-space"></div>
          <InputBox
            label={'Member Status'}
            onChange={() => { }}
          />
        </div>
        <div className="option-list">
          <div className="option">
            <label className='small-font-text color-red'>Upcoming Appointments</label>
          </div>
          <div >
            <label className='small-font-text'>Past Appointments</label>
          </div>
          <div >
            <label className='small-font-text'>Medical Records</label>
          </div>
        </div>
        <div className="appointment-box">
          <div className="heading">
            <label className='small-font-text'>
              Root Canal Treatment
            </label>
            <div className="option">
              <label className='small-font-text color-grey'>Show Previous Treatments</label>
            </div>
          </div>
          <div className="hr-line">
          </div>
          <div className="apointment">
            <div className="apointment-data">
              <label className='user-text-heading'>26 Nov ‘19</label>
              <label className='small-font-text color-grey top-margin'>09.00 - 10.00</label>
            </div>
            <div className="vr-line"></div>
            <div className="apointment-data">
              <label className='small-font-text color-grey'>Treatment</label>
              <label className='small-font-text top-margin'>Open Access</label>
            </div>
            <div className="vr-line"></div>
            <div className="apointment-data">
              <label className='small-font-text color-grey'>Dentist</label>
              <label className='small-font-text  top-margin'>Drg. Adam H.</label>
            </div>
            <div className="apointment-data">
              <label className='small-font-text color-grey'>Nurse</label>
              <label className='small-font-text top-margin'>Jessicamila</label>
            </div>
            <div className="apointment-doc">
              <img src={doc} width={10} height={10} alt="doc" />
              <div className="h-space"></div>
              <label className='small-font-text 90'>Note</label>
            </div>
          </div>
          <div className="vr-line"></div>
          <div className="apointment">
            <div className="apointment-data">
              <label className='user-text-heading'>26 Nov ‘19</label>
              <label className='small-font-text color-grey top-margin'>09.00 - 10.00</label>
            </div>
            <div className="vr-line"></div>
            <div className="apointment-data">
              <label className='small-font-text color-grey top-margin'>Treatment</label>
              <label className='small-font-text top-margin'>Root Canal</label>
            </div>
            <div className="vr-line"></div>
            <div className="apointment-data">
              <label className='small-font-text color-grey'>Dentist</label>
              <label className='small-font-text  top-margin'>Drg. Adam H.</label>
            </div>
            <div className="apointment-data">
              <label className='small-font-text color-grey'>Nurse</label>
              <label className='small-font-text top-margin'>Jessicamila</label>
            </div>
            <div className="apointment-doc">
              <img src={doc} width={10} height={10} alt="doc" />
              <div className="h-space"></div>
              <label className='small-font-text '>Note</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
