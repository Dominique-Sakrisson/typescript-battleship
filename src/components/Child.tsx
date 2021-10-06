import React, {FC} from 'react'

type ChildProps ={
    name: string,
    id: number,
    bio?: string
};

const Child: FC<ChildProps> = ({name, id, bio = 'Bio empty'}) => {
    return (
        <div>
            <h2>name: {name}, ID: {id}</h2>
            <p>{bio}</p>
        </div>
    )
}

export default Child;
