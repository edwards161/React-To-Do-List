import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

//We can group tests with a describe block

describe("app.js tests", () => {
  test('renders to do header', () => {
    render(<App />);
    const linkElement = screen.getByText("TO DO LIST.");
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders to do h1 element', () => {
    render(<App />);
    const headElement = screen.getByRole("heading");
    expect(headElement).toBeInTheDocument();
  });
  
  test("Add to list button works", () => {
    render(<App />)
    const submitButton = screen.getByText("Add To List")
    fireEvent.click(submitButton)
    expect(deleteBtn).toBeInTheDocument()
  });

});


