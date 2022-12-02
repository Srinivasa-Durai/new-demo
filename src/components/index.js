import React from 'react';
import { PersonalModal, EducationModal, WorkModal } from "./modal";
import SocialLink from './socialLink';

const Index = () => {
    return (
        <div>
            <div>
                <div>
                    <label>First Name</label>
                    <input type="text" readOnly />
                </div>
                <div>
                    <label>Mobile Number</label>
                    <input type="number" readOnly />
                </div>
                <div>
                    <label>Date Of Birth</label>
                    <input type="date" readOnly />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" readOnly />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" readOnly />
                </div>
                <PersonalModal />
            </div>
            <div>
                <EducationModal />
            </div>
            <div>
                <WorkModal />
            </div>
            <div>
                <SocialLink />
            </div>
        </div>
    )
}

export default Index;