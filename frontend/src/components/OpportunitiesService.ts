export const ProductService = {
  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Реклама 1',
        image: 'https://twelve.alexmade.ru/wp-content/uploads/2022/10/tech_support.png',
        category: 'Accessories',
        inventoryStatus: ['Функц. возможность 1'],
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Реклама 2',
        image:
          'https://cdn-ru.bitrix24.ru/b17416066/landing/294/294a8524f1cfe0c394cc9107e50e63e7/7f0da56698eb928ae0be_1x.png',
        category: 'Accessories',
        inventoryStatus: ['Функц. возможность 1'],
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Реклама 3',
        image: 'https://бизнесангелы.рф/wp-content/uploads/2022/09/123123.jpg',
        category: 'Accessories',
        inventoryStatus: ['Функц. возможность 1'],
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Реклама 4',
        image: 'https://fixcards.com.br/wp-content/uploads/2021/12/Blog_Proatividade.png',
        category: 'Accessories',
        inventoryStatus: ['Функц. возможность 1'],
      },
    ];
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },
};
