import {Feed, FEED_FRAGMENT} from "../Feed/Feed";
import {gql} from "@apollo/client";
import {useUserQuery} from "../../gen/graphql/generated-types";

const userQueryDocument = gql`
    ${FEED_FRAGMENT}
    query user {
        user {
            id
            name
            age
            feed {
                ...FeedFields
            }
        }
    }
`

export default function User() {
    const {data, loading, error} = useUserQuery()

    if (loading) {
        return <div>loading</div>
    }

    if (error) {
        return <div>error</div>
    }

    return (
        <div>
            {data &&
                <div>
                    <h1>User</h1>
                    <ul>
                        <li>id:{data.user.id}</li>
                        <li>name:{data.user.name}</li>
                        <li>age:{data.user.age}</li>
                    </ul>
                    <Feed feedFragment={data.user.feed}/>
                </div>
            }
        </div>
    )
}