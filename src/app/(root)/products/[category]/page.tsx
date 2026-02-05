import React from 'react'

const Page = ({params}:{params:Promise<{category:string}>}) => {

    const {category} = React.use(params);

    return (
        <div>{category}</div>
    )
}
export default Page
