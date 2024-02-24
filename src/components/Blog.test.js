import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Blog from "./Blog";

const newBlog = {
  title: "hello world",
  author: "test",
  likes: 0,
  url: "test.com",
  user: {
    username: "testing",
  },
};

const loggedUser = {
  username: "sus",
  name: "sushant",
};

describe("<Blog /> ", () => {
  let container;
  beforeEach(() => {
    ({ container } = render(
      <Blog blog={newBlog} signedInUser={loggedUser} />,
    ));
  });

  test("shows blog's title and author", () => {
    const div = container.querySelector(".title-and-author");
    expect(div).toHaveTextContent("hello world test");
  });

  test("doesn't initially show blog's other details", () => {
    const div = container.querySelector(".blog-extra-details");
    expect(div).toHaveStyle("display:none");
  });
});
