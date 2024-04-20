import { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';

export const Company = () => {
  const navigate = useNavigate();
  const [data] = useState<any[]>([
    {
      expanded: true,
      type: 'person',
      className: 'bg-indigo-500 text-white',
      style: { borderRadius: '12px' },
      data: {
        image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        name: 'Amy Elsner',
        title: 'CEO',
      },
      children: [
        {
          expanded: true,
          type: 'person',
          className: 'bg-purple-500 text-white',
          style: { borderRadius: '12px' },
          data: {
            image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
            name: 'Anna Fali',
            title: 'CMO',
          },
          children: [
            {
              label: 'Sales',
              className: 'bg-purple-500 text-white',
              style: { borderRadius: '12px' },
            },
            {
              label: 'Marketing',
              className: 'bg-purple-500 text-white',
              style: { borderRadius: '12px' },
            },
          ],
        },
        {
          expanded: true,
          type: 'person',
          className: 'bg-teal-500 text-white',
          style: { borderRadius: '12px' },
          data: {
            image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'CTO',
          },
          children: [
            {
              label: 'Development',
              className: 'bg-teal-500 text-white',
              style: { borderRadius: '12px' },
            },
            {
              label: 'UI/UX Design',
              className: 'bg-teal-500 text-white',
              style: { borderRadius: '12px' },
            },
          ],
        },
      ],
    },
  ]);
  const items: MenuItem[] = [
    {
      label: 'Личный кабинет',
      command: () => {
        navigate('/profile', { replace: true });
      },
    },
    {
      label: 'Наша кампания',
      command: () => {
        navigate('/profile/company', { replace: true });
      },
    },
  ];
  const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' };

  const nodeTemplate = (node: any) => {
    if (node.type === 'person') {
      return (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
            <span className="font-bold mb-2" style={{ fontWeight: 'bold', marginBottom: '2px' }}>
              {node.data.name}
            </span>
            <span>{node.data.title}</span>
          </div>
        </div>
      );
    }

    return node.label;
  };

  return (
    <div>
      <BreadCrumb model={items} home={home} style={{ width: '500px' }} />
      <div>
        <h1 style={{ textAlign: 'center', margin: '50px' }}>Наша кампания</h1>
        <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
      </div>
    </div>
  );
};
