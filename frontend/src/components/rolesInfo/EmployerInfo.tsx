import classes from './EmployerInfo.module.scss';
import {Timeline} from "primereact/timeline";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {AuthPage} from "../../auth/components/AuthPage.tsx";

export const EmployerInfo = () => {
    interface TimelineEvent {
        status?: string;
        date?: string;
        icon?: string;
        color?: string;
        image?: string;
    }

    const events: TimelineEvent[] = [
        {
            status: 'Мы молодцы',
            icon: 'pi pi-shopping-cart',
            image: 'game-controller.jpg',
        },
        {status: 'И тут молодцы!', icon: 'pi pi-cog'},
        {status: 'Тут тоже молодцы', icon: 'pi pi-shopping-cart'},
    ];

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span
                className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
                style={{backgroundColor: item.color}}
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
                    ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                    numquam
                    deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                    cupiditate
                    neque quas!
                </p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };

    return (
        <div>
            <h1 className={classes.title}>
                Информация предпринимателям
            </h1>
            <div className={classes.description}>
                ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
                deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                cupiditate neque quas!
            </div>

            <div>
                <Timeline
                    value={events}
                    align="alternate"
                    className="customized-timeline"
                    marker={customizedMarker}
                    content={customizedContent}
                />
            </div>
            <AuthPage/>
        </div>
    )
}
