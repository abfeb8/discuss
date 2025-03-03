'use client';

import { createTopic } from '@/app/actions';
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
	Input,
	Textarea,
	Form,
} from '@heroui/react';
import { startTransition, useActionState } from 'react';

export default function TopicCreateForm() {
	const [formState, action] = useActionState(createTopic, { errors: {} });

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		console.log('handleSubmit called');

		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		startTransition(() => {
			action(formData);
		});
	}

	return (
		<Popover placement="bottom-end">
			<PopoverTrigger>
				<Button color="primary">Create Topic</Button>
			</PopoverTrigger>
			<PopoverContent>
				<Form onSubmit={handleSubmit}>
					<div className="flex flex-col gap-4 p-4 w-80">
						<h3 className="text-lg">Create a Topic</h3>
						<Input
							autoFocus
							name="name"
							label="Name"
							labelPlacement="outside"
							placeholder="Name"
							isInvalid={!!formState.errors.name}
							errorMessage={formState.errors.name?.join(', \n')}
						/>
						<Textarea
							name="description"
							label="Description"
							labelPlacement="outside"
							placeholder="Topic Description"
							isInvalid={!!formState.errors.description}
							errorMessage={formState.errors.description?.join(
								', '
							)}
						/>
						{formState.errors._form ? (
							<div className="p-2 rounded border border-red-400 bg-red-100">
								{formState.errors._form.join(',')}
							</div>
						) : null}
						<Button type="submit">Submit</Button>
					</div>
				</Form>
			</PopoverContent>
		</Popover>
	);
}
