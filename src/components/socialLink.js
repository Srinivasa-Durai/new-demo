import React from 'react'

const SocialLink = () => {
    return (
        <div>
            <div>
                <div>
                    <label>LinkdIn</label>
                    <input type="text" placeholder='linkdin url' />
                </div>
                <div>
                    <label>Personal Website</label>
                    <input type="text" placeholder='Personal Website' />
                </div>
                <div>
                    <label>Git profile</label>
                    <input type="text" placeholder='Git profile' />
                </div>
                <div>
                    <label>Portfolio</label>
                    <input type="text" placeholder='Portfolio url' />
                </div>
                <div>
                    <label>Other</label>
                    <input type="text" placeholder='Other url' />
                </div>
            </div>
        </div>
    )
}

export default SocialLink