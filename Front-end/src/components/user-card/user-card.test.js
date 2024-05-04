import React from 'react';
import { render } from '@testing-library/react';
import { UserCard } from '.';

const supportContact = {
    name: 'John Doe',
    email: 'john@example.com'
};

describe('UserCard Component', () => {
    it('renders the user name and email correctly', () => {
        const { getByText } = render(<UserCard supportContact={supportContact} />);
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('john@example.com')).toBeInTheDocument();
    });

    it('renders the first letter of the user name as bold', () => {
        const { container } = render(<UserCard supportContact={supportContact} />);
        const boldName = container.querySelector('.profile-picture b');
        expect(boldName).toHaveTextContent('J');
    });

    it('renders the phone number correctly', () => {
        const { getByText } = render(<UserCard supportContact={supportContact} />);
        expect(getByText('020 3362 4208')).toBeInTheDocument();
    });

    it('renders the envelope icon', () => {
        const { container } = render(<UserCard supportContact={supportContact} />);
        const icon = container.querySelector('.user-info-bottom-left svg');
        expect(icon).toBeInTheDocument();
    });
});
