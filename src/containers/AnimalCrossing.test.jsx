import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockVillagerData from '../../fixtures/villagers.json';
import AnimalCrossing from './AnimalCrossing'

const server = setupServer(
    rest.get('https://ac-vill.herokuapp.com/villagers/', (req, res,ctx) => {
        return res(ctx.json(mockVillagerData));
    })
);

describe('Animal Crossing container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('displays the loading screen', async () => {
        render(<AnimalCrossing />);

        screen.getByText('Loading...');
    });

    it('desiplays a list of villagers', async () => {
        render(<AnimalCrossing />);

        const ul = await screen.findAllByRole('list', { name: 'villagers' });
        expect(ul).toMatchSnapshot();
    })
})