import { useState } from "react";

/* eslint-disable react/prop-types */
export function TwitterFollowCard({ userName, name }) {

	const [isFollowing, setIsFollowing] = useState(false)


	const followText = isFollowing ? "Unfollow" : "Follow"
	const twFollowClassName = isFollowing ? 'tw-isFollowing' : 'tw-notFollowing';

	return (<article className="tw-followCard">
		<header className="tw-followCard-header">
			<img className="tw-followCard-avatar" alt="avatar" src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" />
			<div>
				<strong>
					{userName}
				</strong>
				<span>
					@{name}
				</span>
			</div>
		</header>
		<aside>
			<button className="twFollowClassName" onClick={() => setIsFollowing(!isFollowing)}>
				{followText}
			</button>
		</aside>
	</article>)
}