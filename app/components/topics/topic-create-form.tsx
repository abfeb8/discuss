'use client';

import { createTopic } from "@/app/actions";
import { Popover, PopoverTrigger, PopoverContent, Button, Input, Textarea } from "@heroui/react";

export default function TopicCreateForm() {
    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">Create Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={createTopic}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">Create a Topic</h3>
                        <Input name="name" label="Name" labelPlacement="outside" placeholder="Name" />
                        <Textarea name="description" label="Description" labelPlacement="outside" placeholder="Topic Description" />
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}