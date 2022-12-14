import {FEED_ITEM_FRAGMENT, FeedItem} from "../FeedItem/FeedItem";
import {gql} from "@apollo/client";
import {FeedFieldsFragment} from "../../gen/graphql/generated-types";

export const FEED_FRAGMENT = gql`
    ${FEED_ITEM_FRAGMENT}
    fragment FeedFields on Feed {
        id
        feedItems {
            ...FeedItemFields
        }
    }
`

type Props = {
    feedFragment: FeedFieldsFragment
}

export function Feed( {feedFragment}:Props) {
    return (
        <div>
            {
                feedFragment.feedItems.map((feedItemFragment, index) => {
                    return ( feedItemFragment ? <FeedItem key={index} feedItemFragment={feedItemFragment} /> : null);
                })
            }
        </div>
    )
}