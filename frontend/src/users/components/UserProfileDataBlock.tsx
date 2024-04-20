import { Divider } from 'primereact/divider';
import classNames from 'classnames';
import classes from './UserProfilePage.module.scss';
import { Fieldset } from 'primereact/fieldset';
import { useUserData } from '../hooks/useUserData.ts';

export const UserProfileDataBlock = () => {
  const userData = useUserData();

  return (
    <Fieldset legend="Данные пользователя" toggleable>
      {userData.map((item, index) => {
        return (
          <>
            {!!index && <Divider />}
            <p className={classNames('m-0', item.onClick && classes.content_link)} onClick={item.onClick}>
              {item.label}: {item.value}
            </p>
          </>
        );
      })}
    </Fieldset>
  );
};
