import React from 'react';
import { render } from '@testing-library/react';
import { PercentageCard } from '.';

describe('PercentageCard', () => {
    it('renders percentage correctly', () => {
        const totalData = 1000;
        const consolidatedData = 250;
        const text = 'Percentage Text';
        const { getByText } = render(
            <PercentageCard totalData={totalData} consolidatedData={consolidatedData} text={text} />
        );
        const percentageText = getByText('25%');
        expect(percentageText).toBeInTheDocument();
    });

    it('renders text correctly', () => {
        const totalData = 1000;
        const consolidatedData = 250;
        const text = 'Percentage Text';
        const { getByText } = render(
            <PercentageCard totalData={totalData} consolidatedData={consolidatedData} text={text} />
        );
        const textElement = getByText('Percentage Text');
        expect(textElement).toBeInTheDocument();
    });
});
