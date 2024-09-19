import { NextResponse } from 'next/server'; // Import NextResponse from Next.js for handling responses
import Groq from 'groq-sdk'; // Import Groq SDK

// System prompt for the AI, providing guidelines on how to respond to users
const systemPrompt = `You are the ExploreEase chatbot, designed to assist users in planning their day by providing information on itineraries and exploring details of various places. Your primary goal is to help users discover new destinations, suggest activities, and create personalized travel plans based on their preferences.

When a user asks about a specific location, you should:

1. Provide a brief overview of the destination, including key attractions and unique features.
2. Suggest a well-structured itinerary that includes activities, dining options, and travel tips.
3. Ask questions to better understand the user's interests, such as preferred activities (e.g., sightseeing, adventure, cultural experiences), time available, and budget.
4. Offer recommendations for transportation and accommodations if relevant.
5. Be friendly, engaging, and informative, ensuring users feel excited about their exploration.
6. **Ensure the response is formatted with bullet points for clarity and easy reading.**
7. **Use markdown formatting for bullet points and bold text where necessary.**
8. Always prioritize user satisfaction and strive to enhance their exploring experience.`;


// POST function to handle incoming requests
export async function POST(req) {
    // Create a new instance of the Groq client
    const groq = new Groq({
        apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY, // Use the API key from environment variables
        dangerouslyAllowBrowser: true, // Allow browser usage
    });

    const data = await req.json(); // Parse the JSON body of the incoming request

    // Create a chat completion request to the Groq API
    const completion = await groq.chat.completions.create({
        messages: [{ role: 'system', content: systemPrompt }, ...data], // Include the system prompt and user messages
        model: 'llama3-8b-8192', // Specify the model to use
        stream: true, // Enable streaming responses
    });

    const stream = new ReadableStream({
        async start(controller) {
            const encoder = new TextEncoder(); // Create a TextEncoder to convert strings to Uint8Array
            try {
                // Iterate over the streamed chunks of the response
                for await (const chunk of completion) {
                    const content = chunk.choices[0]?.delta?.content; // Extract the content from the chunk
                    if (content) {
                        const text = encoder.encode(content); // Encode the content to Uint8Array
                        controller.enqueue(text); // Enqueue the encoded text to the stream
                    }
                }
            } catch (err) {
                controller.error(err); // Handle any errors that occur during streaming
            } finally {
                controller.close(); // Close the stream when done
            }
        },
    });

    return new NextResponse(stream);
}
