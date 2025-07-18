import { render, screen, fireEvent } from '@testing-library/react';
import ProductImageSlider from '../components/product/image-slider';

describe('ProductImageSlider', () => {
  it('renders fallback image and alt text when images is empty', () => {
    render(<ProductImageSlider images={[]} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', expect.stringContaining('/placeholder.svg'));
    expect(img).toHaveAttribute('alt', 'صورة افتراضية للمنتج');
  });

  it('renders product images and allows navigation', () => {
    const images = ['/product1.png', '/product2.png'];
    render(<ProductImageSlider images={images} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', expect.stringContaining(images[0]));
    fireEvent.click(screen.getByLabelText('الصورة التالية'));
    expect(img).toHaveAttribute('src', expect.stringContaining(images[1]));
    fireEvent.click(screen.getByLabelText('الصورة السابقة'));
    expect(img).toHaveAttribute('src', expect.stringContaining(images[0]));
  });
});
