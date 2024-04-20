import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { useState } from 'react';

import classes from './TestPage.module.scss';

export const TestPage = () => {
  const [ingredient, setIngredient] = useState('');

  return (
    <div className={classes.testPage}>
      <div className={classes.header}>
        <h1 className={classes.headerTitle}>Название теста</h1>
      </div>
      <div className={classes.body}>
        <div className={classes.navigation}>
          <div>Навигация по тесту:</div>
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', maxWidth: '200px', flexWrap: 'wrap' }}>
            <Button icon="pi" label="1" rounded outlined aria-label="Filter" />
            <Button icon="pi" label="2" rounded aria-label="Filter" />
            <Button icon="pi" label="3" rounded outlined aria-label="Filter" />
            <Button icon="pi" label="4" rounded aria-label="Filter" />
            <Button icon="pi" label="5" rounded outlined aria-label="Filter" />
          </div>
        </div>
        <div className={classes.content}>
          <div>Вопрос 1: Кто крыса в нашей команде</div>
          <div className={classes.answer}>
            <div>
              <RadioButton
                inputId="ingredient1"
                name="pizza"
                value="Женя"
                onChange={e => setIngredient(e.value)}
                checked={ingredient === 'Женя'}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Женя
              </label>
            </div>
            <div>
              {' '}
              <RadioButton
                inputId="ingredient1"
                name="pizza"
                value="Игорь"
                onChange={e => setIngredient(e.value)}
                checked={ingredient === 'Игорь'}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Игорь
              </label>
            </div>
            <div>
              <RadioButton
                inputId="ingredient1"
                name="pizza"
                value="Влад"
                onChange={e => setIngredient(e.value)}
                checked={ingredient === 'Влад'}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Влад
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
