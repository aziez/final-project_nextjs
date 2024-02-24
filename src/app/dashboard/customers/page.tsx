import React from 'react'
import PropTypes from 'prop-types'

interface PropTypes {
  props?: string
}

const Customers: React.FC<PropTypes> = ({ props }) => {
  return (
    <div>
      <h1 className=" font-jakarta text-xl">HALAMAN CUSTOMER</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        perspiciatis libero, voluptas consectetur illo aspernatur quis sint
        laborum ipsam nobis saepe sit aut omnis modi sunt blanditiis quam
        officia sapiente repudiandae assumenda? Odio, voluptatibus beatae!
        Perspiciatis repellendus, quia eligendi ducimus esse minima laudantium
        deleniti, reiciendis maxime inventore iste earum. In laborum impedit,
        omnis odit fugit vel molestiae nam autem aliquam? Repellendus veniam
        numquam nobis cum mollitia, itaque quos explicabo dolorem! Odit magnam
        maiores voluptatibus aut debitis iste, eos non voluptatem libero ipsum
        numquam id commodi nulla recusandae obcaecati. Architecto non illum
        tenetur molestiae inventore nostrum ipsa aperiam sunt ullam aliquid?s
      </h4>
    </div>
  )
}

export default Customers
