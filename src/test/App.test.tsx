import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { store } from '../store';
// import { Provider } from 'react-redux';
import ChangeThemeButton from '../components/ChangeThemeButton/ChangeThemeButton';
// import Page from '../app/page';
// import { mockSearchParams } from './mocks/mockSearchParams';

// vi.mock('next/navigation', () => {
//   return {
//     useRouter: vi.fn(() => ({
//       push: vi.fn(),
//     })),
//     useSearchParams: vi.fn(() => ({
//       get: vi.fn(),
//     })),
//   };
// });

// describe('test App', () => {
//   test('test render App', () => {
//     render(
//       <MemoryRouter initialEntries={['?search=a&page=1']}>
//         <Provider store={store}>
//           <Page searchParams={mockSearchParams} />
//         </Provider>
//       </MemoryRouter>,
//     );
//     const textOntheButton = screen.getByText('Search');

//     expect(textOntheButton).toBeInTheDocument();
//   });
// });

describe('test ChangeThemeButton', () => {
  test('test render', () => {
    render(<ChangeThemeButton />);

    const changeThemeButton = screen.getByTitle('Click to change');
    expect(changeThemeButton).toBeInTheDocument();
  });
});
