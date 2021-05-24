import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockVillagerData from '../../fixtures/villager.json';
import DetailsContainer from './AnimalCrossing';
import { MemoryRouter } from 'react-router';


const server = setupServer(
    rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e460', (req, res, ctx) => {
    return res(ctx.json(mockVillagerData));
    })
);

describe('Details container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it.skip('displays the loading screen', async () => {
        render(
            <MemoryRouter>
                <DetailsContainer 
        match={{
            params: {
                id: '5f5fb4bbbfd05c2aed82e460'
            }
        }}
        />
            </MemoryRouter>
);

        screen.getByText('Loading...');

        const villager = screen.findByTestId('villager');
        waitFor(() => expect(villager).toMatchSnapshot());
    })
})