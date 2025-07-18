import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductDetailsCard from '../components/product/details-card';

describe('DetailsCard', () => {
  it('renders sizes from variants', () => {
    const product = {
      Id: 4,
      Name: 'منتج مع خيارات من variants',
      Description: 'وصف المنتج',
      Caprice: 300,
      SPrice: 250,
      Code: 'P004',
      CoverImg: '/product3.png',
      IsDiscounted: false,
      IsPreOrder: false,
      IsVariant: true,
      NoQtySell: false,
      ProductImages: ['/product3.png'],
      ProductOptions: [
        {
          CatName: 'رقم',
          Items: [
            { ItemName: 'XS' },
            { ItemName: 'S' },
            { ItemName: 'M' },
            { ItemName: 'L' },
            { ItemName: 'XL' },
          ],
        },
        {
          CatName: 'ألوان متاحة',
          Items: [
            { BcolorHex: '#FF0000', ItemName: 'أحمر' },
            { BcolorHex: '#00FF00', ItemName: 'أخضر' },
          ],
        },
      ],
      Sku: 'SKU004',
      StockQuantity: 15,
      Wazn: null,
    };
    render(<ProductDetailsCard product={product} />);
    expect(screen.getByLabelText('اختيار المقاس XS')).toBeInTheDocument();
    expect(screen.getByLabelText('اختيار المقاس S')).toBeInTheDocument();
    expect(screen.getByLabelText('اختيار المقاس M')).toBeInTheDocument();
    expect(screen.getByLabelText('اختيار المقاس L')).toBeInTheDocument();
    expect(screen.getByLabelText('اختيار المقاس XL')).toBeInTheDocument();
    expect(screen.getByLabelText('اختيار اللون #FF0000')).toBeInTheDocument();
    expect(screen.getByLabelText('اختيار اللون #00FF00')).toBeInTheDocument();
  });
  it('renders product options (sizes and colors)', () => {
    const product = {
      Id: 3,
      Name: 'منتج مع خيارات',
      Description: 'وصف المنتج',
      Caprice: 200,
      SPrice: 150,
      Code: 'P003',
      CoverImg: '/product2.png',
      IsDiscounted: true,
      IsPreOrder: false,
      IsVariant: true,
      NoQtySell: false,
      ProductImages: ['/product2.png'],
      ProductOptions: [
        {
          CatName: 'رقم',
          Items: [{ ItemName: 'S' }, { ItemName: 'M' }, { ItemName: 'L' }],
        },
        {
          CatName: 'ألوان متاحة',
          Items: [
            { BcolorHex: '#000000', ItemName: 'أسود' },
            { BcolorHex: '#FFFFFF', ItemName: 'أبيض' },
          ],
        },
      ],
      Sku: 'SKU003',
      StockQuantity: 20,
      Wazn: null,
    };
    render(<ProductDetailsCard product={product} />);
    expect(screen.getByLabelText('اختيار المقاس S')).toBeInTheDocument();
    expect(screen.getByLabelText('اختيار المقاس M')).toBeInTheDocument();
    expect(screen.getByLabelText('اختيار المقاس L')).toBeInTheDocument();
    expect(screen.getByLabelText('اختيار اللون #000000')).toBeInTheDocument();
    expect(screen.getByLabelText('اختيار اللون #FFFFFF')).toBeInTheDocument();
  });
  it('renders product details', () => {
    const product = {
      Id: 1,
      Name: 'منتج تجريبي',
      Description: 'وصف المنتج',
      Caprice: 150,
      SPrice: 100,
      Code: 'P001',
      CoverImg: '/product1.png',
      IsDiscounted: false,
      IsPreOrder: false,
      IsVariant: true,
      NoQtySell: false,
      ProductImages: ['/product1.png'],
      ProductOptions: [],
      Sku: 'SKU001',
      StockQuantity: 10,
      Wazn: null,
    };
    render(<ProductDetailsCard product={product} />);
    expect(screen.getByText(/100 د.ل/)).toBeInTheDocument();
    expect(screen.getByText(/150 د.ل/)).toBeInTheDocument();
    expect(screen.getByLabelText('إضافة المنتج للسلة')).toBeInTheDocument();
  });

  it('renders with no variants', () => {
    const product = {
      Id: 2,
      Name: 'منتج بدون خيارات',
      Description: 'وصف المنتج',
      Caprice: 70,
      SPrice: 50,
      Code: 'P002',
      CoverImg: '',
      IsDiscounted: false,
      IsPreOrder: false,
      IsVariant: false,
      NoQtySell: false,
      ProductImages: [],
      ProductOptions: [],
      Sku: 'SKU002',
      StockQuantity: 5,
      Wazn: null,
    };
    render(<ProductDetailsCard product={product} />);
    expect(screen.getByText(/50 د.ل/)).toBeInTheDocument();
    expect(screen.getByText(/70 د.ل/)).toBeInTheDocument();
    expect(screen.getByLabelText('إضافة المنتج للسلة')).toBeInTheDocument();
  });
});
