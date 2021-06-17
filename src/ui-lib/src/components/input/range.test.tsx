import { render, screen, fireEvent } from '@testing-library/react';
import { InputRange } from './range';

describe('InputRange Component', () =>{
    it('Function onChange must be called on slide action', () => {
        const onChange = jest.fn()
        render(<InputRange min={0} max={10} onChange={onChange} defaultValue={1}/>);

        const slider = screen.getByRole('range');
        fireEvent.change(slider, {
            target: {
              valueAsNumber: 2,
            },
          })

        expect(onChange).toBeCalled();
    });
});
