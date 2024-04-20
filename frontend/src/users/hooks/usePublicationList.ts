export const usePublicationList = () => {
  const items = [
    {
      id: '1',
      src: 'https://primefaces.org/cdn/primereact/images/usercard.png',
      tags: ['Action'],
      date: '01.01.2024',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    },
    {
      id: '2',
      src: 'https://primefaces.org/cdn/primereact/images/usercard.png',
      tags: ['Action', 'Action2'],
      date: '01.01.2024',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    },
    {
      id: '3',
      src: 'https://primefaces.org/cdn/primereact/images/usercard.png',
      tags: ['Action'],
      date: '01.01.2024',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    },
    {
      id: '4',
      src: 'https://primefaces.org/cdn/primereact/images/usercard.png',
      tags: ['Action'],
      date: '01.01.2024',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    },
  ];

  return items.slice(0, 4);
};
