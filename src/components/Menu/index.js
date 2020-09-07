import React from 'react'
import PropTypes from 'prop-types'

import { Ul, Li, Container, Content } from './style'

const menu = [
  {
    title: 'Services',
    sub: [
      {
        title: 'Sustainable innovation',
      },
      {
        title: 'Transformation programmes',
      },
      {
        title: 'Professional education',
      },
    ],
  },
  {
    title: 'About Us',
  },
  {
    title: 'Contact',
  },
]

function DropdownContent({ items }) {
  return (
    <Container>
      {items.map(({ title }) => (
        <Content key={title}>{title}</Content>
      ))}
    </Container>
  )
}

DropdownContent.propTypes = {
  items: PropTypes.array,
}

function Menu({ children }) {
  return (
    <Ul>
      {menu.map(({ title, sub }) => (
        <Li key={title}>
          {title}
          {sub && <DropdownContent items={sub} />}
        </Li>
      ))}
    </Ul>
  )
}

Menu.propTypes = {
  children: PropTypes.string,
}

export default Menu
