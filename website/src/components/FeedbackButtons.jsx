import React, { useState } from 'react';
import posthog from 'posthog-js';

function FeedbackButtons() {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const handleLikeClick = () => {
        setLiked(true);
        posthog.capture('page_feedback', {
            page: window.location.pathname,
            feedback: 'like'
          });
    };

    const handleDislikeClick = () => {
        setDisliked(true);
        posthog.capture('page_feedback', {
            page: window.location.pathname,
            feedback: 'dislike'
          });
    };

    return (
        <div className="feedback-container">
            <h6>Was this page helpful?</h6>
            <div className='feedback-buttons'>
                <button onClick={handleLikeClick} disabled={liked}>
                    {liked ? '✔️' : '👍'}
                </button>
                <button onClick={handleDislikeClick} disabled={disliked}>
                    {disliked ? '✔️' : '👎'}
                </button>
            </div>
        </div>
    );
}

export default FeedbackButtons;
