import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { useState, useEffect } from 'react';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';

import classes from './Opportunities.module.scss';

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

interface TimelineEvent {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

export const Opportunities = () => {
  const [products] = useState<Product[]>([]);
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const events: TimelineEvent[] = [
    {
      status: 'Мы молодцы',
      date: '15/10/2020 10:30',
      icon: 'pi pi-shopping-cart',
      image: 'game-controller.jpg',
    },
    { status: 'И тут молодцы!', date: '15/10/2020 14:00', icon: 'pi pi-cog' },
    { status: 'Тут тоже молодцы', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart' },
  ];

  const customizedMarker = (item: TimelineEvent) => {
    return (
      <span
        className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item: TimelineEvent) => {
    return (
      <Card title={item.status} subTitle={item.date}>
        {item.image && (
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
            alt=""
            width={200}
            className="shadow-1"
          />
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
          deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
          neque quas!
        </p>
        <Button label="Read more" className="p-button-text"></Button>
      </Card>
    );
  };

  const getSeverity = (product: Product) => {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  useEffect(() => {
    // ProductService.getProductsSmall().then(data => setProducts(data.slice(0, 9)));
  }, []);

  const productTemplate = (product: Product) => {
    return (
      <div
        // className="border-1 surface-border border-round m-2 text-center py-5 px-3"
        className={classes.carouselItem}
      >
        <div className="mb-3">
          <img src={`${product.image}`} alt={product.name} className="w-6 shadow-2" style={{ width: '300px' }} />
        </div>
        <div className={classes.carouselItem_footer}>
          <h4 className="mb-1">{product.name}</h4>
          <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Carousel
        value={products}
        numVisible={3}
        numScroll={2}
        responsiveOptions={responsiveOptions}
        className={`custom-carousel ${classes.carousel}`}
        circular
        autoplayInterval={6000}
        itemTemplate={productTemplate}
      />
      <h1 className={classes.advantages}>Наши преимущества</h1>
      <div>
        <Timeline
          value={events}
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
    </div>
  );
};
