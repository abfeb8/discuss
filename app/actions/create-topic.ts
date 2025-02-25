'use server';

export async function createTopic(formData: FormData) {
    // TODO: revalidate the homepage
    
    const topicName = formData.get("name");
    const topicDesc = formData.get("description");
    
    console.log(`create new topic action called with ${topicName + " " + topicDesc}`);


}