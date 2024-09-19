'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useClerk } from '@clerk/nextjs'; // Import useClerk to get the signOut function

export default function ChatPage() {
  const { signOut } = useClerk(); // Get signOut from useClerk

  // Messages state for chat
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `"Hi there! I'm ExploreEase, your guide to epic adventures. Ready to explore hidden gems and craft your perfect trip?"`,
    },
  ]);
  const [message, setMessage] = useState('');

  // Function to send messages
  const sendMessage = async () => {
    setMessage(''); // Clear the input field
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message }, // Add the user's message to the chat
      { role: 'assistant', content: '' }, // Add a placeholder for the assistant's response
    ]);

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...messages, { role: 'user', content: message }]),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let result = '';
    return reader.read().then(function processText({ done, value }) {
      if (done) {
        return result;
      }
      const text = decoder.decode(value || new Uint8Array(), { stream: true });
      setMessages((messages) => {
        let lastMessage = messages[messages.length - 1];
        let otherMessages = messages.slice(0, messages.length - 1);
        return [
          ...otherMessages,
          { ...lastMessage, content: lastMessage.content + text },
        ];
      });
      return reader.read().then(processText);
    });
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: `url(/assets/background.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Row className="w-100">
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <Card className="shadow-sm border-0">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <span>Welcome!</span>
              <Button
                variant="outline-danger"
                onClick={() => signOut()} // Use signOut from useClerk
                style={{ fontSize: '0.9rem' }}
              >
                Sign Out
              </Button>
            </Card.Header>
            <Card.Body
              className="d-flex flex-column"
              style={{
                height: '70vh',
                overflowY: 'auto',
                backgroundColor: '#f0f0f0', // Grey background for the chat area
              }}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`d-flex ${
                    message.role === 'assistant'
                      ? 'justify-content-start'
                      : 'justify-content-end'
                  } mb-3`}
                >
                  <div
                    className={`p-3 rounded ${
                      message.role === 'assistant'
                        ? 'text-white'
                        : 'text-white'
                    }`}
                    style={{
                      maxWidth: '75%',
                      backgroundColor:
                        message.role === 'assistant'
                          ? '#010106'
                          : '#17175b', // Navy and light blue
                    }}
                  >
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </Card.Body>
            <Card.Footer className="bg-white border-0 p-2">
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
              >
                <Row>
                  <Col xs={9}>
                    <Form.Control
                      type="text"
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="border-0"
                    />
                  </Col>
                  <Col xs={3} className="d-flex justify-content-end">
                    <Button
                      type="submit"
                      style={{ backgroundColor: '#010106', borderColor: '#010106' }}
                      className="text-white"
                    >
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

