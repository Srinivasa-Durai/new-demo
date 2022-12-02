import React, { useState } from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");



const PersonalModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const renderPersonalForm = () => {
        return (
            <div>
                <div>
                    <div>
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div>
                        <label>Personal Email</label>
                        <input type="text" placeholder="Personal Email" />
                    </div>
                    <div>
                        <label>Date Of Birth</label>
                        <input type="date" placeholder="DOB" />
                    </div>
                    <div>
                        <label>Mobile Number</label>
                        <input type="number" placeholder="Mobile Number" />
                    </div>
                    <div>
                        <label>Alt Mobile Number</label>
                        <input type="number" placeholder="Alt Mobile Number" />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="text" placeholder="Address" />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" placeholder="City" />
                    </div>
                    <div>
                        <label>State</label>
                        <input type="text" placeholder="State" />
                    </div>
                    <div>
                        <label>Country</label>
                        <input type="text" placeholder="Country" />
                    </div>
                    <div>
                        <label>Postal Code</label>
                        <input type="number" placeholder="Postal Code" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <button onClick={ToggleModal}>Edit PF</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={ToggleModal}
                contentLabel="Example Modal">
                {renderPersonalForm()}
            </Modal>

        </div>
    )
};

const EducationModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const renderEducationForm = () => {
        return (
            <div>
                Education Form
            </div>
        )
    }

    return (
        <div>
            <button onClick={ToggleModal}>Edit EF</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={ToggleModal}
                contentLabel="Example Modal">
                {renderEducationForm()}
            </Modal>
        </div>
    )
};
const WorkModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const renderWorkForm = () => {
        return (
            <div>
                Work Form
            </div>
        )
    }

    return (
        <div>
            <button onClick={ToggleModal}>Edit WF</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={ToggleModal}
                contentLabel="Example Modal">
                {renderWorkForm()}
            </Modal>
        </div>
    )
};

export { PersonalModal, EducationModal, WorkModal }; 