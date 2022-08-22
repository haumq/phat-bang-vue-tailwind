import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiHumanQueue,
  mdiSearchWeb,
  mdiCertificate,
  mdiFormatListBulletedSquare,
  mdiFormatListNumbered,
  mdiPlaylistCheck

} from '@mdi/js'


export default [
  {
    to: '/dashboard',
    icon: mdiMonitor,
    label: 'Thống kê'
  },
  {
    to: '/search',
    label: 'Tra cứu',
    icon: mdiSearchWeb
  },
  {
    to: '/wait',
    label: 'Đợi phát bằng',
    icon: mdiFormatListNumbered
  },
  {
    to: '/queue',
    label: 'Phát bằng',
    icon: mdiHumanQueue
  },
  {
    to: '/process',
    label: 'Xác nhận',
    icon: mdiPlaylistCheck
  },
  {
    to: '/finish',
    label: 'Đã nhận bằng',
    icon: mdiCertificate
  },
  {
    to: '/army',
    label: 'CC GDQP',
    icon: mdiCertificate
  }
  // ,
  // {
  //   to: '/student',
  //   label: 'Student',
  //   icon: mdiTable
  // }
  // ,
  // {
  //   to: '/tables',
  //   label: 'Tables',
  //   icon: mdiTable
  // },
  // {
  //   to: '/forms',
  //   label: 'Forms',
  //   icon: mdiSquareEditOutline
  // },
  // {
  //   to: '/ui',
  //   label: 'UI',
  //   icon: mdiTelevisionGuide
  // },
  // {
  //   to: '/responsive',
  //   label: 'Responsive',
  //   icon: mdiResponsive
  // },
  // {
  //   to: '/',
  //   label: 'Styles',
  //   icon: mdiPalette
  // },
  // {
  //   to: '/profile',
  //   label: 'Profile',
  //   icon: mdiAccountCircle
  // },
  // {
  //   to: '/login',
  //   label: 'Login',
  //   icon: mdiLock
  // },
  // {
  //   to: '/error',
  //   label: 'Error',
  //   icon: mdiAlertCircle
  // },
  // {
  //   label: 'Dropdown',
  //   icon: mdiViewList,
  //   menu: [
  //     {
  //       label: 'Item One'
  //     },
  //     {
  //       label: 'Item Two'
  //     }
  //   ]
  // },
  // {
  //   href: 'https://github.com/justboil/admin-one-vue-tailwind',
  //   label: 'GitHub',
  //   icon: mdiGithub,
  //   target: '_blank'
  // }
]


