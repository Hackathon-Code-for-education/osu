import classes from './Feed.module.scss';
import { useState } from 'react';
// import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Panel } from 'primereact/panel';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { Editor } from 'primereact/editor';
// import { Tooltip } from 'primereact/tooltip';
// import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadUploadEvent } from 'primereact/fileupload';
// import { ProgressBar } from 'primereact/progressbar';
// import { Tag } from 'primereact/tag';

export const Feed = () => {
  interface City {
    name: string;
    code: string;
  }

  interface University {
    name: string;
    code: string;
  }

  interface Faculty {
    name: string;
    code: string;
  }

  interface Group {
    name: string;
    code: string;
  }

  interface Potok {
    name: string;
    code: string;
  }

  // const [totalSize, setTotalSize] = useState(0);
  // const fileUploadRef = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  // const university: University[] = [
  //   { name: 'New York', code: 'NY' },
  //   { name: 'Rome', code: 'RM' },
  //   { name: 'London', code: 'LDN' },
  //   { name: 'Istanbul', code: 'IST' },
  //   { name: 'Paris', code: 'PRS' },
  // ];
  // const faculty: Faculty[] = [
  //   { name: 'New York', code: 'NY' },
  //   { name: 'Rome', code: 'RM' },
  //   { name: 'London', code: 'LDN' },
  //   { name: 'Istanbul', code: 'IST' },
  //   { name: 'Paris', code: 'PRS' },
  // ];
  // const group: Group[] = [
  //   { name: 'New York', code: 'NY' },
  //   { name: 'Rome', code: 'RM' },
  //   { name: 'London', code: 'LDN' },
  //   { name: 'Istanbul', code: 'IST' },
  //   { name: 'Paris', code: 'PRS' },
  // ];
  // const potok: Potok[] = [
  //   { name: 'New York', code: 'NY' },
  //   { name: 'Rome', code: 'RM' },
  //   { name: 'London', code: 'LDN' },
  //   { name: 'Istanbul', code: 'IST' },
  //   { name: 'Paris', code: 'PRS' },
  // ];
  const [paramCity, setParamCity] = useState<City | null>(null);
  const [paramUniversity, setParamUniversity] = useState<University | null>(null);
  const [paramFaculty, setParamFaculty] = useState<Faculty | null>(null);
  const [paramGroup, setParamGroup] = useState<Group | null>(null);
  const [paramPotok, setParamPotok] = useState<Potok | null>(null);

  // const [feedTitle, setFeedTitle] = useState('');
  // const [value, setValue] = useState('');
  // const [feedDescription, setFeedDescription] = useState('');
  const feedData = [
    {
      id: 123,
      title: 'Спортивное программирование (заголовок)',
      created_at: '24.03.2024',
      description:
        'Областные соревнования\n' + 'по спортивному программированию, дисциплина «программирование продуктовое»',
      tag: 'sport',
      author: {
        id: 85,
        name: 'Nikola Porosuk',
        role: 'student',
        faculty: 'ОГУ',
        group: '20ПИНж',
      },
      likes: 99,
    },
    {
      id: 123,
      title: 'dlfsj',
      created_at: 123,
      description: 'description ;sdjjlfkjasd;flsdjfkasjfljasdlkfjsjdlk',
      tag: 'sport',
      author: {
        id: 85,
        name: 'Genady Visulin',
        role: 'student',
        faculty: 'ОГУ',
        group: '20ПИНж',
      },
      likes: 99,
    },
    {
      id: 123,
      title: 'dlfsj',
      created_at: 123,
      description: 'description ;sdjjlfkjasd;flsdjfkasjfljasdlkfjsjdlk',
      tag: 'sport',
      author: {
        id: 85,
        name: 'Genady Visulin',
        role: 'student',
        faculty: 'ОГУ',
        group: '20ПИНж',
      },
      likes: 99,
    },
  ];
  // const tagsData = [
  //   {
  //     name: 'наука',
  //     value: 2,
  //   },
  //   {
  //     name: 'спорт',
  //     value: 3,
  //   },
  //   {
  //     name: 'творчество',
  //     value: 4,
  //   },
  //   {
  //     name: 'волонтерство',
  //     value: 1,
  //   },
  // ];
  // const onTemplateSelect = (e: FileUploadUploadEvent) => {
  //   let _totalSize = totalSize;
  //   const files = e.files;
  //
  //   for (let i = 0; i < files.length; i++) {
  //     _totalSize += files[i].size || 0;
  //   }
  //
  //   setTotalSize(_totalSize);
  // };
  //
  // const onTemplateUpload = (e: FileUploadUploadEvent) => {
  //   let _totalSize = 0;
  //
  //   e.files.forEach(file => {
  //     _totalSize += file.size || 0;
  //   });
  // };

  // const onTemplateRemove = (file: File, callback: any) => {
  //   setTotalSize(totalSize - file.size);
  //   callback();
  // };
  //
  // const onTemplateClear = () => {
  //   setTotalSize(0);
  // };
  // const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
  //   const { className, chooseButton, uploadButton, cancelButton } = options;
  //   const value = totalSize / 10000;
  //   const formatedValue =
  //     fileUploadRef && fileUploadRef.current ? (fileUploadRef.current as any).formatSize(totalSize) : '0 B';
  //   return (
  //     <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
  //       {chooseButton}
  //       {uploadButton}
  //       {cancelButton}
  //       <div className="flex align-items-center gap-3 ml-auto">
  //         <span>{formatedValue} / 1 MB</span>
  //         <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
  //       </div>
  //     </div>
  //   );
  // };
  // const itemTemplate = (inFile: object, props: any) => {
  //   const file = inFile as File;
  //   return (
  //     <div className="flex align-items-center flex-wrap">
  //       <div className="flex align-items-center" style={{ width: '40%' }}>
  //         // @ts-ignore
  //         <img alt={file.name} role="presentation" src={(file as any).objectURL} width={100} />
  //         <span className="flex flex-column text-left ml-3">
  //           {file.name}
  //           <small>{new Date().toLocaleDateString()}</small>
  //         </span>
  //       </div>
  //       <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
  //       <Button
  //         type="button"
  //         icon="pi pi-times"
  //         className="p-button-outlined p-button-rounded p-button-danger ml-auto"
  //         onClick={() => onTemplateRemove(file, props.onRemove)}
  //       />
  //     </div>
  //   );
  // };
  //
  // const emptyTemplate = () => {
  //   return (
  //     <div className="flex align-items-center flex-column">
  //       <i
  //         className="pi pi-image mt-3 p-5"
  //         style={{
  //           fontSize: '5em',
  //           borderRadius: '50%',
  //           backgroundColor: 'var(--surface-b)',
  //           color: 'var(--surface-d)',
  //         }}
  //       ></i>
  //       <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
  //         Drag and Drop Image Here
  //       </span>
  //     </div>
  //   );
  // };

  // const chooseOptions = {
  //   icon: 'pi pi-fw pi-images',
  //   iconOnly: true,
  //   className: 'custom-choose-btn p-button-rounded p-button-outlined',
  // };
  // const uploadOptions = {
  //   icon: 'pi pi-fw pi-cloud-upload',
  //   iconOnly: true,
  //   className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
  // };
  // const cancelOptions = {
  //   icon: 'pi pi-fw pi-times',
  //   iconOnly: true,
  //   className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
  // };

  // @ts-ignore
  return (
    <div>
      {/*<div className={classes.editFeed}>*/}
      {/*  <h3>Создание поста</h3>*/}
      {/*  <div>Заголовок поста</div>*/}
      {/*  <InputTextarea autoResize value={feedTitle} onChange={e => setFeedTitle(e.target.value)} rows={3} cols={30} />*/}

      {/*  <div>*/}
      {/*    <div>Текст поста</div>*/}
      {/*    <Editor*/}
      {/*      value={feedDescription}*/}
      {/*      onTextChange={(e: any) => setFeedDescription(e.htmlValue)}*/}
      {/*      style={{ height: '320px' }}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />*/}
      {/*    <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />*/}
      {/*    <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />*/}

      {/*    <FileUpload*/}
      {/*      ref={fileUploadRef}*/}
      {/*      name="demo[]"*/}
      {/*      url="/api/upload"*/}
      {/*      multiple*/}
      {/*      accept="image/*"*/}
      {/*      maxFileSize={1000000}*/}
      {/*      onUpload={onTemplateUpload}*/}
      {/*      // @ts-ignore*/}
      {/*      onSelect={onTemplateSelect}*/}
      {/*      onError={onTemplateClear}*/}
      {/*      onClear={onTemplateClear}*/}
      {/*      headerTemplate={headerTemplate}*/}
      {/*      itemTemplate={itemTemplate}*/}
      {/*      emptyTemplate={emptyTemplate}*/}
      {/*      chooseOptions={chooseOptions}*/}
      {/*      uploadOptions={uploadOptions}*/}
      {/*      cancelOptions={cancelOptions}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className={classes.feedPage}>
        <div className={classes.feedList}>
          {feedData.map(feed => (
            <div className={classes.feedItem}>
              <div className={classes.feedItem_header}>
                <div className={classes.feedItem_header__userInfo}>
                  <div className={classes.feedItem_header__avatar}></div>
                  <div className={classes.feedItem_header__header_text}>
                    <div className={classes.feedItem_header__userName}>{feed.author.name}</div>
                    <div className={classes.feedItem_header__date}>{feed.created_at}</div>
                  </div>
                </div>
                <div className={classes.feedItem_header__title}>{feed.title}</div>
                <div className={classes.feedItem_header__saved}>
                  <Chip label={feed.author.group} />
                  <Chip label={feed.author.faculty} />
                  {isSaved ? (
                    <i
                      className="pi pi-bookmark-fill"
                      onClick={() => setIsSaved(!isSaved)}
                      style={{ color: 'slateblue' }}
                    ></i>
                  ) : (
                    <i
                      className="pi pi-bookmark"
                      onClick={() => setIsSaved(!isSaved)}
                      style={{ color: 'slateblue' }}
                    ></i>
                  )}
                </div>
              </div>
              <div className={classes.feedItem_main}>
                <div className={classes.feedItem_main__image}></div>
              </div>
              <div className={classes.feedItem_bottom}>
                <i
                  className="pi pi-heart"
                  onClick={() => setIsLiked(!isLiked)}
                  style={{ color: isLiked ? 'red' : 'slateblue' }}
                ></i>
                <span>{feed.likes}</span>
                <i className="pi pi-comment" onClick={() => setIsLiked(!isLiked)} style={{ color: 'slateblue' }}></i>
                <div className={classes.feedItem_header__chipsGroup}>
                  <Chip label="Наука" image="../../../public/scinse.png" className={classes.chip} />
                  <Chip label="Спорт" image="../../../public/sport.png" className={classes.chip} />
                </div>
              </div>
              <div className={classes.feedItem_main__description}>{feed.description}</div>
            </div>
          ))}
        </div>
        <Panel header={'Фильтры'} toggleable className={classes.searchGroup}>
          <div className={classes.aside}>
            <div className={classes.filterItem}>
              <div>Город</div>
              <Dropdown
                filter
                inputId="dd-city"
                value={paramCity}
                onChange={(e: DropdownChangeEvent) => setParamCity(e.value)}
                options={cities}
                optionLabel="name"
                className={classes.filterItem__input}
              />
            </div>
            <div className={classes.filterItem}>
              <div>ВУЗ</div>
              <Dropdown
                filter
                inputId="dd-city"
                value={paramUniversity}
                onChange={(e: DropdownChangeEvent) => setParamUniversity(e.value)}
                options={cities}
                optionLabel="name"
                className={classes.filterItem__input}
              />
            </div>
            <div className={classes.filterItem}>
              <div>Факультет</div>
              <Dropdown
                filter
                inputId="dd-city"
                value={paramFaculty}
                onChange={(e: DropdownChangeEvent) => setParamFaculty(e.value)}
                options={cities}
                optionLabel="name"
                className={classes.filterItem__input}
              />
            </div>
            <div className={classes.filterItem}>
              <div>Група</div>
              <Dropdown
                filter
                inputId="dd-city"
                value={paramGroup}
                onChange={(e: DropdownChangeEvent) => setParamGroup(e.value)}
                options={cities}
                optionLabel="name"
                className={classes.filterItem__input}
              />
            </div>
            <div className={classes.filterItem}>
              <div>Поток</div>
              <Dropdown
                filter
                inputId="dd-city"
                value={paramPotok}
                onChange={(e: DropdownChangeEvent) => setParamPotok(e.value)}
                options={cities}
                optionLabel="name"
                className={classes.filterItem__input}
              />
            </div>
            <div className={classes.feedFilter__buttonGroup}>
              <Button label="Сбросить" outlined />
              <Button label="Применить" />
            </div>
          </div>
        </Panel>
      </div>
      {/*<div className={classes.searchGroup}>*/}
      {/*  <div className={classes.aside}>*/}
      {/*    <Button>Создать пост</Button>*/}
      {/*    /!*@ts-ignore*!/*/}
      {/*    <InputText id="username" value={value} onChange={e => setValue(e.currentTarget.value)} />*/}
      {/*    <label htmlFor="username">Поиск городам</label>*/}
      {/*    /!*@ts-ignore*!/*/}
      {/*    <InputText id="username" value={value} onChange={e => setValue(e.currentTarget.value)} />*/}
      {/*    <label htmlFor="username">Поиск вузам</label>*/}
      {/*    /!*@ts-ignore*!/*/}
      {/*    <InputText id="username" value={value} onChange={e => setValue(e.currentTarget.value)} />*/}
      {/*    <label htmlFor="username">Поиск по факультетам</label>*/}
      {/*    /!*@ts-ignore*!/*/}
      {/*    <InputText id="username" value={value} onChange={e => setValue(e.currentTarget.value)} />*/}
      {/*    <label htmlFor="username">Поиск группам</label>*/}
      {/*    /!*@ts-ignore*!/*/}
      {/*    <InputText id="username" value={value} onChange={e => setValue(e.currentTarget.value)} />*/}
      {/*    <label htmlFor="username">Поиск по потокам</label>*/}
      {/*    <label>Поиск по тегам</label>*/}
      {/*    <SelectButton*/}
      {/*      className={classes.tags}*/}
      {/*      value={tags}*/}
      {/*      onChange={(e: SelectButtonChangeEvent) => setTags(e.value)}*/}
      {/*      optionLabel="name"*/}
      {/*      options={tagsData}*/}
      {/*      multiple*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
