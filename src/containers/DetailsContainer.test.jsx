import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockVillagerData from '../../fixtures/villager.json';
import DetailsContainer from './AnimalCrossing';
import { MemoryRouter } from 'react-router';


const server = setupServer(
    rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e460', (req, res, ctx) => {
    return res(ctx.json(mockVillagerData
    //     {
    //     id: '5f5fb4bbbfd05c2aed82e460',
    //     name: 'Admiral',
    //     image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/Admiral_NH.png/revision/latest?cb=20200802081138',
    //     japaneseName: "イッテツ Ittetsu",
    //     birthday: "January 27th (Aquarius)",
    //     personality: 'cranky',
    //     quote: 'Only quitters give up.',
    //     skill: 'Writing about pickles',
    // }
    ));
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