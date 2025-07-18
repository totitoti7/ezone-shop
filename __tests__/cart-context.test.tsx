import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { CartProvider, useCart, CartItem } from '../components/cart-context';

import Button from '../components/button';

function TestComponent() {
  const { items, addItem, removeItem, clearCart } = useCart();
  return (
    <div>
      <Button onClick={() => addItem({ id: '1', name: 'Test', price: 10, quantity: 1 })}>
        Add
      </Button>
      <Button onClick={() => removeItem('1')}>Remove</Button>
      <Button onClick={clearCart}>Clear</Button>
      <span data-testid="count">{items.length}</span>
    </div>
  );
}

describe('CartContext', () => {
  it('adds, removes, and clears items', async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    const addBtn = screen.getByText('Add');
    const removeBtn = screen.getByText('Remove');
    const clearBtn = screen.getByText('Clear');
    const count = screen.getByTestId('count');

    expect(count.textContent).toBe('0');
    await act(async () => {
      addBtn.click();
    });
    expect(count.textContent).toBe('1');
    await act(async () => {
      removeBtn.click();
    });
    expect(count.textContent).toBe('0');
    await act(async () => {
      addBtn.click();
      clearBtn.click();
    });
    expect(count.textContent).toBe('0');
  });
});
