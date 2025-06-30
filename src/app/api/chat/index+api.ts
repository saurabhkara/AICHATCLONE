import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_SECRET_KEY,
});


// export function GET(request: Request) {
//     console.log("responseHha")
//     return Response.json({ name: 'Saurabh' });
// }


export async function POST(request: Request) {
    const { message, previousResponseId, image } = await request.json();
    let messageContent = message;
    if (image) {
        messageContent = [
            { role: 'user', content: message },
            {
                role: 'user',
                content: [{ type: 'input_image', image_url: image }]
            }
        ]
    }

    try {
        const response = await openai.responses.create({
            model: 'gpt-4.1',
            input: message,
            ...(previousResponseId && { previous_response_id: previousResponseId }),
        });

        return Response.json({ responseMessage: response.output_text, responseId: response.id, });
    } catch (error) {
        console.error('OpenAI error:', error);
        return Response.json({ error: 'Failed to generate response' }, { status: 500 });
    }
}