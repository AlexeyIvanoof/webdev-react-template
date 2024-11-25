import { getUniqueValues } from '../utils/getUniqueValues'; 

describe('getUniqueValues', () => {
  it('должен возвращать уникальные значения из массива объектов', () => {
    const items = [
        { id: 1, name: 'Антон' },
        { id: 2, name: 'Вова' },
        { id: 3, name: 'Антон' },
        { id: 4, name: 'Дима' },
      ];
  
      const result = getUniqueValues(items, 'name');
  
      expect(result).toEqual(['Антон', 'Вова', 'Дима']);
    });

  it('должен обрабатывать пустой массив', () => {
    const items: any[] = [];

    const result = getUniqueValues(items, 'name');

    expect(result).toEqual([]);
  });

  it('должен обрабатывать нестроковые значения', () => {
    const items = [
      { id: 1, value: 1 },
      { id: 2, value: '1' },
      { id: 3, value: 1 },
    ];

    const result = getUniqueValues(items, 'value');

    expect(result).toEqual(['1']);
  });

  it('должен обрабатывать разные типы полей', () => {
    const items = [
      { id: 1, isActive: true },
      { id: 2, isActive: false },
      { id: 3, isActive: true },
    ];

    const result = getUniqueValues(items, 'isActive');

    expect(result).toEqual(['true', 'false']);
  });
});