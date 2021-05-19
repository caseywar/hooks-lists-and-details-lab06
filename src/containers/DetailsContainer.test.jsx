import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockVillagerData from '../../fixtures/villager.json';
import DetailsContainer from './AnimalCrossing'

const server = setupServer(
    rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e460', (req, res,ctx) => {
        return res(ctx.json(mockVillagerData));
    })
);

describe('Details container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it.skip('displays the loading screen', async () => {
        render(<DetailsContainer />);

        screen.getByText('Loading...');
    });

    it('desiplays details for one villager', async () => {
        render(<DetailsContainer />);

        const ul = await screen.findAllByRole('object', { name: 'villager' });
        expect(ul).toMatchSnapshot();
    })
})