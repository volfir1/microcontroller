import { useState } from 'react';
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { MdSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { Code, Group } from '@mantine/core';
import classes from './sidebar.module.css';
import {Link} from 'react-router'

const data = [
  { link: '/dashboard', label: 'Dashboard', icon: MdSpaceDashboard },
  { link: '', label: 'Live Data', icon: FaDatabase },
  { link: '', label: 'Posture & Position', icon: IconFingerprint },
  { link: '', label: 'Device Controls', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Sleep History', icon: GiNightSleep},
  { link: '', label: 'System Settings', icon: IconSettings },
];

export function Sidebar() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <Link
      to='/dashboard'
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Code fw={700} className={classes.version}>
            Micricontroller
          </Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}