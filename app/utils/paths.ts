const paths = {
	home(): string {
		return '/pages/';
	},
	topicShow(topicSlug: string): string {
		return `/pages/topics/${topicSlug}/`;
	},
	postCreate(topicSlug: string): string {
		return `/pages/topics/${topicSlug}/posts/new`;
	},
	postShow(topicSlug: string, postId: string): string {
		return `/pages/topics/${topicSlug}/posts/${postId}`;
	},
};

export default paths;
