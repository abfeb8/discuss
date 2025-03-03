'use server';

import { z } from 'zod';
import { db } from '../db';
import { Topic } from '@prisma/client';
import { redirect } from 'next/navigation';
import paths from '../utils/paths';
import { revalidatePath } from 'next/cache';
import { auth } from '../auth/auth';

const createTopicSchema = z.object({
	name: z
		.string()
		.min(3)
		.regex(
			/^[a-zA-Z0-9_]+$/,
			'Only alphanumeric characters and underscores are allowed'
		),
	description: z.string().min(10),
});

interface CreateTopicFormState {
	errors: {
		name?: string[];
		description?: string[];
		_form?: string[];
	};
}

export async function createTopic(
	formState: CreateTopicFormState,
	formData: FormData
): Promise<CreateTopicFormState> {
	const topicName = formData.get('name');
	const topicDesc = formData.get('description');

	console.log(
		`create new topic action called with Topic: ${topicName} Description: ${topicDesc}`
	);

	const result = createTopicSchema.safeParse({
		name: topicName,
		description: topicDesc,
	});

	if (!result.success) {
		console.log(
			'createTopic action failed with errors:',
			result.error.flatten().fieldErrors
		);
		return { errors: result.error.flatten().fieldErrors };
	}

	const session = await auth();
	if (!session || !session.user) {
		return { errors: { _form: ['You must be logged in!!'] } };
	}

	let topic: Topic;
	try {
		topic = await db.topic.create({
			data: {
				slug: result.data.name,
				description: result.data.description,
			},
		});
	} catch (error) {
		console.error('createTopic action failed with error:', error);
		if (error instanceof Error) {
			return { errors: { _form: [error.message] } };
		}
		return { errors: { _form: ['something went wrong'] } };
	}

	console.log('createTopic action succeeded');

	revalidatePath(paths.home());
	redirect(paths.topicShow(topic.slug));
}
