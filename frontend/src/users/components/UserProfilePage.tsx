import { PanelMenu } from 'primereact/panelmenu';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

import { useMenuItem } from '../hooks/useMenuItem.ts';

import classes from './UserProfilePage.module.scss';
import { UserProfileDataBlock } from './UserProfileDataBlock.tsx';

export const UserProfilePage = () => {
  const menuItem = useMenuItem();

  return (
    <div className={classes.profile}>
      <div className={classes.sideBar}>
        <PanelMenu model={menuItem} className="w-full md:w-25rem" />
      </div>
      <div className={classes.content}>
        content
      </div>
      <div className={classes.user_data}>
        <div className={classes.avatar}>
          <Image
            src="https://static.tildacdn.com/tild6338-3666-4133-a633-643664333838/photo.jpg"
            width="250"
            alt="Image"
            preview
          />
        </div>
        <Button label="Изменить информацию" />
        <UserProfileDataBlock />
      </div>
    </div>
  );
};
