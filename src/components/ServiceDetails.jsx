import React from 'react';

const ServiceDetails = (props) => {
    return (
        <div>
            <h1>Service Details: {props.match.params.id}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto facere 
                sapiente porro quas veritatis qui recusandae error dolor voluptatum quia maxime, 
                deleniti reiciendis, voluptatem illo voluptates optio expedita dolore?
            </p>
        </div>
    );
}

export default ServiceDetails;
