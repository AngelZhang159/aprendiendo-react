import React from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
	return (
		<>
			<TwitterFollowCard userName='pepe' name='ads' />

			<TwitterFollowCard userName='pepe' name='ads' />

			<TwitterFollowCard userName='pepe' name='ads' isFollowing={false} />
		</>
	)
}