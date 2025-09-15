import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import SWRPre from '../chap06/SWRPre';

describe('SWRPre (Mock)', () => {
  const server = setupServer(
    http.get('https://api.openweathermap.org/data/2.5/weather', () => {
      return HttpResponse.json(
        {
          weather: [
            { icon: '4n', main: 'Clouds', description: '曇り' }
          ]
        },
        { status: 200 }
      );
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('モックを利用したテスト', async () => {
    const { debug, baseElement } = render(<SWRPre />);
    const img = await screen.findByRole('img', {}, { timeout: 3000 });
    expect(img).toHaveAttribute('alt', 'Clouds');
    debug(baseElement);
  });
});