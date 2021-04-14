import React from 'react';

import './LogEntry.css';

const LogEntry = props => {
    const logItems = props.goals.map((goal) => <div className="log-list">{goal.text}</div>); 
    return (
        <div>
            {logItems}
        </div>
    );
};

export default LogEntry;