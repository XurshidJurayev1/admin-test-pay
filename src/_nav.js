import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCalculator,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilHome, 
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },

{
    component: CNavGroup,
    name: 'Menu',
    to: '/menu',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/menu/accordion',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Main',
    to: '/admin/main',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Main Cards 4',
        to: '/admin/main/main-cards-4',
      },
      {
        component: CNavItem,
        name: 'Main Cards 4',
        to: '/admin/main/main-cards-4',
      },
      {
        component: CNavItem,
        name: 'Slider Cards',
        to: '/admin/main/slider-cards',
      },
      {
        component: CNavItem,
        name: 'Different',
        to: '/admin/main/different-cards',
      },
      {
        component: CNavItem,
        name: 'Banks',
        to: '/admin/main/banks',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'About',
    to: '/admin/about',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'About1',
        to: '/admin/about/about-1',
      },
      {
        component: CNavItem,
        name: 'About2',
        to: '/admin/about/about-2',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Contact',
    to: '/admin/contact',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Contact',
        to: '/admin/contact',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Vacancy',
    to: '/admin/vacancy',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'header',
        to: '/admin/vacancy/header',
      },
      {
        component: CNavItem,
        name: 'Vacancys',
        to: '/admin/vacancy/vacancy-items',
      },
    ],
  },


]

export default _nav
