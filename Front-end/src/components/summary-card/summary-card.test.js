import React from 'react';
import { render } from '@testing-library/react';
import { SummaryCard } from '.';

describe('SummaryCard', () => {
    it('renders uploads and lines correctly', () => {
        const uploads = 10;
        const lines = 100;
        const { getByText } = render(<SummaryCard uploads={uploads} lines={lines} />);
        const uploadsText = getByText('10 uploads');
        const linesText = getByText('100');
        expect(uploadsText).toBeInTheDocument();
        expect(linesText).toBeInTheDocument();
    });

    it('renders card header title correctly', () => {
        const uploads = 10;
        const lines = 100;
        const { getByText } = render(<SummaryCard uploads={uploads} lines={lines} />);
        const salesText = getByText('Sales');
        expect(salesText).toBeInTheDocument();
    });
});
