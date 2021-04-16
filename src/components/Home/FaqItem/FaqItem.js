import React from 'react';

const FaqItem = ({faq}) => {
    const {title, description} = faq;
    return (
        <div className="col">
            <h4 className="pb-4">{title}</h4>
            <p className="text-muted">{description}</p>            
        </div>
    );
};

export default FaqItem;