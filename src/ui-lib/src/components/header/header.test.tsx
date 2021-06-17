import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Header } from './';

describe('Header Component', () =>{
    it('Function onChange must be called on slide action', () => {
        render(<Header/>);

        expect(screen.getByRole('header')).toHaveTextContent('Weather app')
    });
});
